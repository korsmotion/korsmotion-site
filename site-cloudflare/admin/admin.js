const ADMIN_PASSWORD = 'korsmotion2026';
const SESSION_KEY = 'korsmotion_admin_session';
const API_DATA = '/api/data';
const API_SAVE = '/api/save';

// ── Admin UI translations ─────────────────────────────────────────────────────
const UI = {
  ru: {
    adminTitle: 'Админ-панель', viewSite: 'Смотреть сайт', logout: 'Выйти',
    showDev: 'Показать раздел «Разработка»', showDevDesc: 'Показывает ссылку Dev Apps в навигации',
    portfolio: 'Портфолио', devApps: 'Приложения', saveChanges: 'Сохранить',
    add: '+ Добавить', hide: 'Скрыть', show: 'Показать', delete: 'Удалить',
    loading: 'Загрузка...', saving: 'Сохранение...', saved: 'Сохранено ✓',
    loadedServer: 'Загружено с сервера ✓', loadedFiles: 'Загружено из файлов (KV недоступен)',
    saveError: 'Ошибка сохранения', noProjects: 'Нет проектов. Нажми + Добавить.',
    noApps: 'Нет приложений. Нажми + Добавить.',
    fieldTitle: 'Название', fieldThumb: 'Ссылка на картинку', fieldVideo: 'Ссылка на видео (YouTube)',
    fieldPlatform: 'Платформа', fieldLink: 'Ссылка', fieldDesc: 'Описание',
    fieldClient: 'Клиент', fieldYear: 'Год', fieldDuration: 'Длительность',
    langLabel: 'Контент на языках', noImage: 'Нет картинки',
    deleteConfirm: 'Удалить этот проект?', deleteAppConfirm: 'Удалить это приложение?',
    password: 'Пароль', signIn: 'Войти', wrongPassword: 'Неверный пароль',
    catLabel: 'Категория контента'
  },
  de: {
    adminTitle: 'Admin-Panel', viewSite: 'Website ansehen', logout: 'Abmelden',
    showDev: 'Bereich «Entwicklung» anzeigen', showDevDesc: 'Zeigt Dev Apps Link in der Navigation',
    portfolio: 'Portfolio', devApps: 'Apps', saveChanges: 'Speichern',
    add: '+ Hinzufügen', hide: 'Verbergen', show: 'Anzeigen', delete: 'Löschen',
    loading: 'Laden...', saving: 'Speichern...', saved: 'Gespeichert ✓',
    loadedServer: 'Vom Server geladen ✓', loadedFiles: 'Aus Dateien geladen (KV nicht verfügbar)',
    saveError: 'Fehler beim Speichern', noProjects: 'Keine Projekte. + Hinzufügen klicken.',
    noApps: 'Keine Apps. + Hinzufügen klicken.',
    fieldTitle: 'Titel', fieldThumb: 'Bild-URL', fieldVideo: 'Video-URL (YouTube)',
    fieldPlatform: 'Plattform', fieldLink: 'Link', fieldDesc: 'Beschreibung',
    fieldClient: 'Kunde', fieldYear: 'Jahr', fieldDuration: 'Dauer',
    langLabel: 'Inhalte in Sprachen', noImage: 'Kein Bild',
    deleteConfirm: 'Dieses Projekt löschen?', deleteAppConfirm: 'Diese App löschen?',
    password: 'Passwort', signIn: 'Anmelden', wrongPassword: 'Falsches Passwort',
    catLabel: 'Inhaltskategorie'
  },
  en: {
    adminTitle: 'Admin Panel', viewSite: 'View site', logout: 'Logout',
    showDev: 'Show Development section', showDevDesc: 'Shows Dev Apps link in navigation',
    portfolio: 'Portfolio', devApps: 'Dev Apps', saveChanges: 'Save changes',
    add: '+ Add', hide: 'Hide', show: 'Show', delete: 'Delete',
    loading: 'Loading...', saving: 'Saving...', saved: 'Saved ✓',
    loadedServer: 'Loaded from server ✓', loadedFiles: 'Loaded from files (KV not available)',
    saveError: 'Save error', noProjects: 'No projects yet. Click + Add.',
    noApps: 'No apps yet. Click + Add.',
    fieldTitle: 'Title', fieldThumb: 'Thumbnail URL', fieldVideo: 'Video URL (YouTube)',
    fieldPlatform: 'Platform', fieldLink: 'Link', fieldDesc: 'Description',
    fieldClient: 'Client', fieldYear: 'Year', fieldDuration: 'Duration',
    langLabel: 'Content by language', noImage: 'No image',
    deleteConfirm: 'Delete this project?', deleteAppConfirm: 'Delete this app?',
    password: 'Password', signIn: 'Sign in', wrongPassword: 'Incorrect password',
    catLabel: 'Content category'
  }
};

