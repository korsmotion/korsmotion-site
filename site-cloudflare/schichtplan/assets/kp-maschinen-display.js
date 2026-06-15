/** KorsPlan Maschinen-Display — embedded module */
(function () {
  const HOURS = 24;
  let alertOn = false;
  let currentM = 0;
  let kpMdTimer = null;
  let kpMdRenderTimer = null;

  const MACHINES = [
    {
      name: 'Waldner 10.2', sub: 'Rahm · Kefir · LF Jogurt',
      status: 'Waldner 19.2',
      blocks: [
        { n: 'Rahm', s: 0, e: 3, c: 'cr', q: '' },
        { n: 'Kefir Coop 180g', s: 3, e: 14, c: 'ck', q: '~4200 St' },
        { n: 'Reinigung (R)', s: 14, e: 15, c: 'cc', q: 'Maschinenwäsche' },
        { n: 'LF Jog CNP', s: 15, e: 22, c: 'cj', q: '' },
        { n: 'Pause', s: 22, e: 24, c: 'cp', q: '' },
      ],
      stats: [
        { label: 'Heutige Blöcke', val: '5', sub: 'Produktionsaufträge' },
        { label: 'Produktionszeit', val: '22h', sub: 'von 24h geplant' },
        { label: 'Nächste Reinigung', val: '14:00', sub: 'Reinigung · 1h' },
      ],
    },
    {
      name: 'Schmidt 1kg', sub: 'Quark · CO NP · Bemasor Klär',
      status: 'Bemasor Klär',
      blocks: [
        { n: '7000 kg CO NP', s: 0, e: 8, c: 'cq', q: '6x1kg Tr' },
        { n: 'Reinigung (R)', s: 8, e: 9, c: 'cc', q: 'Maschinenwäsche' },
        { n: '4620 kg Kalko', s: 9, e: 18, c: 'cq', q: '5x500g Tr' },
        { n: 'Pause', s: 18, e: 19, c: 'cp', q: '' },
        { n: 'Quark 1 KG', s: 19, e: 24, c: 'cq', q: 'Nachtschicht' },
      ],
      stats: [
        { label: 'Heutige Blöcke', val: '5', sub: 'Produktionsaufträge' },
        { label: 'Menge gesamt', val: '11620 kg', sub: 'Tagesproduktion' },
        { label: 'Nächste Reinigung', val: '08:00', sub: 'Reinigung · 1h' },
      ],
    },
    {
      name: 'Waldner 10.3', sub: 'Quark / RAS / Skyr · ungerade Woche',
      status: '10.3-2 ungerade W',
      blocks: [
        { n: 'Sauerrahm', s: 0, e: 8, c: 'cr', q: '' },
        { n: 'Jogurt LF "73/95"', s: 8, e: 18, c: 'cj', q: '' },
        { n: 'Pause', s: 18, e: 19, c: 'cp', q: '' },
        { n: 'RAS Quark', s: 19, e: 24, c: 'cra', q: '3.5%' },
      ],
      stats: [
        { label: 'Heutige Blöcke', val: '4', sub: 'Produktionsaufträge' },
        { label: 'Produktionszeit', val: '23h', sub: 'von 24h geplant' },
        { label: 'Nächste Reinigung', val: '18:00', sub: 'Pause · 1h' },
      ],
    },
  ];

  function kpMdFmtH(h) {
    return `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;
  }

  function kpMdShow(idx) {
    currentM = idx;
    document.querySelectorAll('#kp-md-root .mbtn').forEach((b, i) => {
      b.classList.toggle('active', i === idx);
    });
    kpMdRender();
  }

  function kpMdToggleAlert() {
    alertOn = !alertOn;
    kpMdRender();
  }

  function kpMdRender() {
    const main = document.getElementById('kpMdMain');
    if (!main) return;
    const m = MACHINES[currentM];
    const now = new Date();
    const nowH = now.getHours() + now.getMinutes() / 60;
    const nowPct = (nowH / HOURS) * 100;
    const curBlk = m.blocks.find(b => nowH >= b.s && nowH < b.e);
    const nextBlks = m.blocks.filter(b => b.s > nowH).slice(0, 4);
    const prog = curBlk ? Math.round(((nowH - curBlk.s) / (curBlk.e - curBlk.s)) * 100) : 0;

    const rulerHTML = Array.from({ length: HOURS }, (_, h) =>
      `<div class="ruler-cell ${h % 6 === 0 && h > 0 ? 'major' : ''}">${String(h).padStart(2, '0')}</div>`
    ).join('');

    const gridHTML = Array.from({ length: HOURS }, (_, h) =>
      `<div class="track-cell ${h % 6 === 0 && h > 0 ? 'major' : ''}"></div>`
    ).join('');

    const blocksHTML = m.blocks.map(b => {
      const left = (b.s / HOURS) * 100;
      const width = Math.max(((b.e - b.s) / HOURS) * 100, 0.5);
      return `<div class="blk ${b.c}" style="left:${left}%;width:calc(${width}% - 2px)">
        <div class="blk-name">${b.n}</div>
        <div class="blk-time">${kpMdFmtH(b.s)} – ${kpMdFmtH(b.e)} · ${b.e - b.s}h</div>
        ${b.q ? `<div class="blk-qty">${b.q}</div>` : ''}
      </div>`;
    }).join('');

    const statusHTML = curBlk
      ? `<div class="mach-status"><span class="status-dot"></span>Aktiv: ${curBlk.n}</div>`
      : `<div class="mach-status" style="background:#F9FAFB;border-color:#E5E7EB;color:#6B7280;"><span class="status-dot" style="background:#9CA3AF"></span>Kein aktiver Block</div>`;

    const alertHTML = alertOn ? `
      <div class="alert-banner">
        <span style="font-size:16px">🔴</span>
        <div class="alert-text">PLANÄNDERUNG · ${curBlk ? curBlk.n : 'Block'} endet früher — nächster Block verschiebt sich!</div>
        <div class="alert-time">${now.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })} Uhr</div>
        <button type="button" class="alert-close" onclick="kpMdDismissAlert()">✕</button>
      </div>` : '';

    const statsHTML = m.stats.map(s => `
      <div class="info-card">
        <div class="info-card-label">${s.label}</div>
        <div class="info-card-val">${s.val}</div>
        <div class="info-card-sub">${s.sub}</div>
      </div>`).join('');

    const nextHTML = nextBlks.length
      ? nextBlks.map(b => `<div class="next-block">
          <div class="next-dot ${b.c}"></div>
          <span class="next-name">${b.n}</span>
          <span class="next-time">${kpMdFmtH(b.s)} – ${kpMdFmtH(b.e)}</span>
        </div>`).join('')
      : `<span style="font-size:12px;color:var(--mu)">Keine weiteren Blöcke heute</span>`;

    main.innerHTML = `
      <div class="mach-header">
        <div>
          <div class="mach-name">${m.name}</div>
          <div class="mach-sub">${m.sub}</div>
        </div>
        ${statusHTML}
        <div class="mach-kw">
          <div class="mach-kw-label">KW 25 · Montag</div>
          <div class="mach-kw-val">16.06.2026</div>
        </div>
      </div>
      ${alertHTML}
      <div class="timeline-card">
        <div class="time-ruler">${rulerHTML}</div>
        <div class="gantt-track">
          <div class="track-bg">${gridHTML}</div>
          <div class="now-line" style="left:${nowPct}%">
            <div class="now-tag">▶ ${kpMdFmtH(nowH)}</div>
          </div>
          ${blocksHTML}
        </div>
        ${curBlk ? `
        <div class="progress-wrap">
          <div class="prog-label">Fortschritt: ${curBlk.n}</div>
          <div class="prog-bar-outer"><div class="prog-bar-inner" style="width:${prog}%"></div></div>
          <div class="prog-pct">${prog}%</div>
        </div>` : ''}
      </div>
      <div class="info-row">${statsHTML}</div>
      <div class="next-wrap">
        <div class="next-label">Nächste Blöcke</div>
        <div class="next-blocks">${nextHTML}</div>
      </div>
    `;
  }

  function kpMdTick() {
    const clock = document.getElementById('kpMdClockEl');
    const date = document.getElementById('kpMdDateEl');
    if (!clock || !date) return;
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    date.textContent = now.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  function kpMdDismissAlert() {
    alertOn = false;
    kpMdRender();
  }

  function kpMdInit() {
    if (kpMdTimer) return;
    kpMdTick();
    kpMdRender();
    kpMdTimer = setInterval(kpMdTick, 1000);
    kpMdRenderTimer = setInterval(kpMdRender, 30000);
  }

  window.kpMdShow = kpMdShow;
  window.kpMdToggleAlert = kpMdToggleAlert;
  window.kpMdDismissAlert = kpMdDismissAlert;
  window.kpMdInit = kpMdInit;
})();
