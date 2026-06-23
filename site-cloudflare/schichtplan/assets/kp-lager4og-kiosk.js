(function () {
  const {
    esc, stock, imgHtml, hl, findPart,
    partMatchesSearchWorker, fetchParts, fetchEmployees, fetchMachines, withdraw, toast,
    openPartView, closePartView, bindPartView, kioskMachineTiles,
  } = window.L4;

  const VIEW_STORAGE_KEY = 'l4-kiosk-view';

  let parts = [];
  let employees = [];
  let settingsMachines = [];
  /** session.machine is for journal logging only — never used to filter parts */
  let session = { badge4: '', employee: null, machine: '' };
  let badgeDigits = '';
  let searchQuery = '';
  let viewMode = 'grid';

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
    $('l4BadgeErr').textContent = '';
    if ($('l4SearchInput')) $('l4SearchInput').value = '';
    syncBadgeUi();
    closePartView();
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
    const tiles = kioskMachineTiles(settingsMachines);
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
      renderResults();
      $('l4SearchInput')?.focus();
    });
  }

  function updateContext() {
    $('l4ContextBar').innerHTML = `
      <span>👤 <strong>${esc(session.employee?.name || '')}</strong></span>
      <span>🏭 <strong>${esc(session.machine)}</strong></span>
    `;
  }

  /** All warehouse parts — text search only; machine context is not a filter */
  function warehouseParts() {
    return parts.filter(p => partMatchesSearchWorker(p, searchQuery));
  }

  function loadViewMode() {
    try {
      const saved = localStorage.getItem(VIEW_STORAGE_KEY);
      viewMode = saved === 'list' ? 'list' : 'grid';
    } catch {
      viewMode = 'grid';
    }
  }

  function setViewMode(mode) {
    viewMode = mode === 'list' ? 'list' : 'grid';
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, viewMode);
    } catch { /* private mode */ }
    document.querySelectorAll('[data-kiosk-view]').forEach(btn => {
      const btnMode = btn.getAttribute('data-kiosk-view');
      const on = btnMode === viewMode;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    applyResultsVisibility();
    renderResults();
  }

  function applyResultsVisibility() {
    const grid = $('l4Grid');
    const listEl = $('l4List');
    if (grid) {
      grid.classList.toggle('l4-view-hidden', viewMode !== 'grid');
      grid.style.display = viewMode === 'grid' ? 'grid' : 'none';
    }
    if (listEl) {
      listEl.classList.toggle('l4-view-hidden', viewMode !== 'list');
      listEl.style.display = viewMode === 'list' ? 'flex' : 'none';
    }
  }

  function bindViewToggle() {
    const gridBtn = $('l4ViewGridBtn');
    const listBtn = $('l4ViewListBtn');
    gridBtn?.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      setViewMode('grid');
    });
    listBtn?.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      setViewMode('list');
    });
  }

  function renderCard(p, q) {
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
  }

  function renderListRow(p, q) {
    const s = stock(p.bestand, p.minBestand);
    const out = (parseInt(p.bestand, 10) || 0) === 0;
    return `<div class="l4-list-row${out ? ' l4-card-disabled' : ''}" data-part="${p.id}" role="button" tabindex="0">
      <div class="l4-list-thumb">${imgHtml(p, 20)}</div>
      <div class="l4-list-main">
        <div class="l4-list-name">${hl(p.name, q)}</div>
        <div class="l4-list-sub">${esc(p.category)} · 📦 ${hl(p.location, q)}</div>
      </div>
      <div class="l4-list-stock card-stock ${s.cls}">${s.label} · ${p.bestand}</div>
    </div>`;
  }

  function renderResults() {
    const list = warehouseParts();
    $('l4ResultCount').textContent = list.length;
    const grid = $('l4Grid');
    const listEl = $('l4List');
    const noR = $('l4NoResults');
    if (!list.length) {
      grid.innerHTML = '';
      listEl.innerHTML = '';
      noR.style.display = 'block';
      applyResultsVisibility();
      return;
    }
    noR.style.display = 'none';
    const q = searchQuery.toLowerCase();
    grid.innerHTML = list.map(p => renderCard(p, q)).join('');
    listEl.innerHTML = list.map(p => renderListRow(p, q)).join('');
    applyResultsVisibility();
  }

  async function confirmWithdraw(part) {
    const bestand = parseInt(part.bestand, 10) || 0;
    const qty = Math.max(1, parseInt($('l4WithdrawQty').value, 10) || 1);
    if (qty > bestand) {
      toast('❗ Nicht genug auf Lager');
      return;
    }
    try {
      const data = await withdraw({
        partId: part.id,
        qty,
        badge4: session.badge4,
        machine: session.machine,
      });
      const idx = parts.findIndex(p => parseInt(p.id, 10) === parseInt(data.part.id, 10));
      if (idx >= 0) parts[idx] = data.part;
      closePartView();
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

  function openPartFromRow(el) {
    const p = findPart(parts, parseInt(el.dataset.part, 10));
    if (p) openPartView(p, { mode: 'worker' });
  }

  function bindSearch() {
    $('l4SearchInput')?.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderResults();
    });
    $('l4Grid')?.addEventListener('click', e => {
      const row = e.target.closest('[data-part]');
      if (row) openPartFromRow(row);
    });
    $('l4List')?.addEventListener('click', e => {
      const row = e.target.closest('[data-part]');
      if (row) openPartFromRow(row);
    });
    bindViewToggle();
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
    loadViewMode();
    bindPartView({ onWithdraw: confirmWithdraw });
    buildKeypad();
    bindMachines();
    bindSearch();
    bindScanInput();
    syncBadgeUi();
    setViewMode(viewMode);

    $('l4BadgeWeiter')?.addEventListener('click', submitBadge);
    $('l4MachineBack')?.addEventListener('click', () => showScreen('l4ScreenBadge'));
    $('l4SearchBack')?.addEventListener('click', () => showScreen('l4ScreenMachine'));
    $('l4SuccessNew')?.addEventListener('click', resetSession);

    try {
      [parts, employees, settingsMachines] = await Promise.all([
        fetchParts(), fetchEmployees(), fetchMachines(),
      ]);
      buildMachines();
    } catch {
      toast('Daten konnten nicht geladen werden');
    }
    renderResults();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
