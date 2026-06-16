/* Material Bestellungen — KV sync (bestellungen:waldner_10_3) */
(function () {
  const KV_PAL = 'bestellungen:waldner_10_3:paletten';
  const KV_ORD = 'bestellungen:waldner_10_3:orders';
  const ADMIN_PW = 'korsmotion2026';
  const MASCHINE = 'Waldner 10.3';

  const DEMO_PALETTEN = [
    { id: 'pal_1', matnr: '1333416', name: 'VP KARTST 6er Lassi/Jog weiss 238x154', palNr: 3, menge: 10608, einheit: 'ST', bedZeit: '12:28', status: 'verfuegbar' },
    { id: 'pal_2', matnr: '1339535', name: 'VP Den Bio Las ErdHim LF 1.5% D75 250g', palNr: 7, menge: 9450, einheit: 'ST', bedZeit: '05:31', status: 'verfuegbar' },
    { id: 'pal_3', matnr: '1341648', name: 'VP PLA MOBi Las neutral D95 400g', palNr: 12, menge: 1348, einheit: 'ST', bedZeit: '02:04', status: 'verfuegbar' },
    { id: 'pal_4', matnr: '1347666', name: 'VP BE Aln Bio HaferDes Nat D95 400g', palNr: 5, menge: 2742, einheit: 'ST', bedZeit: '14:00', status: 'verfuegbar' },
    { id: 'pal_5', matnr: '1348184', name: 'VP BE BI BIO JOG ERD LAKF D73 125G', palNr: 9, menge: 4848, einheit: 'ST', bedZeit: '17:53', status: 'verfuegbar' },
    { id: 'pal_6', matnr: '1325884', name: 'VP PLA MOBi Bio Jog Van lakf ALU 73mm', palNr: 2, menge: 6865, einheit: 'ST', bedZeit: '12:25', status: 'verfuegbar' },
  ];

  let paletten = [];
  let orders = [];
  let currentRole = 'lager';
  let pollTimer = null;
  let modalOrderId = null;
  let prodFilter = 'alle';

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function fmtQty(n, einheit) {
    return `${Number(n).toLocaleString('de-CH')} ${einheit || 'ST'}`;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  async function apiGet(key) {
    const r = await fetch(`/api/data?key=${encodeURIComponent(key)}`);
    if (!r.ok) return null;
    const j = await r.json();
    return j.value;
  }

  async function apiSave(key, value, needPw) {
    const body = { key, value };
    if (needPw) body.password = ADMIN_PW;
    const r = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return r.ok;
  }

  async function fetchPaletten() {
    const data = await apiGet(KV_PAL);
    if (Array.isArray(data) && data.length) paletten = data;
    else if (!paletten.length) paletten = DEMO_PALETTEN.map(p => ({ ...p }));
    renderLager();
  }

  async function fetchOrders() {
    const data = await apiGet(KV_ORD);
    if (Array.isArray(data)) orders = data;
    renderProduktion();
    renderLogistik();
  }

  async function savePaletten() {
    await apiSave(KV_PAL, paletten, true);
  }

  async function saveOrders() {
    await apiSave(KV_ORD, orders, false);
  }

  function renderLager() {
    const rows = document.getElementById('mb-lager-rows');
    const hdr = document.getElementById('mb-lager-hdr');
    if (!rows) return;
    if (hdr) hdr.textContent = `Heute erfasst (${paletten.length} Paletten)`;
    rows.innerHTML = paletten.map(p => `
      <div class="lt-row">
        <div class="lt-matnr">${esc(p.matnr)}</div>
        <div class="lt-name">${esc(p.name)}</div>
        <div class="lt-pal">${esc(p.palNr)}</div>
        <div class="lt-menge">${esc(fmtQty(p.menge, p.einheit))}</div>
        <div class="lt-time">${esc(p.bedZeit || '—')}</div>
        <button type="button" class="lt-del" data-mb-del="${esc(p.id)}">×</button>
      </div>
    `).join('');
    rows.querySelectorAll('[data-mb-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        paletten = paletten.filter(x => x.id !== btn.dataset.mbDel);
        savePaletten();
        renderLager();
      });
    });
  }

  function orderStatusLabel(s) {
    const map = {
      offen: '⏳ Offen',
      angefordert: '📦 Angefordert',
      unterwegs: '🚚 Unterwegs',
      geliefert: '✅ Geliefert',
    };
    return map[s] || s;
  }

  function filteredOrders() {
    if (prodFilter === 'alle') return orders;
    return orders.filter(o => o.status === prodFilter);
  }

  function renderProduktion() {
    const list = document.getElementById('mb-prod-list');
    if (!list) return;

    const offen = orders.filter(o => o.status === 'offen').length;
    const ang = orders.filter(o => o.status === 'angefordert').length;
    const unt = orders.filter(o => o.status === 'unterwegs').length;
    const gel = orders.filter(o => o.status === 'geliefert').length;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('mb-sc-gesamt', orders.length);
    set('mb-sc-offen', offen);
    set('mb-sc-ang', ang + unt);
    set('mb-sc-gel', gel);

    const visible = filteredOrders();
    const groups = [
      { key: 'offen', label: '⏳ Noch anfordern', statuses: ['offen'] },
      { key: 'active', label: '📦 Angefordert / Unterwegs', statuses: ['angefordert', 'unterwegs'] },
      { key: 'gel', label: '✅ Geliefert', statuses: ['geliefert'] },
    ];

    let html = '';
    groups.forEach(g => {
      const items = visible.filter(o => g.statuses.includes(o.status));
      if (!items.length) return;
      html += `<div class="section-hdr">${g.label} (${items.length})</div>`;
      items.forEach(o => {
        const cardCls = o.status === 'offen' ? 'offen' : o.status === 'unterwegs' ? 'unterwegs' : o.status === 'geliefert' ? 'geliefert' : 'angefordert';
        const palTag = o.palNr ? `<span class="pal-tag">🏷 Pal.Nr. <strong>${esc(o.palNr)}</strong></span>` : '';
        const btn = o.status === 'offen'
          ? `<button type="button" class="btn btn-primary" data-mb-anfordern="${esc(o.id)}">📦 Anfordern</button>`
          : '';
        html += `
          <div class="card ${cardCls}">
            <div class="card-inner">
              <div>
                <div class="card-top">
                  <span class="matnr">${esc(o.matnr)}</span>
                  <span class="bedzeit">🕐 ${esc(o.bedZeit || '—')}</span>
                  ${palTag}
                </div>
                <div class="card-name">${esc(o.name)}</div>
                <div class="card-meta">
                  <span style="font-size:10px;color:var(--muted);">Menge:</span>
                  <span class="qty-badge">${esc(fmtQty(o.menge, o.einheit))}</span>
                </div>
              </div>
              <div class="card-right">
                <span class="status ${esc(o.status)}">${orderStatusLabel(o.status)}</span>
                ${btn}
              </div>
            </div>
          </div>`;
      });
    });

    if (!html) html = '<div class="section-hdr">Keine Positionen — Lager sendet Liste an Produktion</div>';
    list.innerHTML = html;

    list.querySelectorAll('[data-mb-anfordern]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.mbAnfordern));
    });
  }

  function renderLogistik() {
    const list = document.getElementById('mb-logistik-list');
    if (!list) return;

    const offen = orders.filter(o => o.status === 'angefordert').length;
    const unt = orders.filter(o => o.status === 'unterwegs').length;
    const gel = orders.filter(o => o.status === 'geliefert').length;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('mb-log-offen', offen);
    set('mb-log-unter', unt);
    set('mb-log-gel', gel);

    const active = orders.filter(o => o.status === 'angefordert' || o.status === 'unterwegs');
    const done = orders.filter(o => o.status === 'geliefert');

    let html = '';
    if (active.length) {
      html += `<div class="section-hdr">📦 Aktive Bestellungen (${active.length})</div>`;
      active.forEach(o => {
        const time = o.angefordertAt ? new Date(o.angefordertAt).toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }) : '—';
        const pickup = o.status === 'angefordert'
          ? `<button type="button" class="lc-btn pickup" data-mb-pickup="${esc(o.id)}">🚚 Abholen & unterwegs</button>`
          : '';
        const deliver = o.status !== 'geliefert'
          ? `<button type="button" class="lc-btn deliver" data-mb-deliver="${esc(o.id)}">✅ Geliefert</button>`
          : '';
        html += `
          <div class="logistik-card" style="${o.status === 'unterwegs' ? 'opacity:0.85' : ''}">
            <div class="lc-header">
              <span class="machine-pill" style="font-size:10px;">${esc(o.maschine || MASCHINE)}</span>
              <span style="font-size:10px;color:var(--muted);">${o.status === 'unterwegs' ? 'Unterwegs' : 'Angefordert'} ${time} · BedZeit ${esc(o.bedZeit || '—')}</span>
            </div>
            <div class="lc-body">
              <div class="lc-matnr">${esc(o.matnr)}</div>
              <div class="lc-name">${esc(o.name)}</div>
              <div class="lc-row">
                <div class="lc-qty">${esc(fmtQty(o.menge, o.einheit))}</div>
                <div>
                  <div class="pal-nr-label">Pal.Nr.</div>
                  <div class="pal-nr-big">${esc(o.palNr || '—')}</div>
                </div>
              </div>
              <div class="lc-btns">${pickup}${deliver}</div>
            </div>
          </div>`;
      });
    }

    if (done.length) {
      html += `<div class="section-hdr">✅ Heute geliefert (${done.length})</div>`;
      done.slice(0, 5).forEach(o => {
        html += `
          <div class="logistik-card" style="opacity:0.5;">
            <div class="lc-header">
              <span class="machine-pill" style="font-size:10px;">${esc(o.maschine || MASCHINE)}</span>
              <span style="font-size:10px;color:var(--muted);">Geliefert</span>
            </div>
            <div class="lc-body">
              <div class="lc-matnr">${esc(o.matnr)}</div>
              <div class="lc-name">${esc(o.name)}</div>
              <div class="lc-row">
                <div class="lc-qty" style="color:var(--green);">${esc(fmtQty(o.menge, o.einheit))}</div>
                <div>
                  <div class="pal-nr-label">Pal.Nr.</div>
                  <div class="pal-nr-big" style="opacity:0.5;">${esc(o.palNr || '—')}</div>
                </div>
              </div>
              <button type="button" class="lc-btn done" style="width:100%;">✅ Geliefert</button>
            </div>
          </div>`;
      });
    }

    if (!html) html = '<div class="section-hdr">Keine Bestellungen</div>';
    list.innerHTML = html;

    list.querySelectorAll('[data-mb-pickup]').forEach(btn => {
      btn.addEventListener('click', () => {
        const o = orders.find(x => x.id === btn.dataset.mbPickup);
        if (!o) return;
        o.status = 'unterwegs';
        saveOrders();
        renderProduktion();
        renderLogistik();
      });
    });
    list.querySelectorAll('[data-mb-deliver]').forEach(btn => {
      btn.addEventListener('click', () => {
        const o = orders.find(x => x.id === btn.dataset.mbDeliver);
        if (!o) return;
        o.status = 'geliefert';
        o.geliefertAt = new Date().toISOString();
        saveOrders();
        renderProduktion();
        renderLogistik();
      });
    });
  }

  function openModal(orderId) {
    modalOrderId = orderId;
    const o = orders.find(x => x.id === orderId);
    const modal = document.getElementById('modal');
    const palIn = document.getElementById('mb-modal-pal');
    if (!modal || !o) return;
    const nameEl = modal.querySelector('.modal-product-name');
    const metaEl = modal.querySelector('.modal-product-meta');
    if (nameEl) nameEl.textContent = o.name;
    if (metaEl) metaEl.textContent = `${o.matnr} · ${fmtQty(o.menge, o.einheit)} · 🕐 ${o.bedZeit || '—'}`;
    if (palIn) palIn.value = o.palNr || '';
    modal.style.display = 'flex';
  }

  function hideModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'none';
    modalOrderId = null;
  }

  function confirmAnfordern() {
    if (!modalOrderId) return;
    const o = orders.find(x => x.id === modalOrderId);
    const palIn = document.getElementById('mb-modal-pal');
    if (!o) return;
    const palNr = palIn ? parseInt(palIn.value, 10) : o.palNr;
    if (palNr) o.palNr = palNr;
    o.status = 'angefordert';
    o.angefordertAt = new Date().toISOString();
    saveOrders();
    hideModal();
    renderProduktion();
    renderLogistik();
  }

  function addPalette() {
    const matnr = document.getElementById('mb-f-matnr');
    const name = document.getElementById('mb-f-name');
    const palNr = document.getElementById('mb-f-pal');
    const menge = document.getElementById('mb-f-menge');
    const bed = document.getElementById('mb-f-bed');
    if (!matnr || !name || !palNr || !menge) return;
    if (!matnr.value.trim() || !name.value.trim()) return;
    paletten.push({
      id: `pal_${Date.now()}`,
      matnr: matnr.value.trim(),
      name: name.value.trim(),
      palNr: parseInt(palNr.value, 10) || 0,
      menge: parseFloat(menge.value) || 0,
      einheit: 'ST',
      bedZeit: bed && bed.value ? bed.value.slice(0, 5) : '12:00',
      datum: todayStr(),
      status: 'verfuegbar',
    });
    matnr.value = '';
    name.value = '';
    palNr.value = '';
    menge.value = '';
    if (bed) bed.value = '';
    savePaletten();
    renderLager();
  }

  function sendToProduktion() {
    const existingIds = new Set(orders.map(o => o.paletteId || o.id));
    paletten.forEach(p => {
      if (existingIds.has(p.id)) return;
      orders.push({
        id: `ord_${Date.now()}_${p.palNr}`,
        paletteId: p.id,
        matnr: p.matnr,
        name: p.name,
        palNr: p.palNr,
        menge: p.menge,
        einheit: p.einheit || 'ST',
        bedZeit: p.bedZeit,
        maschine: MASCHINE,
        status: 'offen',
        angefordertAt: null,
        geliefertAt: null,
      });
    });
    saveOrders();
    renderProduktion();
    renderLogistik();
    const t = document.getElementById('toast');
    if (t) {
      t.textContent = '✅ Liste an Produktion gesendet';
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
    }
  }

  function startPolling() {
    stopPolling();
    pollTimer = setInterval(fetchOrders, 10000);
  }

  function stopPolling() {
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = null;
  }

  function switchRole(role, btn) {
    currentRole = role;
    ['lager', 'produktion', 'logistik'].forEach(r => {
      const v = document.getElementById('view-' + r);
      if (v) v.style.display = r === role ? 'block' : 'none';
    });
    document.querySelectorAll('.role-btn').forEach(b => { b.className = 'role-btn'; });
    const cls = {
      lager: 'role-btn lager-active',
      produktion: 'role-btn active',
      logistik: 'role-btn logistik-active',
    };
    if (btn) btn.className = cls[role];
    if (role === 'produktion' || role === 'logistik') startPolling();
    else stopPolling();
  }

  function tick() {
    const t = new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    ['clock', 'clock2'].forEach(id => {
      const e = document.getElementById(id);
      if (e) e.textContent = t;
    });
  }

  function bindFilters() {
    document.querySelectorAll('[data-mb-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-mb-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        prodFilter = btn.dataset.mbFilter;
        renderProduktion();
      });
    });
  }

  async function initBestellungen() {
    await fetchPaletten();
    await fetchOrders();
    bindFilters();
    const addBtn = document.getElementById('mb-add-pal');
    const sendBtn = document.getElementById('mb-send-prod');
    const refreshBtn = document.getElementById('mb-refresh');
    if (addBtn) addBtn.addEventListener('click', addPalette);
    if (sendBtn) sendBtn.addEventListener('click', sendToProduktion);
    if (refreshBtn) refreshBtn.addEventListener('click', () => { fetchPaletten(); fetchOrders(); });
    const refreshProd = document.getElementById('mb-refresh-prod');
    if (refreshProd) refreshProd.addEventListener('click', () => fetchOrders());
    const anfordernAll = document.getElementById('mb-anfordern-all');
    if (anfordernAll) anfordernAll.addEventListener('click', () => {
      orders.filter(o => o.status === 'offen').forEach(o => {
        o.status = 'angefordert';
        o.angefordertAt = new Date().toISOString();
      });
      saveOrders();
      renderProduktion();
      renderLogistik();
    });
  }

  window.switchRole = switchRole;
  window.showModal = openModal;
  window.hideModal = hideModal;
  window.mbConfirmAnfordern = confirmAnfordern;
  window.initBestellungen = initBestellungen;

  if (new URLSearchParams(location.search).get('embed') === '1' || window.parent !== window) {
    document.body.classList.add('embed');
  }

  tick();
  setInterval(tick, 1000);
  initBestellungen();
})();
