(function () {
  const {
    esc, stock, imgHtml, hl, galleryHtml, partPhotos, findPart,
    partMatchesSearchWorker, collectMachines, fetchParts, fetchEmployees, withdraw, toast,
  } = window.L4;

  let parts = [];
  let employees = [];
  let session = { badge4: '', employee: null, machine: '' };
  let badgeDigits = '';
  let searchQuery = '';
  let selectedPart = null;

  const $ = id => document.getElementById(id);

  function isEmbed() {
    return new URLSearchParams(location.search).has('embed');
  }

  function showScreen(id) {
    document.querySelectorAll('#l4PaneSuche .l4-screen').forEach(s => s.classList.remove('on'));
    $(id)?.classList.add('on');
  }

  function syncBadgeUi() {
    const display = $('l4BadgeDisplay');
    if (display) {
      display.value = badgeDigits ? '•'.repeat(badgeDigits.length) : '';
    }
    const weiter = $('l4BadgeWeiter');
    if (weiter) weiter.disabled = badgeDigits.length !== 4;
  }

  function resetSession() {
    session = { badge4: '', employee: null, machine: '' };
    badgeDigits = '';
    searchQuery = '';
    selectedPart = null;
    $('l4BadgeErr').textContent = '';
    if ($('l4SearchInput')) $('l4SearchInput').value = '';
    syncBadgeUi();
    closeDetail();
    showScreen('l4ScreenBadge');
    $('l4ScanInput')?.focus();
  }

  function buildKeypad() {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'];
    $('l4Keypad').innerHTML = keys.map(k => {
      const cls = k === 'C' || k === '⌫' ? ' l4-key-muted' : '';
      return `<button type="button" class="l4-key${cls}" data-key="${esc(k)}">${k}</button>`;
    }).join('');
    $('l4Keypad').addEventListener('click', e => {
      const btn = e.target.closest('[data-key]');
      if (!btn) return;
      onKey(btn.dataset.key);
    });
  }

  function onKey(k) {
    $('l4BadgeErr').textContent = '';
    if (k === 'C') {
      badgeDigits = '';
      syncBadgeUi();
      return;
    }
    if (k === '⌫') {
      badgeDigits = badgeDigits.slice(0, -1);
      syncBadgeUi();
      return;
    }
    if (badgeDigits.length >= 4) return;
    badgeDigits += k;
    syncBadgeUi();
  }

  function submitBadge() {
    if (badgeDigits.length !== 4) return;
    const emp = employees.find(e => e.badge4 === badgeDigits);
    if (!emp) {
      $('l4BadgeErr').textContent = 'Unbekannte Badge-Nummer';
      badgeDigits = '';
      syncBadgeUi();
      return;
    }
    session.badge4 = badgeDigits;
    session.employee = emp;
    buildMachines();
    showScreen('l4ScreenMachine');
  }

  function buildMachines() {
    const tiles = collectMachines(parts);
    $('l4MachineGrid').innerHTML = tiles.map(m => `
      <button type="button" class="l4-machine-tile${m === 'Sonstiges' ? ' sonstiges' : ''}" data-machine="${esc(m)}">${esc(m)}</button>
    `).join('');
  }

  function bindMachines() {
    $('l4MachineGrid').addEventListener('click', e => {
      const t = e.target.closest('[data-machine]');
      if (!t) return;
      session.machine = t.dataset.machine;
      updateContext();
      showScreen('l4ScreenSearch');
      renderGrid();
      $('l4SearchInput')?.focus();
    });
  }

  function updateContext() {
    $('l4ContextBar').innerHTML = `
      <span>👤 <strong>${esc(session.employee?.name || '')}</strong></span>
      <span>🏭 <strong>${esc(session.machine)}</strong></span>
    `;
  }

  function filteredParts() {
    return parts.filter(p => partMatchesSearchWorker(p, searchQuery));
  }

  function renderGrid() {
    const list = filteredParts();
    $('l4ResultCount').textContent = list.length;
    const grid = $('l4Grid');
    const noR = $('l4NoResults');
    if (!list.length) {
      grid.innerHTML = '';
      noR.style.display = 'block';
      return;
    }
    noR.style.display = 'none';
    const q = searchQuery.toLowerCase();
    grid.innerHTML = list.map(p => {
      const s = stock(p.bestand, p.minBestand);
      const out = (parseInt(p.bestand, 10) || 0) === 0;
      return `<div class="card${out ? ' l4-card-disabled' : ''}" data-part="${p.id}" role="button" tabindex="0">
        <div class="card-img">${imgHtml(p, 44)}<div class="card-stock ${s.cls}">${s.label} · ${p.bestand} Stk.</div></div>
        <div class="card-body">
          <div class="card-category">${esc(p.category)}</div>
          <div class="card-name">${hl(p.name, q)}</div>
          <div class="card-meta">
            <div class="card-meta-row">📦 <strong>${hl(p.location, q)}</strong></div>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  function openDetail(id) {
    const p = findPart(parts, id);
    if (!p) return;
    selectedPart = p;
    const bestand = parseInt(p.bestand, 10) || 0;
    $('l4ModalGallery').innerHTML = galleryHtml(p);
    $('l4ModalCat').textContent = p.category || '—';
    $('l4ModalName').textContent = p.name || '—';
    $('l4ModalType').textContent = p.type || '—';
    $('l4ModalDesc').textContent = p.desc || '—';
    $('l4ModalNr').textContent = p.nr || '—';
    $('l4ModalBestNr').textContent = p.bestNr || '—';
    $('l4ModalLoc').textContent = p.location || '—';
    $('l4ModalBestand').textContent = `${bestand} Stk.`;
    const machines = Array.isArray(p.machines) ? p.machines : [];
    $('l4ModalMachines').innerHTML = machines.length
      ? machines.map(m => `<span class="machine-tag">${esc(m)}</span>`).join('')
      : '<span style="font-size:13px;color:var(--text-muted)">—</span>';
    const qtyInput = $('l4WithdrawQty');
    qtyInput.min = '1';
    qtyInput.max = String(Math.max(1, bestand));
    qtyInput.value = bestand > 0 ? '1' : '0';
    qtyInput.disabled = bestand < 1;
    $('l4EntnehmenBtn').disabled = bestand < 1;
    $('l4DetailModal').classList.add('open');
  }

  function closeDetail() {
    $('l4DetailModal').classList.remove('open');
    selectedPart = null;
  }

  async function confirmWithdraw() {
    if (!selectedPart) return;
    const bestand = parseInt(selectedPart.bestand, 10) || 0;
    const qty = Math.max(1, parseInt($('l4WithdrawQty').value, 10) || 1);
    if (qty > bestand) {
      toast('❗ Nicht genug auf Lager');
      return;
    }
    try {
      const data = await withdraw({
        partId: selectedPart.id,
        qty,
        badge4: session.badge4,
        machine: session.machine,
      });
      const idx = parts.findIndex(p => parseInt(p.id, 10) === parseInt(data.part.id, 10));
      if (idx >= 0) parts[idx] = data.part;
      closeDetail();
      $('l4SuccessDetail').innerHTML = `
        <strong>${esc(data.entry.qty)}× ${esc(data.entry.partName)}</strong><br>
        Maschine: <strong>${esc(data.entry.machine)}</strong><br>
        Bestand: ${data.entry.bestandBefore} → ${data.entry.bestandAfter}
      `;
      showScreen('l4ScreenSuccess');
    } catch (e) {
      toast(e.message === 'Insufficient stock' ? '❗ Nicht genug auf Lager' : '❗ Fehler bei Entnahme');
    }
  }

  function bindSearch() {
    $('l4SearchInput')?.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderGrid();
    });
    $('l4Grid')?.addEventListener('click', e => {
      const card = e.target.closest('[data-part]');
      if (card) openDetail(parseInt(card.dataset.part, 10));
    });
  }

  function bindScanInput() {
    const scan = $('l4ScanInput');
    if (!scan) return;
    let buf = '';
    let lastTs = 0;
    scan.addEventListener('keydown', e => {
      const now = Date.now();
      if (now - lastTs > 80) buf = '';
      lastTs = now;
      if (e.key === 'Enter') {
        const digits = buf.replace(/\D/g, '').slice(-4);
        if (digits.length === 4) {
          badgeDigits = digits;
          syncBadgeUi();
          submitBadge();
        }
        buf = '';
        e.preventDefault();
        return;
      }
      if (e.key.length === 1) buf += e.key;
    });
    document.addEventListener('click', e => {
      if (!$('l4ScreenBadge')?.classList.contains('on')) return;
      if (e.target.closest('#l4Keypad') || e.target.closest('.l4-key') || e.target.closest('#l4BadgeWeiter')) return;
      scan.focus();
    });
    scan.focus();
  }

  async function init() {
    if (isEmbed()) document.body.classList.add('l4-embed');
    buildKeypad();
    bindMachines();
    bindSearch();
    bindScanInput();
    syncBadgeUi();

    $('l4BadgeWeiter')?.addEventListener('click', submitBadge);
    $('l4MachineBack')?.addEventListener('click', () => showScreen('l4ScreenBadge'));
    $('l4SearchBack')?.addEventListener('click', () => showScreen('l4ScreenMachine'));
    $('l4DetailClose')?.addEventListener('click', closeDetail);
    $('l4DetailModal')?.addEventListener('click', e => {
      if (e.target === $('l4DetailModal')) closeDetail();
    });
    $('l4DetailDialog')?.addEventListener('click', e => e.stopPropagation());
    $('l4EntnehmenBtn')?.addEventListener('click', confirmWithdraw);
    $('l4SuccessNew')?.addEventListener('click', resetSession);

    $('l4ModalGallery')?.addEventListener('click', e => {
      const thumb = e.target.closest('[data-l4-idx]');
      if (!thumb || !selectedPart) return;
      e.stopPropagation();
      const idx = parseInt(thumb.dataset.l4Idx, 10);
      const src = partPhotos(selectedPart)[idx];
      if (!src) return;
      $('l4LightboxImg').src = src;
      $('l4Lightbox').classList.add('open');
    });
    $('l4Lightbox')?.addEventListener('click', () => $('l4Lightbox').classList.remove('open'));

    try {
      [parts, employees] = await Promise.all([fetchParts(), fetchEmployees()]);
      buildMachines();
    } catch {
      toast('Daten konnten nicht geladen werden');
    }
    renderGrid();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