const SITE_LANGS = ['de', 'en', 'fr', 'it', 'ru'];
const SITE_LANG_LABELS = { de: '🇩🇪 DE', en: '🇬🇧 EN', fr: '🇫🇷 FR', it: '🇮🇹 IT', ru: '🇷🇺 RU' };
const ADMIN_LANGS = ['ru', 'de', 'en'];
const ADMIN_LANG_LABELS = { ru: 'RU', de: 'DE', en: 'EN' };

const CATEGORIES = [
  { id: 'motion', label: { ru: 'Моушн-дизайн', de: 'Motion Design', en: 'Motion Design' }, icon: '🎬' },
  { id: 'graphic', label: { ru: 'Графический дизайн', de: 'Grafik Design', en: 'Graphic Design' }, icon: '🎨' },
  { id: 'web', label: { ru: 'Веб', de: 'Web', en: 'Web' }, icon: '🌐' },
  { id: 'app', label: { ru: 'Разработка', de: 'App Dev', en: 'App Dev' }, icon: '📱' },
];

let adminLang = localStorage.getItem('korsmotion_admin_lang') || 'ru';
let projectsData = { projects: [] };
let settingsData = { show_dev_section: false, apps: [] };
const expandedCats = new Set(CATEGORIES.map(c => c.id));
let activeLangTab = {}; // per project id
let activeAppLangTab = {}; // per app index

// ── Helpers ───────────────────────────────────────────────────────────────────
function u() { return adminLang ? UI[adminLang] || UI.en : UI.en; }
function uid() { return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function adminAssetUrl(path) {
  if (!path) return '';
  if (/^(https?:\/\/|\/|data:)/i.test(path)) return path;
  return '../' + path.replace(/^\.\//, '');
}
function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
let saveBtnState = 'idle';

function initSaveBtn() {
  const btn = document.getElementById('saveBtn');
  if (!btn) return;
  btn.style.background = '#16A34A';
  btn.textContent = 'Сохранить';
}

function setStatus(msg, type) {
  const el = document.getElementById('saveStatus');
  el.textContent = msg;
  el.className = 'save-status' + (type ? ' ' + type : '');
  el.style.color = '';
}

function markUnsaved() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (!btn) return;
  saveBtnState = 'unsaved';
  btn.disabled = false;
  initSaveBtn();
  if (status) {
    status.textContent = '● Несохранённые изменения';
    status.style.color = '#F59E0B';
    status.className = 'save-status';
  }
}

function markSaving() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (!btn) return;
  saveBtnState = 'saving';
  btn.disabled = true;
  initSaveBtn();
  if (status) {
    status.textContent = 'Сохраняю...';
    status.style.color = '#9CA3AF';
    status.className = 'save-status';
  }
}

function markSaved() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (!btn) return;
  saveBtnState = 'saved';
  btn.disabled = false;
  initSaveBtn();
  if (status) {
    status.textContent = '✓✓ Загружено с сервера';
    status.style.color = '#16A34A';
    status.className = 'save-status';
  }
}

function markSaveError(msg) {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (!btn) return;
  saveBtnState = 'error';
  btn.disabled = false;
  initSaveBtn();
  if (status) {
    status.textContent = msg ? 'Ошибка сохранения: ' + msg : 'Ошибка сохранения';
    status.style.color = '#DC2626';
    status.className = 'save-status';
  }
}

// ── Admin language switcher ───────────────────────────────────────────────────
function setAdminLang(lang) {
  adminLang = lang;
  localStorage.setItem('korsmotion_admin_lang', lang);
  applyAdminLang();
  renderAll();
}

