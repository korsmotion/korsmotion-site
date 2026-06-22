(function () {
  const { esc, stock, imgHtml, hl, galleryHtml, partPhotos, findPart, partMatchesSearch, fetchParts, fetchEmployees, withdraw, toast, KIOSK_MACHINES, CATEGORIES } = window.L4;

  let parts = [];
  let employees = [];
  let session = { badge4: '', employee: null, machine: '' };
  let badgeDigits = '';
  let activeFilter = 'all';
  let searchQuery = '';
  let selectedPart = null;
  let withdrawQty = 1;
  let successTimer = null;
  let acIndex = -1;

  const $ = id => document.getElementById(id);

  function isEmbed() {
    return new URLSearchParams(location.search).has('embed');
  }

  function showScreen(id) {
    document.querySelectorAll('.l4-screen').forEach(s => s.classList.remove('on'));
    $(id)?.classList.add('on');
    $('l4Logout').hidden = !session.employee || id === 'l4ScreenBadge' || id === 'l4ScreenGreet';
  }

  function resetSession() {
    session = { badge4: '', employee: null, machine: '' };
    badgeDigits = '';
    updateDots();
    $('l4BadgeErr').textContent = '';
    searchQuery = '';
    activeFilter = 'all';
    if ($('l4SearchInput')) $('l4SearchInput').value = '';
    clearTimeout(successTimer);
    showScreen('l4ScreenBadge');
    $('l4ScanInput')?.focus();
  }

  function updateDots(err) {
    $('l4Dots').querySelectorAll('.l4-dot').forEach((d, i) => {
      d.classList.toggle('filled', i < badgeDigits.length);
      d.classList.toggle('err', !!err);
    });
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
    updateDots(false);
    if (k === 'C') {
      badgeDigits = '';
      updateDots();
      return;
    }
    if (k === '⌫') {
      badgeDigits = badgeDigits.slice(0, -1);
      updateDots();
      return;
    }
    if (badgeDigits.length >= 4) return;
    badgeDigits += k;
    updateDots();
    if (badgeDigits.length === 4) submitBadge();
  }

  async function submitBadge() {
    const emp = employees.find(e => e.badge4 === badgeDigits);
    if (!emp) {
      $('l4BadgeErr').textContent = 'Unbekannte Badge-Nummer';
      updateDots(true);
      setTimeout(() => { badgeDigits = ''; updateDots(); }, 600);
      return;
    }
    session.badge4 = badgeDigits;
    session.employee = emp;
    $('l4GreetText').textContent = `Hallo ${emp.name}!`;
    showScreen('l4ScreenGreet');
    setTimeout(() => showScreen('l4ScreenMachine'), 900);
  }

  function buildMachines() {
    const tiles = [...KIOSK_MACHINES, 'Sonstiges'];
    $('l4MachineGrid').innerHTML = tiles.map(m => `
      <button type="button" class="l4-machine-tile${m === 'Sonstiges' ? ' sonstiges' : ''}" data-machine="${esc(m)}">${esc(m)}</button>
    `).join('');
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

  function buildFilters() {
    const btns = ['all', ...CATEGORIES];
    $('l4Filters').innerHTML = btns.map(c => `
      <button type="button" class="filter-btn${c === 'all' ? ' active' : ''}" data-filter="${esc(c)}">${c === 'all' ? 'Alle' : esc(c)}</button>
    `).join('');
    $('l4Filters').addEventListener('click', e => {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      activeFilter = b.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x === b));
      renderGrid();
    });
  }

  function filteredParts() {
    return parts.filter(p => {
      if (activeFilter !== 'all' && p.category !== activeFilter) return false;
      return partMatchesSearch(p, searchQuery);
    });
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
      return `<div class="card" data-part="${p.id}">
        <div class="card-img">${imgHtml(p, 44)}<div class="card-stock ${s.cls}">${s.label}</div></div>
        <div class="card-body">
          <div class="card-category">${esc(p.category)}</div>
          <div class="card-name">${hl(p.name, q)}</div>
          <div class="card-type">${hl(p.type, q)}</div>
          <div class="card-meta">
            <div class="card-meta-row">📦 <strong>${hl(p.location, q)}</strong></div>
            <div class="card-meta-row">🔢 <strong>${p.bestand} Stk.</strong></div>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  function buildAc(q) {
    if (!q || q.length < 1) return [];
    return parts.filter(p => partMatchesSearch(p, q)).slice(0, 6);
  }

  function renderAc() {
    const dd = $('l4AcDropdown');
    const items = buildAc(searchQuery);
    if (!items.length) { dd.classList.remove('open'); return; }
    dd.innerHTML = items.map((p, i) => `
      <div class="ac-item${i === acIndex ? ' focused' : ''}" data-ac="${p.id}">
        <div class="ac-item-thumb">${imgHtml(p, 18)}</div>
        <div class="ac-item-info">
          <div class="ac-item-name">${esc(p.name)}</div>
          <div class="ac-item-sub">${esc(p.type)}</div>
        </div>
        <span class="ac-item-loc">${esc(p.location)}</span>
      </div>
    `).join('');
    dd.classList.add('open');
  }

  function openDetail(id) {
    const p = findPart(parts, id);
    if (!p) return;
    selectedPart = p;
    $('l4ModalGallery').innerHTML = galleryHtml(p);
    $('l4ModalCat').textContent = p.category || '—';
    $('l4ModalName').textContent = p.name || '—';
    $('l4ModalType').textContent = p.type || '—';
    $('l4ModalDesc').textContent = p.desc || '—';
    $('l4ModalNr').textContent = p.nr || '—';
    $('l4ModalBestNr').textContent = p.bestNr || '—';
    $('l4ModalLoc').textContent = p.location || '—';
    $('l4ModalBestand').textContent = `${p.bestand ?? 0} Stk.`;
    const machines = Array.isArray(p.machines) ? p.machines : [];
    $('l4ModalMachines').innerHTML = machines.length
      ? machines.map(m => `<span class="machine-tag">${esc(m)}</span>`).join('')
      : '<span style="font-size:13px;color:var(--text-muted)">—</span>';
    $('l4EntnehmenBtn').disabled = (parseInt(p.bestand, 10) || 0) < 1;
    $('l4DetailModal').classList.add('open');
    $('l4AcDropdown').classList.remove('open');
  }

  function closeDetail() {
    $('l4DetailModal').classList.remove('open');
  }

  function openWithdraw() {
    if (!selectedPart || selectedPart.bestand < 1) return;
    withdrawQty = 1;
    $('l4WdName').textContent = selectedPart.name;
    $('l4WdMeta').textContent = `${session.employee?.name} · ${session.machine} · max. ${selectedPart.bestand} Stk.`;
    $('l4WdQty').textContent = '1';
    $('l4DetailModal').classList.remove('open');
    $('l4WithdrawModal').classList.add('open');
  }

  async function confirmWithdraw() {
    if (!selectedPart) return;
    try {
      const data = await withdraw({
        partId: selectedPart.id,
        qty: withdrawQty,
        badge4: session.badge4,
        machine: session.machine,
      });
      const idx = parts.findIndex(p => p.id === selectedPart.id);
      if (idx >= 0) parts[idx] = data.part;
      $('l4WithdrawModal').classList.remove('open');
      $('l4SuccessDetail').innerHTML = `
        <strong>${esc(data.entry.qty)}× ${esc(data.entry.partName)}</strong><br>
        von <strong>${esc(data.entry.employeeName)}</strong><br>
        für <strong>${esc(data.entry.machine)}</strong><br>
        Bestand: ${data.entry.bestandBefore} → ${data.entry.bestandAfter}
      `;
      showScreen('l4ScreenSuccess');
      successTimer = setTimeout(resetSession, 8000);
    } catch (e) {
      toast(e.message === 'Insufficient stock' ? '❗ Nicht genug auf Lager' : '❗ Fehler bei Entnahme');
    }
  }

  function bindSearch() {
    const input = $('l4SearchInput');
    input.addEventListener('input', () => {
      searchQuery = input.value.trim();
      acIndex = -1;
      renderAc();
      renderGrid();
    });
    input.addEventListener('keydown', e => {
      const items = buildAc(searchQuery);
      if (e.key === 'ArrowDown') { e.preventDefault(); acIndex = Math.min(acIndex + 1, items.length - 1); renderAc(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); acIndex = Math.max(acIndex - 1, 0); renderAc(); }
      else if (e.key === 'Enter' && acIndex >= 0 && items[acIndex]) { openDetail(items[acIndex].id); }
      else if (e.key === 'Escape') $('l4AcDropdown').classList.remove('open');
    });
    $('l4AcDropdown').addEventListener('click', e => {
      const row = e.target.closest('[data-ac]');
      if (row) openDetail(parseInt(row.dataset.ac, 10));
    });
    $('l4Grid').addEventListener('click', e => {
      const card = e.target.closest('[data-part]');
      if (card) openDetail(parseInt(card.dataset.part, 10));
    });
  }

  function bindScanInput() {
    const scan = $('l4ScanInput');
    let buf = '';
    let lastTs = 0;
    scan.addEventListener('keydown', e => {
      const now = Date.now();
      if (now - lastTs > 80) buf = '';
      lastTs = now;
      if (e.key === 'Enter') {
        const digits = buf.replace(/\D/g, '').slice(-4);
        if (digits.length === 4) { badgeDigits = digits; updateDots(); submitBadge(); }
        buf = '';
        e.preventDefault();
        return;
      }
      if (e.key.length === 1) buf += e.key;
    });
    document.addEventListener('click', e => {
      if (!$('l4ScreenBadge')?.classList.contains('on')) return;
      if (e.target.closest('#l4Keypad') || e.target.closest('.l4-key')) return;
      scan.focus();
    });
    scan.focus();
  }

  async function init() {
    if (isEmbed()) document.body.classList.add('l4-embed');
    buildKeypad();
    buildMachines();
    buildFilters();
    bindSearch();
    bindScanInput();

    $('l4Logout').addEventListener('click', resetSession);
    $('l4DetailClose').addEventListener('click', closeDetail);
    $('l4DetailModal').addEventListener('click', e => {
      if (e.target === $('l4DetailModal')) closeDetail();
    });
    $('l4DetailDialog')?.addEventListener('click', e => e.stopPropagation());
    $('l4EntnehmenBtn').addEventListener('click', openWithdraw);

    $('l4ModalGallery').addEventListener('click', e => {
      const thumb = e.target.closest('[data-l4-idx]');
      if (!thumb || !selectedPart) return;
      e.stopPropagation();
      const idx = parseInt(thumb.dataset.l4Idx, 10);
      const src = partPhotos(selectedPart)[idx];
      if (!src) return;
      $('l4LightboxImg').src = src;
      $('l4Lightbox').classList.add('open');
    });
    $('l4Lightbox').addEventListener('click', () => $('l4Lightbox').classList.remove('open'));
    $('l4WdMinus').addEventListener('click', () => {
      withdrawQty = Math.max(1, withdrawQty - 1);
      $('l4WdQty').textContent = String(withdrawQty);
    });
    $('l4WdPlus').addEventListener('click', () => {
      if (!selectedPart) return;
      withdrawQty = Math.min(selectedPart.bestand, withdrawQty + 1);
      $('l4WdQty').textContent = String(withdrawQty);
    });
    $('l4WdCancel').addEventListener('click', () => $('l4WithdrawModal').classList.remove('open'));
    $('l4WdConfirm').addEventListener('click', confirmWithdraw);
    $('l4SuccessDone').addEventListener('click', resetSession);

    try {
      [parts, employees] = await Promise.all([fetchParts(), fetchEmployees()]);
    } catch {
      toast('Daten konnten nicht geladen werden');
    }
    renderGrid();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
