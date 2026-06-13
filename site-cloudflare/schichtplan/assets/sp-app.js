/**
 * SchichtPlan — shared UI + page modules
 * Demo mode: no API/KV until schichtplan_data is wired in worker
 */
(function () {
  const STORAGE_THEME = 'sp_theme';
  const STORAGE_ACCENT = 'sp_accent';
  const SESSION_EMPLOYEE = 'sp_employee_id';
  const SESSION_EMPLOYEE_NAME = 'sp_employee_name';
  const SESSION_ADMIN = 'sp_admin_auth';
  const SP_DEMO_MODE = true;
  const DEMO_ADMIN_PASSWORD = 'admin2026';
  const SP_ADMIN_BASE = '/schichtplan/admin';

  const MONTHS_DE = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ];
  const WEEKDAYS_DE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const WEEKDAYS_SHORT = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];

  const SP_MACHINES = {
    waldner2: { name: 'Waldner 10.2', short: 'W10.2', color: '#2563eb', colorEnd: '#1d4ed8', css: 'var(--sp-m-waldner2)' },
    waldner3: { name: 'Waldner 10.3', short: 'W10.3', color: '#0891b2', colorEnd: '#0e7490', css: 'var(--sp-m-waldner3)' },
    schmid: { name: 'Schmid', short: 'SCH', color: '#16a34a', colorEnd: '#15803d', css: 'var(--sp-m-schmid)' },
    jogurt: { name: 'Jogurt OG', short: 'JOG', color: '#7c3aed', colorEnd: '#6d28d9', css: 'var(--sp-m-jogurt)' },
    t47: { name: 'T47', short: 'T47', color: '#d97706', colorEnd: '#b45309', css: 'var(--sp-m-t47)' },
    quark: { name: 'Quark', short: 'Q', color: '#db2777', colorEnd: '#be185d', css: 'var(--sp-m-quark)' },
    reinig: { name: 'Reinigung', short: 'RE', color: '#dc2626', colorEnd: '#b91c1c', css: 'var(--sp-m-reinig)' },
    free: { name: 'Frei', short: '—', color: '#94a3b8', colorEnd: '#64748b', css: 'var(--sp-m-free)' },
    vac: { name: 'Urlaub', short: '🏖️', color: '#22c55e', colorEnd: '#16a34a', css: 'var(--sp-m-vac)' },
  };

  /** Hardcoded demo plan — KW 25 / Juni 2026 */
  const SP_DEMO = {
    employee: {
      id: '2104479',
      name: 'Sergej K.',
      fullName: 'Sergej Korsakov',
      initials: 'SK',
      department: 'BIS Jogurt',
    },
    notification: {
      title: 'Plan aktualisiert',
      body: 'Mi 17.06: Waldner 10.2 → Jogurt OG',
      time: '09:41',
    },
    week: {
      kw: 25,
      range: '15.–21.06.2026',
      todayKey: '2026-06-15',
      days: [
        { key: '2026-06-15', dow: 0, label: 'Mo', num: 15, status: 'work' },
        { key: '2026-06-16', dow: 1, label: 'Di', num: 16, status: 'work' },
        { key: '2026-06-17', dow: 2, label: 'Mi', num: 17, status: 'work' },
        { key: '2026-06-18', dow: 3, label: 'Do', num: 18, status: 'free' },
        { key: '2026-06-19', dow: 4, label: 'Fr', num: 19, status: 'free' },
        { key: '2026-06-20', dow: 5, label: 'Sa', num: 20, status: 'vac' },
        { key: '2026-06-21', dow: 6, label: 'So', num: 21, status: 'vac' },
      ],
      shifts: [
        { dayKey: '2026-06-15', machine: 'waldner2', product: 'Käfir Coop 180g', time: '00–08', tags: ['🏭 W10.2', '🥛 Käfir Coop 180g'] },
        { dayKey: '2026-06-16', machine: 'waldner3', product: 'Jogurt LF 73/95', time: '00–08', tags: ['🏭 W10.3'] },
        { dayKey: '2026-06-17', machine: 'jogurt', product: '⚠️ Geändert', time: '08–17', tags: ['🏭 JOG'], changed: true },
        { dayKey: '2026-06-18', machine: 'free', product: 'Frei', time: '—', muted: true },
        { dayKey: '2026-06-19', machine: 'free', product: 'Frei', time: '—', muted: true },
        { dayKey: '2026-06-20', machine: 'vac', product: 'Urlaub', time: '—', muted: true },
        { dayKey: '2026-06-21', machine: 'vac', product: 'Urlaub', time: '—', muted: true },
      ],
      list: [
        { machine: 'waldner2', sub: 'Mo · Käfir Coop 180g', time: '00–08' },
        { machine: 'waldner3', sub: 'Di · Jogurt LF 73/95', time: '00–08' },
        { machine: 'jogurt', sub: 'Mi · ⚠️ Geändert', time: '08–17' },
        { machine: 'free', sub: 'Do + Fr', time: '—', muted: true },
      ],
    },
    month: {
      year: 2026,
      month: 6,
      days: {
        '2026-06-02': { machine: 'jogurt' },
        '2026-06-03': { machine: 'jogurt' },
        '2026-06-04': { machine: 'waldner2' },
        '2026-06-05': { machine: 'waldner2' },
        '2026-06-06': { machine: 'free' },
        '2026-06-07': { machine: 'free' },
        '2026-06-09': { machine: 't47' },
        '2026-06-10': { machine: 't47' },
        '2026-06-11': { machine: 'schmid' },
        '2026-06-12': { machine: 'schmid' },
        '2026-06-13': { machine: 'free' },
        '2026-06-14': { machine: 'free' },
        '2026-06-15': { machine: 'waldner2' },
        '2026-06-16': { machine: 'waldner3' },
        '2026-06-17': { machine: 'jogurt' },
        '2026-06-18': { machine: 'free' },
        '2026-06-19': { machine: 'free' },
        '2026-06-20': { machine: 'vac' },
        '2026-06-21': { machine: 'vac' },
        '2026-06-23': { machine: 'quark' },
        '2026-06-24': { machine: 'quark' },
        '2026-06-25': { machine: 'reinig' },
        '2026-06-26': { machine: 'waldner2' },
        '2026-06-27': { machine: 'free' },
        '2026-06-28': { machine: 'free' },
        '2026-06-30': { machine: 'jogurt' },
      },
    },
    },
  };

  /** Hardcoded demo ferien — Juli–Dez 2026 */
  const SP_DEMO_FERIEN = {
    banner: {
      title: 'Urlaub genehmigt · KW 52',
      sub: '21.–27. Dez 2026 · Weihnachten ✅',
    },
    balance: {
      year: 2026,
      available: 18,
      planned: 7,
      remaining: 11,
    },
    myWeeks: [
      { kw: 31, range: '27.07–02.08', note: 'Schulferien TG 🎓', status: 'approved' },
      { kw: 52, range: '21.–27.12', note: 'Weihnachten 🎄', status: 'approved' },
    ],
    teamPlan: {
      title: 'Ferienplan 2026',
      sub: 'Juli–Dezember · Max. 5 Personen/Woche · 🎓 Schulferien TG',
      maxPerWeek: 5,
      employeeMatch: 'Korsakov',
      weeks: [
        { kw: 28, range: '06–12.07', school: false, people: ['Dürlewanger', 'Ickan Kubilay'] },
        { kw: 29, range: '13–19.07', school: false, people: ['Dürlewanger', 'Ickan', 'Forster'] },
        { kw: 30, range: '20–26.07', school: true, people: ['Muaremi', 'Memeti', 'Berschauer'] },
        { kw: 31, range: '27.07–02.08', school: true, people: ['Muaremi', 'Memeti', 'Berschauer', 'Korsakov'] },
        { kw: 32, range: '03–09.08', school: true, people: ['Lengwiler', 'Bedeti', 'Alimani F.'] },
        { kw: 33, range: '10–16.08', school: false, people: ['Kreis', 'Stüssi'] },
        { kw: 34, range: '17–23.08', school: false, people: ['Kreis', 'Nuhi', 'Barros'] },
        { kw: 35, range: '24–30.08', school: false, people: ['Alimani V.', 'Kurati', 'Keller S.'] },
        { kw: 41, range: '05–11.10', school: true, people: ['Thevaraiah', 'Rufener', 'Alimani V.', 'Bedeti', 'Alimani F.'] },
        { kw: 42, range: '12–18.10', school: true, people: ['Thevaraiah', 'Dürlewanger', 'Mebrahtu', 'Ivicic', 'Muaremi'] },
        { kw: 52, range: '21–27.12', school: true, people: ['Vadasz', 'Jegatheeswaran', 'Korsakov', 'Rufener', 'Alimani F.'] },
        { kw: 53, range: '28.12–03.01', school: true, people: ['Vadasz', 'Alimani F.', 'Stüssi', 'Lengwiler', 'Brunner'] },
      ],
    },
  };

  const VAC_STATUS_LABEL = {
    approved: { text: '✅ Genehmigt', cls: 'sp-is-approved' },
    pending: { text: '⏳ Ausstehend', cls: 'sp-is-pending' },
    rejected: { text: '❌ Abgelehnt', cls: 'sp-is-rejected' },
  };

  const $ = id => document.getElementById(id);

  function getTheme() {
    return localStorage.getItem(STORAGE_THEME) || 'dark';
  }

  function getAccent() {
    return localStorage.getItem(STORAGE_ACCENT) || 'teal';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-sp-theme', theme);
    localStorage.setItem(STORAGE_THEME, theme);
    document.querySelectorAll('[data-sp-theme-btn]').forEach(btn => {
      const on = btn.dataset.spThemeBtn === theme;
      btn.classList.toggle('sp-is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function applyAccent(accent) {
    document.documentElement.setAttribute('data-sp-accent', accent);
    localStorage.setItem(STORAGE_ACCENT, accent);
    document.querySelectorAll('[data-sp-accent-pick]').forEach(dot => {
      dot.classList.toggle('sp-is-active', dot.dataset.spAccentPick === accent);
    });
  }

  function bindControls() {
    document.querySelectorAll('[data-sp-theme-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.spThemeBtn));
    });
    document.querySelectorAll('[data-sp-accent-pick]').forEach(dot => {
      dot.addEventListener('click', () => applyAccent(dot.dataset.spAccentPick));
    });
  }

  function greetingText() {
    const h = new Date().getHours();
    if (h < 11) return 'Guten Morgen,';
    if (h < 17) return 'Guten Tag,';
    return 'Guten Abend,';
  }

  function formatDateDE(key) {
    const [y, m, d] = key.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    const wd = WEEKDAYS_DE[(dt.getDay() + 6) % 7];
    return `${wd} ${String(d).padStart(2, '0')}.${String(m).padStart(2, '0')}.${y}`;
  }

  function machineGradient(id) {
    const m = SP_MACHINES[id] || SP_MACHINES.free;
    return `linear-gradient(135deg, ${m.color}, ${m.colorEnd})`;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatShiftTime(time) {
    if (!time || time === '—') return '';
    const parts = time.split('–').map(s => s.trim());
    if (parts.length !== 2) return `⏱ ${time} Uhr`;
    return `⏱ ${parts[0]}:00 – ${parts[1]}:00 Uhr`;
  }

  /* ── Login page ── */

  function showLoginError(msg) {
    const el = $('spLoginError');
    if (!el) return;
    if (msg) {
      el.textContent = msg;
      el.classList.add('sp-is-visible');
    } else {
      el.textContent = '';
      el.classList.remove('sp-is-visible');
    }
  }

  function setLoginLoading(loading) {
    const btn = $('spLoginBtn');
    if (!btn) return;
    btn.disabled = loading;
    btn.classList.toggle('sp-is-loading', loading);
  }

  function normalizeEmployeeId(raw) {
    return String(raw || '').replace(/\D/g, '');
  }

  function demoEmployeeLogin(employeeId) {
    sessionStorage.setItem(SESSION_EMPLOYEE, employeeId);
    if (employeeId === SP_DEMO.employee.id) {
      sessionStorage.setItem(SESSION_EMPLOYEE_NAME, SP_DEMO.employee.name);
    } else {
      sessionStorage.removeItem(SESSION_EMPLOYEE_NAME);
    }
    window.location.href = 'plan.html';
  }

  function bindLoginForm() {
    const form = $('spLoginForm');
    const input = $('spEmployeeId');
    if (!form || !input) return;

    input.addEventListener('input', () => {
      input.value = normalizeEmployeeId(input.value);
      showLoginError('');
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const employeeId = normalizeEmployeeId(input.value);
      if (!employeeId) {
        showLoginError('Bitte Tabellennummer eingeben.');
        input.focus();
        return;
      }

      setLoginLoading(true);
      showLoginError('');

      if (SP_DEMO_MODE) {
        demoEmployeeLogin(employeeId);
        return;
      }

      setLoginLoading(false);
      showLoginError('Anmeldung derzeit nicht verfügbar.');
    });
  }

  function initLoginPage() {
    bindLoginForm();
    if (sessionStorage.getItem(SESSION_EMPLOYEE)) {
      window.location.replace('plan.html');
    }
  }

  /* ── Admin login ── */

  function showAdminLoginError(msg) {
    const el = $('spAdminLoginError');
    if (!el) return;
    if (msg) {
      el.textContent = msg;
      el.classList.add('sp-is-visible');
    } else {
      el.textContent = '';
      el.classList.remove('sp-is-visible');
    }
  }

  function setAdminLoginLoading(loading) {
    const btn = $('spAdminLoginBtn');
    if (!btn) return;
    btn.disabled = loading;
    btn.classList.toggle('sp-is-loading', loading);
  }

  function bindAdminLoginForm() {
    const form = $('spAdminLoginForm');
    const input = $('spAdminPassword');
    if (!form || !input) return;

    input.addEventListener('input', () => showAdminLoginError(''));

    form.addEventListener('submit', e => {
      e.preventDefault();
      const password = input.value.trim();
      if (!password) {
        showAdminLoginError('Bitte Passwort eingeben.');
        input.focus();
        return;
      }

      setAdminLoginLoading(true);
      showAdminLoginError('');

      if (password === DEMO_ADMIN_PASSWORD) {
        sessionStorage.setItem(SESSION_ADMIN, '1');
        window.location.href = `${SP_ADMIN_BASE}/dashboard.html`;
        return;
      }

      showAdminLoginError('Falsches Passwort.');
      setAdminLoginLoading(false);
      input.focus();
      input.select();
    });
  }

  function initAdminLoginPage() {
    bindAdminLoginForm();
    if (sessionStorage.getItem(SESSION_ADMIN)) {
      window.location.replace(`${SP_ADMIN_BASE}/dashboard.html`);
    }
  }

  /* ── Plan page ── */

  let planState = { selectedDay: SP_DEMO.week.todayKey, planView: 'week' };

  function resolveEmployee() {
    const id = sessionStorage.getItem(SESSION_EMPLOYEE);
    const name = sessionStorage.getItem(SESSION_EMPLOYEE_NAME);
    const emp = { ...SP_DEMO.employee };
    if (id) emp.id = id;
    if (name) {
      emp.name = name;
      emp.initials = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
      const parts = name.split(/\s+/);
      if (parts.length > 1) emp.fullName = name;
    }
    return { employee: emp, isDemo: !id };
  }

  function initAppShell() {
    const { employee, isDemo } = resolveEmployee();
    if ($('spGreeting')) $('spGreeting').textContent = greetingText();
    if ($('spEmployeeName')) $('spEmployeeName').textContent = employee.name;
    if ($('spAvatar')) $('spAvatar').textContent = employee.initials;
    if ($('spTopbarUser')) $('spTopbarUser').textContent = `#${employee.id}`;
    if ($('spDemoBadge')) $('spDemoBadge').hidden = !isDemo;
    bindLogout();
    return { employee, isDemo };
  }

  function showToast(msg) {
    const el = $('spToast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('sp-is-visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove('sp-is-visible'), 2800);
  }

  function renderHero(dayKey) {
    const hero = $('spHero');
    if (!hero) return;
    const shift = SP_DEMO.week.shifts.find(s => s.dayKey === dayKey);
    if (!shift) return;

    const m = SP_MACHINES[shift.machine];
    hero.className = 'sp-hero';
    if (shift.machine === 'free') hero.classList.add('sp-is-free');
    if (shift.machine === 'vac') hero.classList.add('sp-is-vac');
    if (shift.machine !== 'free' && shift.machine !== 'vac') {
      hero.style.background = machineGradient(shift.machine);
    } else {
      hero.style.background = '';
    }

    const timeLabel = formatShiftTime(shift.time);
    const tags = (shift.tags || []).map(t => `<span class="sp-hero-tag">${esc(t)}</span>`).join('');

    hero.innerHTML = `
      <div class="sp-hero-eyebrow">${esc(formatDateDE(dayKey))}</div>
      <div class="sp-hero-machine">${esc(m.name)}</div>
      ${timeLabel ? `<div class="sp-hero-time">${esc(timeLabel)}</div>` : ''}
      ${tags ? `<div class="sp-hero-tags">${tags}</div>` : ''}
    `;
  }

  function renderWeekStrip() {
    const strip = $('spWeekStrip');
    if (!strip) return;
    const { days, todayKey } = SP_DEMO.week;

    strip.innerHTML = days.map(day => {
      const cls = [
        'sp-wday',
        day.status === 'work' ? 'sp-is-work' : '',
        day.status === 'free' ? 'sp-is-free' : '',
        day.status === 'vac' ? 'sp-is-vac' : '',
        day.key === todayKey ? 'sp-is-today' : '',
        day.key === planState.selectedDay ? 'sp-is-selected' : '',
      ].filter(Boolean).join(' ');
      return `
        <button type="button" class="${cls}" data-sp-day="${day.key}" aria-label="${esc(day.label)} ${day.num}">
          <span class="sp-wday-name">${esc(WEEKDAYS_SHORT[day.dow])}</span>
          <span class="sp-wday-num">${day.num}</span>
          <span class="sp-wday-dot"></span>
        </button>
      `;
    }).join('');

    strip.querySelectorAll('[data-sp-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        planState.selectedDay = btn.dataset.spDay;
        renderWeekStrip();
        renderHero(planState.selectedDay);
      });
    });
  }

  function renderShiftList() {
    const list = $('spShiftList');
    if (!list) return;
    list.innerHTML = SP_DEMO.week.list.map(item => {
      const m = SP_MACHINES[item.machine];
      return `
        <div class="sp-shift-item${item.muted ? ' sp-is-muted' : ''}">
          <div class="sp-shift-bar" style="background:${m.css}"></div>
          <div class="sp-shift-info">
            <div class="sp-shift-machine">${esc(m.name)}</div>
            <div class="sp-shift-sub">${esc(item.sub)}</div>
          </div>
          <div class="sp-shift-time">${esc(item.time)}</div>
        </div>
      `;
    }).join('');
  }

  function renderMonth() {
    const card = $('spMonthCard');
    if (!card) return;
    const { year, month, days } = SP_DEMO.month;
    const first = new Date(year, month - 1, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month, 0).getDate();
    const todayKey = SP_DEMO.week.todayKey;

    let cells = '';
    for (let i = 0; i < startPad; i++) {
      cells += '<div class="sp-month-cell sp-is-empty"></div>';
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const entry = days[key];
      const machine = entry ? entry.machine : null;
      const m = machine ? SP_MACHINES[machine] : null;
      const cls = [
        'sp-month-cell',
        key === todayKey ? 'sp-is-today' : '',
        machine === 'vac' ? 'sp-is-vac' : '',
        machine === 'free' ? 'sp-is-free' : '',
      ].filter(Boolean).join(' ');
      const dot = m && machine !== 'free'
        ? `<span class="sp-month-dot" style="background:${m.color}"></span>`
        : '';
      cells += `
        <div class="${cls}" title="${esc(key)}${m ? ' · ' + m.name : ''}">
          <span class="sp-month-day-num">${d}</span>
          ${dot}
        </div>
      `;
    }

    const legend = Object.entries(SP_MACHINES)
      .filter(([id]) => !['free', 'vac'].includes(id))
      .map(([, m]) => `
        <span class="sp-legend-item">
          <span class="sp-legend-dot" style="background:${m.color}"></span>
          ${esc(m.name)}
        </span>
      `).join('');

    card.innerHTML = `
      <div class="sp-month-nav">
        <button type="button" class="sp-month-nav-btn" aria-label="Vorheriger Monat" disabled>‹</button>
        <div class="sp-month-nav-title">
          <div class="sp-month-name">${esc(MONTHS_DE[month - 1])} ${year}</div>
          <div class="sp-month-meta">BIS Spezialitäten · Demo</div>
        </div>
        <button type="button" class="sp-month-nav-btn" aria-label="Nächster Monat" disabled>›</button>
      </div>
      <div class="sp-month-weekdays">
        ${WEEKDAYS_DE.map(w => `<span class="sp-month-wd">${w}</span>`).join('')}
      </div>
      <div class="sp-month-grid">${cells}</div>
      <div class="sp-month-legend">${legend}</div>
    `;
  }

  function setPlanView(view) {
    planState.planView = view;
    const weekPanel = $('spPanelWeek');
    const monthPanel = $('spPanelMonth');
    document.querySelectorAll('[data-sp-plan-view]').forEach(btn => {
      const on = btn.dataset.spPlanView === view;
      btn.classList.toggle('sp-is-active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    if (weekPanel) {
      weekPanel.classList.toggle('sp-is-visible', view === 'week');
      weekPanel.hidden = view !== 'week';
    }
    if (monthPanel) {
      monthPanel.classList.toggle('sp-is-visible', view === 'month');
      monthPanel.hidden = view !== 'month';
    }
  }

  function bindPlanViewToggle() {
    document.querySelectorAll('[data-sp-plan-view]').forEach(btn => {
      btn.addEventListener('click', () => setPlanView(btn.dataset.spPlanView));
    });
  }

  function bindLogout() {
    const btn = $('spLogoutBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      sessionStorage.removeItem(SESSION_EMPLOYEE);
      sessionStorage.removeItem(SESSION_EMPLOYEE_NAME);
      window.location.href = 'index.html';
    });
  }

  function initPlanPage() {
    initAppShell();

    const notif = SP_DEMO.notification;
    if ($('spNotifTitle')) $('spNotifTitle').textContent = notif.title;
    if ($('spNotifText')) $('spNotifText').textContent = notif.body;
    if ($('spNotifTime')) $('spNotifTime').textContent = notif.time;

    const wk = SP_DEMO.week;
    if ($('spWeekLabel')) $('spWeekLabel').textContent = `KW ${wk.kw} · Diese Woche`;
    if ($('spWeekRange')) $('spWeekRange').textContent = wk.range;
    if ($('spWeekCardTitle')) $('spWeekCardTitle').textContent = `KW ${wk.kw} · Diese Woche`;

    planState.selectedDay = wk.todayKey;
    renderHero(planState.selectedDay);
    renderWeekStrip();
    renderShiftList();
    renderMonth();
    bindPlanViewToggle();
    setPlanView('week');
  }

  /* ── Ferien page ── */

  function renderVacBanner() {
    const el = $('spVacBanner');
    if (!el) return;
    const b = SP_DEMO_FERIEN.banner;
    el.innerHTML = `
      <div class="sp-vac-banner-icon" aria-hidden="true">🏖️</div>
      <div>
        <div class="sp-vac-banner-title">${esc(b.title)}</div>
        <div class="sp-vac-banner-sub">${esc(b.sub)}</div>
      </div>
    `;
  }

  function renderBalance() {
    const list = $('spBalanceList');
    const title = $('spBalanceTitle');
    if (!list) return;
    const b = SP_DEMO_FERIEN.balance;
    if (title) title.textContent = `Meine Urlaubstage ${b.year}`;
    list.innerHTML = `
      <div class="sp-balance-row">
        <span class="sp-balance-label">Verfügbar</span>
        <span class="sp-balance-val sp-is-accent">${b.available} Tage</span>
      </div>
      <div class="sp-balance-row">
        <span class="sp-balance-label">Geplant</span>
        <span class="sp-balance-val sp-is-warn">${b.planned} Tage</span>
      </div>
      <div class="sp-balance-row">
        <span class="sp-balance-label">Verbleibend</span>
        <span class="sp-balance-val sp-is-ok">${b.remaining} Tage</span>
      </div>
    `;
  }

  function renderMyWeeks() {
    const list = $('spMyWeeksList');
    if (!list) return;
    list.innerHTML = SP_DEMO_FERIEN.myWeeks.map(w => {
      const st = VAC_STATUS_LABEL[w.status] || VAC_STATUS_LABEL.approved;
      return `
        <div class="sp-vac-week-row">
          <div class="sp-vac-week-info">
            <div class="sp-vac-week-title">KW ${w.kw} · ${esc(w.range)}</div>
            <div class="sp-vac-week-note">${esc(w.note)}</div>
          </div>
          <span class="sp-vac-status ${st.cls}">${st.text}</span>
        </div>
      `;
    }).join('');
  }

  function vacCountClass(n, max) {
    if (n >= max) return 'sp-vc-full';
    if (n >= max - 1) return 'sp-vc-warn';
    return 'sp-vc-ok';
  }

  function renderTeamVacTable(employee) {
    const wrap = $('spVacTableWrap');
    if (!wrap) return;
    const plan = SP_DEMO_FERIEN.teamPlan;
    const matchName = employee.fullName.split(' ').pop() || plan.employeeMatch;
    const people = [...new Set(plan.weeks.flatMap(w => w.people))].sort((a, b) => a.localeCompare(b, 'de'));

    let html = '<table class="sp-vac-tbl"><thead><tr><th>Mitarbeiter</th>';
    plan.weeks.forEach(w => {
      html += `<th class="${w.school ? 'sp-is-school' : ''}">KW${w.kw}${w.school ? ' 🎓' : ''}<small>${esc(w.range)}</small></th>`;
    });
    html += '</tr><tr><th class="sp-is-school-row">Anzahl</th>';
    plan.weeks.forEach(w => {
      const n = w.people.length;
      const cls = vacCountClass(n, plan.maxPerWeek);
      html += `<td class="${w.school ? 'sp-is-school' : ''}"><span class="sp-vac-count ${cls}">${n}/${plan.maxPerWeek}</span></td>`;
    });
    html += '</tr></thead><tbody>';

    people.forEach(person => {
      const isMe = person.includes(matchName) || person === plan.employeeMatch;
      html += `<tr class="${isMe ? 'sp-is-me' : ''}"><td>${esc(person)}</td>`;
      plan.weeks.forEach(w => {
        const onVac = w.people.includes(person);
        html += `<td class="${w.school ? 'sp-is-school' : ''}">`;
        if (onVac) html += '<span class="sp-vac-filled">🏖️</span>';
        html += '</td>';
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    wrap.innerHTML = html;
  }

  function setFerienView(view) {
    const mine = $('spFerienMine');
    const team = $('spFerienTeam');
    document.querySelectorAll('[data-sp-ferien-view]').forEach(btn => {
      const on = btn.dataset.spFerienView === view;
      btn.classList.toggle('sp-is-active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    if (mine) {
      mine.classList.toggle('sp-is-visible', view === 'mine');
      mine.hidden = view !== 'mine';
    }
    if (team) {
      team.classList.toggle('sp-is-visible', view === 'team');
      team.hidden = view !== 'team';
    }
  }

  function bindFerienViewToggle() {
    document.querySelectorAll('[data-sp-ferien-view]').forEach(btn => {
      btn.addEventListener('click', () => setFerienView(btn.dataset.spFerienView));
    });
  }

  function bindVacRequest() {
    const btn = $('spRequestVacBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      showToast('Demo: Urlaubsantrag wird später über API eingereicht.');
    });
  }

  function initFerienPage() {
    const { employee } = initAppShell();
    const plan = SP_DEMO_FERIEN.teamPlan;

    if ($('spTeamTitle')) $('spTeamTitle').textContent = plan.title;
    if ($('spTeamSub')) $('spTeamSub').textContent = plan.sub;

    renderVacBanner();
    renderBalance();
    renderMyWeeks();
    renderTeamVacTable(employee);
    bindFerienViewToggle();
    bindVacRequest();
    setFerienView('mine');
  }

  /* ── Admin dashboard ── */

  const ADM_SHIFTS = {
    w2: { label: 'Waldner 10.2', color: '#2563eb', time: '00–08', filter: 'w2' },
    w3: { label: 'Waldner 10.3', color: '#0891b2', time: '08–17', filter: 'w2' },
    sc: { label: 'Schmid KG', color: '#16a34a', time: '00–08', filter: 'sc' },
    jo: { label: 'Jogurt OG', color: '#7c3aed', time: '08–17', filter: 'jo' },
    t4: { label: 'T 47', color: '#d97706', time: '07–16', filter: 't4' },
    qk: { label: 'Quark', color: '#db2777', time: '00–08', filter: 'qk' },
    fr: { label: 'Frei', free: true, filter: 'fr' },
    va: { label: 'Urlaub 🏖️', vac: true, filter: 'va' },
  };

  const ADM_EMPLOYEES = [
    { name: 'Korsakov Sergej', id: '2104479', color: '#0d9488', initials: 'SK', shifts: ['w2', 'w3', 'jo', 'fr', 'fr'], status: 'seen' },
    { name: 'Alimani Gjiltime', id: '9877', color: '#16a34a', initials: 'AG', shifts: ['w2', 'w2', 'w2', 'w2', 'w2'], status: 'seen' },
    { name: 'Bedeti Desrim', id: '2115901', color: '#d97706', initials: 'BD', shifts: ['fr', 'fr', 'sc', 'sc', 'sc'], status: 'pending' },
    { name: 'Brunner Daniel', id: '200459', color: '#0891b2', initials: 'BN', shifts: ['w3', 'w3', 'w3', 'w3', 'w3'], status: 'seen' },
    { name: 'Cattaneo Fermo', id: '2108742', color: '#db2777', initials: 'CF', shifts: ['fr', 'fr', 'jo', 'jo', 'jo'], status: 'changed' },
    { name: 'Dürlewanger Anton', id: '9901', color: '#059669', initials: 'DA', shifts: ['t4', 't4', 't4', 't4', 'fr'], status: 'seen' },
    { name: 'Grieble Oliver', id: '2100326', color: '#7c3aed', initials: 'GO', shifts: ['w3', 'w3', 'w3', 'va', 'va'], status: 'seen' },
    { name: 'Ickan Kubilay', id: '2123339', color: '#1e40af', initials: 'IK', shifts: ['w2', 'w2', 'w2', 'w2', 'w2'], status: 'seen' },
    { name: 'Katic Marko', id: '2114690', color: '#db2777', initials: 'KM', shifts: ['fr', 'fr', 'fr', 'fr', 'fr'], status: 'seen' },
    { name: 'Keller Roman', id: '2108447', color: '#7c3aed', initials: 'KR', shifts: ['jo', 'jo', 'jo', 'jo', 'fr'], status: 'seen' },
    { name: 'Kleeberg Alexander', id: '2100387', color: '#059669', initials: 'KA', shifts: ['w3', 'w3', 'fr', 'fr', 'w3'], status: 'seen' },
    { name: 'Mansor Karam', id: '9942', color: '#d97706', initials: 'MK', shifts: ['fr', 'w2', 'w2', 'w2', 'w2'], status: 'pending' },
    { name: 'Mebrahtu Fenkil', id: '2113998', color: '#16a34a', initials: 'MF', shifts: ['w3', 'w3', 'fr', 'fr', 'fr'], status: 'seen' },
    { name: 'Rufener Nadine', id: '9962', color: '#0891b2', initials: 'RN', shifts: ['sc', 'sc', 'sc', 'sc', 'fr'], status: 'seen' },
    { name: 'Stüssi Michael', id: '12202', color: '#7c3aed', initials: 'SM', shifts: ['sc', 'sc', 'sc', 'sc', 'sc'], status: 'seen' },
  ];

  const ADM_MACHINES = [
    { name: 'Waldner 10.2', dept: 'BIS Jogurt', color: '#2563eb', badgeBg: 'rgba(37,99,235,0.1)', badgeColor: '#60a5fa', people: 6 },
    { name: 'Waldner 10.3', dept: 'BIS Jogurt', color: '#0891b2', badgeBg: 'rgba(8,145,178,0.1)', badgeColor: '#22d3ee', people: 5 },
    { name: 'Schmid KG', dept: 'BIS Jogurt', color: '#16a34a', badgeBg: 'rgba(22,163,74,0.1)', badgeColor: '#4ade80', people: 8 },
    { name: 'Jogurt OG', dept: 'BIS Jogurt', color: '#7c3aed', badgeBg: 'rgba(124,58,237,0.1)', badgeColor: '#c084fc', people: 4 },
    { name: 'T 47', dept: 'BIS Jogurt', color: '#d97706', badgeBg: 'rgba(217,119,6,0.1)', badgeColor: '#fbbf24', people: 3 },
    { name: 'Quark 122–125', dept: 'BIS Jogurt', color: '#db2777', badgeBg: 'rgba(219,39,119,0.1)', badgeColor: '#f472b6', people: 7 },
  ];

  const ADM_ZEIT = [
    { name: 'Korsakov Sergej', id: '2104479', initials: 'SK', color: 'linear-gradient(135deg, var(--sp-a), var(--sp-a3))', days: ['05:58–14:02', '06:00–14:00', '07:55–17:05'], total: '164.5h', extra: '+4.5h', extraOk: true },
    { name: 'Alimani Gjiltime', id: '9877', initials: 'AG', color: 'linear-gradient(135deg, #16a34a, #15803d)', days: ['07:58–16:03', '08:00–16:00', '08:01–16:02'], total: '160.0h', extra: '0h', extraOk: false },
    { name: 'Bedeti Desrim', id: '2115901', initials: 'BD', color: 'linear-gradient(135deg, #d97706, #b45309)', days: ['Frei', 'Frei', '00:02–08:01'], total: '96.0h', extra: '0h', extraOk: false },
  ];

  const ADM_DOCS = [
    { name: 'Korsakov Sergej', initials: 'SK', color: 'linear-gradient(135deg, var(--sp-a), var(--sp-a3))', doc: '📄 Lohnabrechnung', month: 'Mai 2026', uploaded: '01.06.2026' },
    { name: 'Alimani Gjiltime', initials: 'AG', color: 'linear-gradient(135deg, #16a34a, #15803d)', doc: '📄 Lohnabrechnung', month: 'Mai 2026', uploaded: '01.06.2026' },
    { name: 'Bedeti Desrim', initials: 'BD', color: 'linear-gradient(135deg, #d97706, #b45309)', doc: '📋 Arbeitsvertrag', month: '—', uploaded: '15.03.2021' },
  ];

  let admState = { filter: 'all', search: '' };

  function requireAdminSession() {
    if (!sessionStorage.getItem(SESSION_ADMIN)) {
      window.location.replace(`${SP_ADMIN_BASE}/index.html`);
      return false;
    }
    return true;
  }

  function showAdmToast(msg) {
    const el = $('spAdmToast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('sp-is-visible');
    clearTimeout(showAdmToast._t);
    showAdmToast._t = setTimeout(() => el.classList.remove('sp-is-visible'), 2800);
  }

  function admShiftChip(code) {
    const s = ADM_SHIFTS[code] || ADM_SHIFTS.fr;
    if (s.free) return `<span class="sp-adm-shift sp-is-free">${esc(s.label)}</span>`;
    if (s.vac) return `<span class="sp-adm-shift sp-is-vac">${esc(s.label)}</span>`;
    return `<span class="sp-adm-shift" style="background:color-mix(in srgb, ${s.color} 12%, transparent);color:${s.color}">${esc(s.label)}<small>${esc(s.time)}</small></span>`;
  }

  function admStatusBadge(status) {
    if (status === 'seen') return '<span class="sp-adm-status" style="color:#22c55e">✅ gesehen</span>';
    if (status === 'pending') return '<span class="sp-adm-status" style="color:var(--sp-text3)">⏳ ausstehend</span>';
    if (status === 'changed') return '<span class="sp-adm-status" style="color:#f59e0b">⚠️ geändert</span>';
    return '';
  }

  function employeeMatchesFilter(emp) {
    const f = admState.filter;
    if (f === 'all') return true;
    if (f === 'w2') return emp.shifts.some(c => c === 'w2' || c === 'w3');
    return emp.shifts.includes(f);
  }

  function renderAdminSchichtTable() {
    const body = $('spAdmSchichtBody');
    if (!body) return;
    const q = admState.search.toLowerCase();
    const rows = ADM_EMPLOYEES.filter(e => {
      if (q && !e.name.toLowerCase().includes(q)) return false;
      return employeeMatchesFilter(e);
    });
    body.innerHTML = rows.map(e => `
      <tr>
        <td><div class="sp-adm-emp">
          <div class="sp-adm-emp-av" style="background:${esc(e.color)}">${esc(e.initials)}</div>
          <div><div class="sp-adm-emp-name">${esc(e.name)}</div><div class="sp-adm-emp-id">#${esc(e.id)}</div></div>
        </div></td>
        ${e.shifts.map(s => `<td>${admShiftChip(s)}</td>`).join('')}
        <td>${admStatusBadge(e.status)}</td>
      </tr>
    `).join('');
  }

  function renderAdminVacTable() {
    const wrap = $('spAdmVacWrap');
    if (!wrap) return;
    const weeks = SP_DEMO_FERIEN.teamPlan.weeks;
    const max = SP_DEMO_FERIEN.teamPlan.maxPerWeek;
    const people = [...new Set(weeks.flatMap(w => w.people))].sort((a, b) => a.localeCompare(b, 'de'));

    let html = '<table class="sp-vac-tbl"><thead><tr><th>Mitarbeiter</th>';
    weeks.forEach(w => {
      html += `<th class="${w.school ? 'sp-is-school' : ''}">KW${w.kw}${w.school ? ' 🎓' : ''}<br><small>${esc(w.range)}</small></th>`;
    });
    html += '</tr><tr><th>Anzahl</th>';
    weeks.forEach(w => {
      const n = w.people.length;
      const cls = vacCountClass(n, max);
      html += `<td class="${w.school ? 'sp-is-school' : ''}"><span class="sp-vac-count ${cls}">${n}/${max}</span></td>`;
    });
    html += '</tr></thead><tbody>';
    people.forEach(person => {
      html += `<tr><td>${esc(person)}</td>`;
      weeks.forEach(w => {
        html += `<td class="${w.school ? 'sp-is-school' : ''}">`;
        if (w.people.includes(person)) html += '<span class="sp-vac-filled">🏖️</span>';
        html += '</td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    wrap.innerHTML = html;
  }

  function renderAdminMachines() {
    const grid = $('spAdmMachGrid');
    if (!grid) return;
    grid.innerHTML = ADM_MACHINES.map(m => `
      <div class="sp-adm-mach-card">
        <div class="sp-adm-mach-top">
          <div class="sp-adm-mach-dot" style="background:${m.color}"></div>
          <div><div class="sp-adm-mach-name">${esc(m.name)}</div><div class="sp-adm-mach-dept">${esc(m.dept)}</div></div>
        </div>
        <div class="sp-adm-mach-stat">
          <span class="sp-adm-mach-badge" style="background:${m.badgeBg};color:${m.badgeColor}">Aktiv</span>
          <span class="sp-adm-mach-people">👤 ${m.people} Mitarbeiter heute</span>
        </div>
      </div>
    `).join('');

    const colorsEl = $('spAdmMachColors');
    if (colorsEl) {
      colorsEl.innerHTML = ADM_MACHINES.map(m => `
        <div class="sp-adm-cp-item">
          <span class="sp-adm-cp-dot sp-is-selected" style="background:${m.color}"></span>
          <span>${esc(m.name)}</span>
        </div>
      `).join('');
    }
  }

  function renderAdminZeit() {
    const body = $('spAdmZeitBody');
    if (!body) return;
    body.innerHTML = ADM_ZEIT.map(z => `
      <tr>
        <td><div class="sp-adm-emp">
          <div class="sp-adm-emp-av" style="background:${z.color}">${esc(z.initials)}</div>
          <div><div class="sp-adm-emp-name">${esc(z.name)}</div><div class="sp-adm-emp-id">#${esc(z.id)}</div></div>
        </div></td>
        ${z.days.map(d => `<td><span class="sp-adm-mono" style="color:${d === 'Frei' ? 'var(--sp-text3)' : 'var(--sp-text)'}">${esc(d)}</span></td>`).join('')}
        <td><span class="sp-adm-mono" style="font-weight:600;color:var(--sp-a)">${esc(z.total)}</span></td>
        <td><span class="sp-adm-mono" style="font-weight:600;color:${z.extraOk ? '#22c55e' : 'var(--sp-text3)'}">${esc(z.extra)}</span></td>
      </tr>
    `).join('');
  }

  function renderAdminDocs() {
    const body = $('spAdmDocsBody');
    if (!body) return;
    body.innerHTML = ADM_DOCS.map(d => `
      <tr>
        <td><div class="sp-adm-emp">
          <div class="sp-adm-emp-av" style="background:${d.color}">${esc(d.initials)}</div>
          <div><div class="sp-adm-emp-name">${esc(d.name)}</div></div>
        </div></td>
        <td>${esc(d.doc)}</td>
        <td><span class="sp-adm-mono">${esc(d.month)}</span></td>
        <td><span style="font-size:11px;color:var(--sp-text2)">${esc(d.uploaded)}</span></td>
        <td><button type="button" class="sp-adm-btn sp-adm-btn-ghost" style="font-size:11px;padding:4px 8px" data-sp-adm-toast="PDF Download (Demo)">⬇️ PDF</button></td>
      </tr>
    `).join('');
  }

  function setAdminTab(tab) {
    document.querySelectorAll('[data-sp-adm-tab]').forEach(btn => {
      btn.classList.toggle('sp-is-active', btn.dataset.spAdmTab === tab);
    });
    document.querySelectorAll('[data-sp-adm-panel]').forEach(panel => {
      panel.classList.toggle('sp-is-active', panel.dataset.spAdmPanel === tab);
    });
  }

  function bindAdminNav() {
    document.querySelectorAll('[data-sp-adm-tab]').forEach(btn => {
      btn.addEventListener('click', () => setAdminTab(btn.dataset.spAdmTab));
    });
  }

  function bindAdminFilters() {
    document.querySelectorAll('[data-sp-adm-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        admState.filter = chip.dataset.spAdmFilter;
        document.querySelectorAll('[data-sp-adm-filter]').forEach(c => {
          c.classList.toggle('sp-is-active', c.dataset.spAdmFilter === admState.filter);
        });
        renderAdminSchichtTable();
      });
    });
    const search = $('spAdmSearch');
    if (search) {
      search.addEventListener('input', () => {
        admState.search = search.value.trim();
        renderAdminSchichtTable();
      });
    }
  }

  function bindAdminToasts() {
    document.querySelectorAll('[data-sp-adm-toast]').forEach(btn => {
      btn.addEventListener('click', () => showAdmToast(btn.dataset.spAdmToast));
    });
  }

  function bindAdminLogout() {
    const btn = $('spAdminLogoutBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      sessionStorage.removeItem(SESSION_ADMIN);
      window.location.href = `${SP_ADMIN_BASE}/index.html`;
    });
  }

  function bindAdminSettings() {
    document.querySelectorAll('[data-sp-adm-accent]').forEach(dot => {
      dot.addEventListener('click', () => {
        applyAccent(dot.dataset.spAdmAccent);
        document.querySelectorAll('[data-sp-adm-accent]').forEach(d => {
          d.classList.toggle('sp-is-selected', d.dataset.spAdmAccent === getAccent());
        });
      });
    });
    const accent = getAccent();
    document.querySelectorAll('[data-sp-adm-accent]').forEach(d => {
      d.classList.toggle('sp-is-selected', d.dataset.spAdmAccent === accent);
    });
    document.querySelectorAll('.sp-adm-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => toggle.classList.toggle('sp-is-on'));
    });
    document.querySelectorAll('.sp-adm-msg-ch').forEach(ch => {
      ch.addEventListener('click', () => ch.classList.toggle('sp-is-on'));
    });
  }

  function initAdminDashboard() {
    if (!requireAdminSession()) return;
    applyTheme(getTheme());
    applyAccent(getAccent());
    bindControls();
    bindAdminNav();
    bindAdminFilters();
    bindAdminToasts();
    bindAdminLogout();
    bindAdminSettings();
    renderAdminSchichtTable();
    renderAdminVacTable();
    renderAdminMachines();
    renderAdminZeit();
    renderAdminDocs();
    setAdminTab('schicht');
  }

  function init() {
    applyTheme(getTheme());
    applyAccent(getAccent());
    bindControls();

    const page = document.body.dataset.spPage;
    if (page === 'login') initLoginPage();
    else if (page === 'admin-login') initAdminLoginPage();
    else if (page === 'plan') initPlanPage();
    else if (page === 'ferien') initFerienPage();
    else if (page === 'admin-dashboard') initAdminDashboard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