function applyAdminLang() {
  const t = u();
  // Update static UI labels
  document.querySelectorAll('[data-ui]').forEach(el => {
    if (el.id === 'saveBtn') return;
    const key = el.getAttribute('data-ui');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  initSaveBtn();
  document.querySelectorAll('[data-ui-placeholder]').forEach(el => {
    const key = el.getAttribute('data-ui-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Active lang button
  document.querySelectorAll('.admin-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === adminLang);
  });
}

// ── Auth ──────────────────────────────────────────────────────────────────────
function isLoggedIn() { return sessionStorage.getItem(SESSION_KEY) === 'true'; }

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'block';
  document.getElementById('saveBar').style.display = 'flex';
  initSaveBtn();
  applyAdminLang();
  loadData();
}
function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminApp').style.display = 'none';
  document.getElementById('saveBar').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const pw = document.getElementById('password').value;
  const err = document.getElementById('loginError');
  if (pw === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    err.classList.remove('show');
    showAdmin();
  } else {
    err.classList.add('show');
  }
});
document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
});

// ── Data ──────────────────────────────────────────────────────────────────────
async function loadData() {
  setStatus(u().loading, '');
  try {
    const res = await fetch(API_DATA);
    if (!res.ok) throw new Error();
    const data = await res.json();
    projectsData = data.projects || { projects: [] };
    settingsData = data.settings || { show_dev_section: false, apps: [] };
    markSaved();
  } catch {
    try {
      const [pRes, sRes] = await Promise.all([fetch('../data/projects.json'), fetch('../data/settings.json')]);
      if (pRes.ok) projectsData = await pRes.json();
      if (sRes.ok) settingsData = await sRes.json();
      setStatus(u().loadedFiles, 'warning');
      saveBtnState = 'idle';
    } catch {
      markSaveError('');
    }
  }
  document.getElementById('showDevSection').checked = !!settingsData.show_dev_section;
  renderAll();
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  markSaving();
  try {
    const res = await fetch(API_SAVE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, projects: projectsData, settings: settingsData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    markSaved();
    showToast(u().saved, 'success');
    const now = new Date();
    localStorage.setItem('korsmotion_last_saved',
      now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'}));
    renderDashboard();
  } catch (err) {
    markSaveError(err.message);
    showToast(u().saveError, 'error');
  }
});

document.getElementById('showDevSection').addEventListener('change', e => {
  settingsData.show_dev_section = e.target.checked;
  markUnsaved();
});

function renderAll() {
  renderDashboard();
  renderProjects();
  renderApps();
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
async function renderDashboard() {
  const el = document.getElementById('dashboardSection');
  if (!el) return;

  const projects = (projectsData.projects || []).length;
  const apps = (settingsData.apps || []).length;
  const lastSaved = localStorage.getItem('korsmotion_last_saved') || '—';

  // Render skeleton first
  el.innerHTML = `
    <div class="dash-grid">
      <div class="dash-card">
        <div class="dash-icon">📁</div>
        <div class="dash-val">${projects}</div>
        <div class="dash-label">Проектов</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">📱</div>
        <div class="dash-val">${apps}</div>
        <div class="dash-label">Приложений</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">💾</div>
        <div class="dash-val dash-val-sm">${lastSaved}</div>
        <div class="dash-label">Последнее сохранение</div>
      </div>
      <div class="dash-card" id="dash-today">
        <div class="dash-icon">👁</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">Просмотров сегодня</div>
      </div>
      <div class="dash-card" id="dash-week">
        <div class="dash-icon">📈</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">За 7 дней</div>
      </div>
      <div class="dash-card" id="dash-month">
        <div class="dash-icon">🗓</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">За 30 дней</div>
      </div>
    </div>`;

  // Load analytics async
  try {
    const resp = await fetch('/api/analytics', {
      headers: { 'X-Admin-Password': ADMIN_PASSWORD }
    });
    const data = await resp.json();
    const acc = data?.data?.viewer?.accounts?.[0];
    if (acc) {
      const todayViews = acc.today?.[0]?.sum?.visits ?? '—';
      const weekViews  = acc.week?.[0]?.sum?.visits ?? '—';
      const monthViews = acc.total?.[0]?.sum?.visits ?? '—';
      document.getElementById('dash-today').querySelector('.dash-val').textContent = todayViews;
      document.getElementById('dash-week').querySelector('.dash-val').textContent = weekViews;
      document.getElementById('dash-month').querySelector('.dash-val').textContent = monthViews;
      document.getElementById('dash-today').querySelector('.dash-val').classList.remove('dash-loading');
      document.getElementById('dash-week').querySelector('.dash-val').classList.remove('dash-loading');
      document.getElementById('dash-month').querySelector('.dash-val').classList.remove('dash-loading');
    }
  } catch(e) {
    ['dash-today','dash-week','dash-month'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.querySelector('.dash-val').textContent = '—';
    });
  }
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
function projectsByCategory(catId) {
  return (projectsData.projects || []).filter(p => (p.categoryId || 'motion') === catId);
}

function renderProjects() {
  const t = u();
  const all = projectsData.projects || [];
  document.getElementById('projectsCount').textContent = all.length;

  const container = document.getElementById('projectsList');
  container.innerHTML = CATEGORIES.map(cat => {
    const items = projectsByCategory(cat.id);
    const isOpen = expandedCats.has(cat.id);
    const catLabel = cat.label[adminLang] || cat.label.en;
    return `
      <div class="cat-section">
        <div class="cat-header" onclick="toggleCat('${cat.id}')">
          <div class="cat-header-left">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-label">${catLabel}</span>
            <span class="cat-count">${items.length}</span>
          </div>
          <div class="cat-header-right">
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addProject('${cat.id}')">${t.add}</button>
            <span class="cat-chevron ${isOpen ? 'open' : ''}">▾</span>
          </div>
        </div>
        <div class="cat-body ${isOpen ? 'open' : ''}">
          ${items.length === 0
            ? `<div class="empty-state">${t.noProjects}</div>`
            : items.map(p => renderProjectCard(p)).join('')}
        </div>
      </div>`;
  }).join('');

  // Bind inputs
  container.querySelectorAll('.proj-field').forEach(el => {
    el.addEventListener('input', e => {
      const id = e.target.dataset.id, field = e.target.dataset.field, lang = e.target.dataset.lang;
      const p = projectsData.projects.find(x => x.id === id);
      if (!p) return;
      if (lang) {
        if (!p[field]) p[field] = {};
        p[field][lang] = e.target.value;
      } else {
        p[field] = e.target.value;
        if (field === 'title') {
          const card = e.target.closest('.item-card');
          if (card) card.querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        }
        if (field === 'thumbnail') updateThumbPreview(id, e.target.value);
      }
      markUnsaved();
    });
  });

  container.querySelectorAll('.vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = projectsData.projects.find(x => x.id === btn.dataset.id);
      if (p) { p.visible = !p.visible; renderProjects(); markUnsaved(); }
    });
  });

  container.querySelectorAll('.del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(u().deleteConfirm)) {
        projectsData.projects = projectsData.projects.filter(x => x.id !== btn.dataset.id);
        renderProjects();
        markUnsaved();
      }
    });
  });
}

function renderProjectCard(p) {
  const t = u();
  const activeLang = activeLangTab[p.id] || 'en';
  const thumb = p.thumbnail
    ? `<img class="thumb-preview" id="thumb-${p.id}" src="${esc(p.thumbnail)}" alt="" onerror="this.style.display='none'">`
    : `<div class="thumb-placeholder" id="thumb-${p.id}">${t.noImage}</div>`;

  const langTabs = SITE_LANGS.map(lang => `
    <button class="lang-tab ${lang === activeLang ? 'active' : ''}"
      onclick="setProjectLangTab('${p.id}','${lang}')">${SITE_LANG_LABELS[lang]}</button>
  `).join('');

  const titleVal = (p.titles && p.titles[activeLang]) || '';
  const descVal = (p.descriptions && p.descriptions[activeLang]) || '';

  return `
    <div class="item-card ${p.visible ? '' : 'hidden-item'}" data-id="${p.id}">
      <div class="item-card-head">
        <span class="item-card-title">${esc(p.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm vis-btn" data-id="${p.id}">${p.visible ? t.hide : t.show}</button>
          <button class="btn btn-danger btn-sm del-btn" data-id="${p.id}">${t.delete}</button>
        </div>
      </div>
      <div class="item-card-body">
        <div class="thumb-col">${thumb}</div>
        <div class="fields-col">
          <div class="item-fields">
            <div class="form-group">
              <label class="form-label">${t.fieldTitle} (slug)</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="title" value="${esc(p.title)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldThumb}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="thumbnail" value="${esc(p.thumbnail)}" placeholder="https://...">
            </div>
            <div class="form-group full">
              <label class="form-label">${t.fieldVideo}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="videoUrl" value="${esc(p.videoUrl)}" placeholder="https://youtube.com/watch?v=...">
              ${p.videoUrl && getYouTubeIdAdmin(p.videoUrl) ? `
                <div class="video-thumb-wrap" id="vthumb-${p.id}">
                  <img class="video-thumb-img" src="https://img.youtube.com/vi/${getYouTubeIdAdmin(p.videoUrl)}/mqdefault.jpg" alt="">
                  <button class="video-play-btn" onclick="toggleVideoPreview('${p.id}','${esc(p.videoUrl)}')">▶ Play</button>
                </div>
              ` : ''}
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldClient}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="client" value="${esc(p.client)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldYear}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="year" value="${esc(p.year)}">
            </div>
            <div class="form-group full">
              <label class="form-label">Тип карточки</label>
              <div class="card-type-toggle">
                <button class="card-type-btn ${!p.cardType || p.cardType === 'default' ? 'active' : ''}"
                  onclick="setCardType('${p.id}','default')">
                  📋 Видео + текст
                </button>
                <button class="card-type-btn ${p.cardType === 'full' ? 'active' : ''}"
                  onclick="setCardType('${p.id}','full')">
                  🎬 Только видео
                </button>
              </div>
            </div>
          </div>

          <div class="lang-section">
            <div class="lang-section-label">${t.langLabel}:</div>
            <div class="lang-tabs">${langTabs}</div>
            <div class="lang-fields">
              <div class="form-group">
                <label class="form-label">${t.fieldTitle}</label>
                <input class="form-input proj-field" data-id="${p.id}" data-field="titles" data-lang="${activeLang}" value="${esc(titleVal)}">
              </div>
              <div class="form-group">
                <label class="form-label">${t.fieldDesc}</label>
                <textarea class="form-textarea proj-field" data-id="${p.id}" data-field="descriptions" data-lang="${activeLang}">${esc(descVal)}</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function updateThumbPreview(id, url) {
  const el = document.getElementById('thumb-' + id);
  if (!el) return;
  const t = u();
  el.outerHTML = url
    ? `<img class="thumb-preview" id="thumb-${id}" src="${esc(url)}" alt="" onerror="this.style.display='none'">`
    : `<div class="thumb-placeholder" id="thumb-${id}">${t.noImage}</div>`;
}

window.toggleCat = function(catId) {
  expandedCats.has(catId) ? expandedCats.delete(catId) : expandedCats.add(catId);
  renderProjects();
};

window.addProject = function(catId) {
  const count = projectsData.projects.length;
  const gradients = ['pv-1','pv-2','pv-3','pv-4','pv-5'];
  const layouts = ['large','small','third'];
  projectsData.projects.push({
    id: uid(), title: 'New Project', categoryId: catId,
    category: CATEGORIES.find(c => c.id === catId)?.label.en || 'Motion Design',
    thumbnail: '', videoUrl: '', visible: true,
    layout: layouts[count % 3], gradient: gradients[count % 5],
    client: '', year: new Date().getFullYear().toString(), duration: '',
    titles: {}, descriptions: {}
  });
  expandedCats.add(catId);
  renderProjects();
  markUnsaved();
};

window.setAppLangTab = function(idx, lang) {
  activeAppLangTab[idx] = lang;
  renderApps();
};

window.setProjectLangTab = function(id, lang) {
  activeLangTab[id] = lang;
  renderProjects();
};

// ── Dev Apps ──────────────────────────────────────────────────────────────────
function renderAppScreensAdmin(a, i) {
  const screens = (a.screens || ['','','','','']).concat(['','','','','']).slice(0,5);
  const labels = ['Скриншот 1','Скриншот 2','Скриншот 3','Скриншот 4','Скриншот 5'];
  return screens.map((s, si) => `
    <div class="form-group">
      <label class="form-label">${labels[si]}</label>
      <input class="form-input app-field" data-index="${i}" data-field="screens" data-screen="${si}"
        value="${esc(s)}" placeholder="images/apps/appname/screen${si+1}.png">
    </div>`).join('');
}

function renderApps() {
  const t = u();
  const items = settingsData.apps || [];
  document.getElementById('appsCount').textContent = items.length;

  const container = document.getElementById('appsList');
  if (!items.length) {
    container.innerHTML = `<div class="empty-state">${t.noApps}</div>`;
    return;
  }

  container.innerHTML = items.map((a, i) => {
    const iconUrl = adminAssetUrl(a.icon || '');
    const iconHtml = iconUrl
      ? `<img id="app-icon-${i}" src="${esc(iconUrl)}" style="width:64px;height:64px;border-radius:14px;object-fit:cover;border:2px solid var(--border)" onerror="this.outerHTML='<div id=app-icon-${i} style=width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px>📱</div>'">`
      : `<div id="app-icon-${i}" style="width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>`;

    return `
    <div class="item-card ${a.visible ? '' : 'hidden-item'}">
      <div class="item-card-head">
        <span class="item-card-title">${esc(a.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm app-vis-btn" data-index="${i}">${a.visible ? t.hide : t.show}</button>
          <button class="btn btn-danger btn-sm app-del-btn" data-index="${i}">${t.delete}</button>
        </div>
      </div>

      <div style="display:flex;gap:16px;margin-top:14px;align-items:flex-start">
        <div>${iconHtml}</div>
        <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div class="form-group">
            <label class="form-label">Название</label>
            <input class="form-input app-field" data-index="${i}" data-field="title" value="${esc(a.title)}">
          </div>
          <div class="form-group">
            <label class="form-label">Платформа</label>
            <input class="form-input app-field" data-index="${i}" data-field="platform" value="${esc(a.platform)}" placeholder="Android TV">
          </div>
          <div class="form-group" style="grid-column:1/-1">
            <label class="form-label">Иконка (путь)</label>
            <input class="form-input app-field" data-index="${i}" data-field="icon" value="${esc(a.icon||'')}" placeholder="images/apps/appname/icon.png">
          </div>
        </div>
      </div>

      <!-- Описание на языках -->
      <div class="lang-section" style="margin-top:12px">
        <div class="lang-section-label">Описание на языках:</div>
        <div class="lang-tabs">
          ${SITE_LANGS.map(lang => `
            <button class="lang-tab ${(activeAppLangTab[i] || 'en') === lang ? 'active' : ''}"
              onclick="setAppLangTab(${i},'${lang}')">${SITE_LANG_LABELS[lang]}</button>
          `).join('')}
        </div>
        <div class="lang-fields">
          <div class="form-group">
            <textarea class="form-textarea app-field" data-index="${i}" data-field="descriptions" data-lang="${activeAppLangTab[i] || 'en'}"
              placeholder="Описание приложения...">${esc((a.descriptions && a.descriptions[activeAppLangTab[i] || 'en']) || '')}</textarea>
          </div>
        </div>
      </div>

      <!-- Скриншоты -->
      <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
        <div class="form-label" style="margin-bottom:10px">🖼 Скриншоты (images/apps/appname/)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          ${renderAppScreensAdmin(a, i)}
        </div>
      </div>

      <!-- Кнопки магазинов -->
      <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
        <div class="form-label" style="margin-bottom:10px">🏪 Магазины</div>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:center">

          <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
            <input type="checkbox" class="app-check" data-index="${i}" data-field="showGooglePlay" ${a.showGooglePlay ? 'checked' : ''}>
            Google Play
          </label>
          <input class="form-input app-field" data-index="${i}" data-field="googlePlayUrl"
            value="${esc(a.googlePlayUrl||'')}" placeholder="https://play.google.com/store/apps/details?id=...">

          <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
            <input type="checkbox" class="app-check" data-index="${i}" data-field="showAppStore" ${a.showAppStore ? 'checked' : ''}>
            App Store
          </label>
          <input class="form-input app-field" data-index="${i}" data-field="appStoreUrl"
            value="${esc(a.appStoreUrl||'')}" placeholder="https://apps.apple.com/app/...">

        </div>
      </div>

    </div>`;
  }).join('');

  // Bind inputs
  container.querySelectorAll('.app-field').forEach(el => {
    el.addEventListener('input', e => {
      const idx = +e.target.dataset.index;
      const field = e.target.dataset.field;
      const screenIdx = e.target.dataset.screen;
      const lang = e.target.dataset.lang;
      if (screenIdx !== undefined) {
        if (!settingsData.apps[idx].screens) settingsData.apps[idx].screens = ['','','','',''];
        settingsData.apps[idx].screens[+screenIdx] = e.target.value;
      } else if (lang) {
        if (!settingsData.apps[idx].descriptions) settingsData.apps[idx].descriptions = {};
        settingsData.apps[idx].descriptions[lang] = e.target.value;
      } else {
        settingsData.apps[idx][field] = e.target.value;
        if (field === 'title') e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        if (field === 'icon') {
          const iconEl = document.getElementById('app-icon-' + idx);
          if (iconEl) {
            if (e.target.value) {
              iconEl.outerHTML = `<img id="app-icon-${idx}" src="${esc(adminAssetUrl(e.target.value))}" style="width:64px;height:64px;border-radius:14px;object-fit:cover;border:2px solid var(--border)" onerror="this.outerHTML='<div id=app-icon-${idx} style=width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px>📱</div>'">`;
            } else {
              iconEl.outerHTML = `<div id="app-icon-${idx}" style="width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>`;
            }
          }
        }
      }
      markUnsaved();
    });
  });

  // Bind checkboxes
  container.querySelectorAll('.app-check').forEach(el => {
    el.addEventListener('change', e => {
      const idx = +e.target.dataset.index;
      settingsData.apps[idx][e.target.dataset.field] = e.target.checked;
      markUnsaved();
    });
  });

  container.querySelectorAll('.app-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      settingsData.apps[+btn.dataset.index].visible = !settingsData.apps[+btn.dataset.index].visible;
      renderApps();
      markUnsaved();
    });
  });
  container.querySelectorAll('.app-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(u().deleteAppConfirm)) { settingsData.apps.splice(+btn.dataset.index, 1); renderApps(); markUnsaved(); }
    });
  });
}

document.getElementById('addAppBtn').addEventListener('click', () => {
  settingsData.apps.push({
    id: uid(), title: 'New App', descriptions: {}, platform: 'Android TV',
    icon: '', screens: ['','','','',''],
    showGooglePlay: false, googlePlayUrl: '',
    showAppStore: false, appStoreUrl: '',
    visible: true
  });
  renderApps();
  markUnsaved();
});

// ── Init ──────────────────────────────────────────────────────────────────────
// Admin lang switcher buttons
document.querySelectorAll('.admin-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setAdminLang(btn.dataset.lang));
});

if (isLoggedIn()) showAdmin(); else showLogin();

function getYouTubeIdAdmin(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

window.toggleVideoPreview = function(id, url) {
  const ytId = getYouTubeIdAdmin(url);
  if (!ytId) return;
  const wrap = document.getElementById('vthumb-' + id);
  if (!wrap) return;
  if (wrap.querySelector('iframe')) {
    wrap.innerHTML = `
      <img class="video-thumb-img" src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" alt="">
      <button class="video-play-btn" onclick="toggleVideoPreview('${id}','${url}')">▶ Play</button>`;
    return;
  }
  wrap.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen 
      style="width:100%;height:100%;border-radius:8px;border:none"></iframe>
    <button class="video-play-btn stop" onclick="toggleVideoPreview('${id}','${url}')">■ Stop</button>`;
};

window.setCardType = function(id, type) {
  const p = projectsData.projects.find(x => x.id === id);
  if (p) { p.cardType = type; renderProjects(); markUnsaved(); }
};
