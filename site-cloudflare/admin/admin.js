const ADMIN_PASSWORD = 'korsmotion2026';
const SESSION_KEY = 'korsmotion_admin_session';
const GITHUB_TOKEN_KEY = 'korsmotion_github_token';
const WEATHER_KEY = 'korsmotion_weather_key';
const WEATHER_IMAGE_ACCEPT = 'image/*,.gif';
const WEATHER_SLOTS = [
  { id: 'sunny', label: 'Sunny', emoji: '☀️' },
  { id: 'night', label: 'Night', emoji: '🌙' },
  { id: 'cloudy', label: 'Cloudy', emoji: '☁️' },
  { id: 'rain', label: 'Rain', emoji: '🌧️' },
  { id: 'snow', label: 'Snow', emoji: '❄️' },
  { id: 'thunderstorm', label: 'Thunderstorm', emoji: '⛈️' },
  { id: 'fog', label: 'Fog', emoji: '🌫️' },
  { id: 'sun_up', label: 'Sun_up_Рассвет', emoji: '🌅' },
  { id: 'sunset', label: 'Закат', emoji: '🌇' },
];
const GITHUB_REPO = 'korsmotion/korsmotion-site';
const GITHUB_BRANCH = 'main';
const API_DATA = '/api/data';
const API_SAVE = '/api/save';
const API_SERVICES = '/api/services';
const WEATHER_CITY = 'Bischofszell,CH';
const WEATHER_REFRESH_MS = 30 * 60 * 1000;
const SECTION_COLLAPSE_KEY = 'korsmotion_admin_section_';
const SECTION_COLLAPSE_DEFAULTS = { dashboard: false, portfolio: true, devApps: true, services: true };
const CAT_COLLAPSE_PREFIX = 'korsmotion_cat_collapsed_';
const PROJECT_CARD_COLLAPSE_PREFIX = 'korsmotion_proj_collapsed_';
const APP_CARD_COLLAPSE_PREFIX = 'korsmotion_appcard_collapsed_';
const SERVICE_CARD_COLLAPSE_PREFIX = 'korsmotion_svc_collapsed_';

// ── Admin UI translations ─────────────────────────────────────────────────────
const UI = {
  ru: {
    adminTitle: 'Админ-панель', viewSite: 'Смотреть сайт', logout: 'Выйти',
    showDev: 'Показать на сайте', showDevDesc: 'Раздел «Разработка» на главной и в меню',
    portfolio: 'Портфолио', devApps: 'Разработка', devAppsDesc: 'Приложения и другие проекты',
    addDev: '+ Добавить', saveChanges: 'Сохранить',
    add: '+ Добавить', hide: 'Скрыть', show: 'Показать', delete: 'Удалить',
    loading: 'Загрузка...', saving: 'Сохраняю...', saved: '✓ Сохранено',
    loadedServer: '✓✓ Загружено с сервера', loadedFiles: 'Загружено из файлов (KV недоступен)',
    unsavedChanges: '● Несохранённые изменения',
    saveError: 'Ошибка сохранения', noProjects: 'Нет проектов. Нажми + Добавить.',
    noApps: 'Нет проектов разработки. Нажми + Добавить.',
    fieldTitle: 'Название', fieldThumb: 'Ссылка на картинку', fieldVideo: 'Ссылка на видео (YouTube)',
    fieldPlatform: 'Платформа', fieldLink: 'Ссылка', fieldDesc: 'Описание',
    fieldClient: 'Клиент', fieldYear: 'Год', fieldDuration: 'Длительность',
    langLabel: 'Контент на языках', noImage: 'Нет картинки',
    deleteConfirm: 'Удалить этот проект?', deleteAppConfirm: 'Удалить это приложение?',
    password: 'Пароль', signIn: 'Войти', wrongPassword: 'Неверный пароль',
    catLabel: 'Категория контента',
    dashboardTitle: 'Дашборд', dashProjects: 'Проектов', dashApps: 'Приложений',
    dashLastSaved: 'Последнее сохранение', dashViewsToday: 'Просмотров сегодня',
    dashWeek: 'За 7 дней', dashMonth: 'За 30 дней',
    settingsTitle: 'Настройки', settingsClose: 'Закрыть', settingsBtnTitle: 'Настройки',
    integrationsTitle: 'Интеграции', githubToken: 'GitHub Token', githubDesc: 'Для загрузки файлов в репозиторий',
    weatherTitle: 'Погода', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'Для виджета погоды в Dashboard', weatherImages: 'Фоновые картинки погоды',
    generalTitle: 'Основные', saveBtn: 'Сохранить', uploadBtn: '📁 Загрузить',
    weatherNoApiKey: 'Укажи API ключ в Настройках ⚙️', weatherLoading: 'Загрузка погоды…',
    weatherError: 'Не удалось загрузить погоду', weatherToday: 'Сегодня',
    svcFieldTitle: 'НАЗВАНИЕ',
    svcFieldPrice: 'ЦЕНА (ЧИСЛО)',
    svcFieldShortDesc: 'КРАТКОЕ ОПИСАНИЕ (КАРТОЧКА)',
    svcFieldSubtitle: 'ПОДЗАГОЛОВОК (МОДАЛ)',
    svcFieldWhat: 'ЧТО ПОЛУЧАЕТЕ',
    svcFieldPriceNote: 'ПРИМЕЧАНИЕ К ЦЕНЕ / СРОК',
    svcFieldSteps: 'ШАГИ ПРОЦЕССА (4 ШАГА)',
    svcFieldFaq: 'FAQ (3 ВОПРОСА)',
    svcHide: 'Скрыть',
    svcShow: 'Показать',
    svcSave: '💾 Сохранить услуги',
    svcCount: 'Услуги',
    svcDesc: 'Редактируй тексты на всех 5 языках. Переключай язык внутри каждой карточки. Нажми «Сохранить услуги» после изменений.'
  },
  de: {
    adminTitle: 'Admin-Panel', viewSite: 'Website ansehen', logout: 'Abmelden',
    showDev: 'Auf Website anzeigen', showDevDesc: 'Bereich «Entwicklung» auf der Startseite und im Menü',
    portfolio: 'Portfolio', devApps: 'Entwicklung', devAppsDesc: 'Apps und andere Entwicklungsprojekte',
    addDev: '+ Hinzufügen', saveChanges: 'Speichern',
    add: '+ Hinzufügen', hide: 'Verbergen', show: 'Anzeigen', delete: 'Löschen',
    loading: 'Laden...', saving: 'Speichere...', saved: '✓ Gespeichert',
    loadedServer: '✓✓ Vom Server geladen', loadedFiles: 'Aus Dateien geladen (KV nicht verfügbar)',
    unsavedChanges: '● Ungespeicherte Änderungen',
    saveError: 'Fehler beim Speichern', noProjects: 'Keine Projekte. + Hinzufügen klicken.',
    noApps: 'Keine Entwicklungsprojekte. + Hinzufügen klicken.',
    fieldTitle: 'Titel', fieldThumb: 'Bild-URL', fieldVideo: 'Video-URL (YouTube)',
    fieldPlatform: 'Plattform', fieldLink: 'Link', fieldDesc: 'Beschreibung',
    fieldClient: 'Kunde', fieldYear: 'Jahr', fieldDuration: 'Dauer',
    langLabel: 'Inhalte in Sprachen', noImage: 'Kein Bild',
    deleteConfirm: 'Dieses Projekt löschen?', deleteAppConfirm: 'Diese App löschen?',
    password: 'Passwort', signIn: 'Anmelden', wrongPassword: 'Falsches Passwort',
    catLabel: 'Inhaltskategorie',
    dashboardTitle: 'Dashboard', dashProjects: 'Projekte', dashApps: 'Apps',
    dashLastSaved: 'Letzte Speicherung', dashViewsToday: 'Aufrufe heute',
    dashWeek: '7 Tage', dashMonth: '30 Tage',
    settingsTitle: 'Einstellungen', settingsClose: 'Schließen', settingsBtnTitle: 'Einstellungen',
    integrationsTitle: 'Integrationen', githubToken: 'GitHub Token', githubDesc: 'Für Datei-Upload ins Repository',
    weatherTitle: 'Wetter', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'Für das Wetter-Widget im Dashboard', weatherImages: 'Wetter-Hintergrundbilder',
    generalTitle: 'Allgemein', saveBtn: 'Speichern', uploadBtn: '📁 Hochladen',
    weatherNoApiKey: 'API-Schlüssel in Einstellungen ⚙️ angeben', weatherLoading: 'Wetter wird geladen…',
    weatherError: 'Wetter konnte nicht geladen werden', weatherToday: 'Heute',
    svcFieldTitle: 'NAME',
    svcFieldPrice: 'PREIS (ZAHL)',
    svcFieldShortDesc: 'KURZBESCHREIBUNG (KARTE)',
    svcFieldSubtitle: 'UNTERTITEL (MODAL)',
    svcFieldWhat: 'WAS SIE ERHALTEN',
    svcFieldPriceNote: 'PREISHINWEIS / DAUER',
    svcFieldSteps: 'PROZESSSCHRITTE (4 SCHRITTE)',
    svcFieldFaq: 'FAQ (3 FRAGEN)',
    svcHide: 'Verbergen',
    svcShow: 'Anzeigen',
    svcSave: '💾 Dienste speichern',
    svcCount: 'Dienstleistungen',
    svcDesc: 'Texte in allen 5 Sprachen bearbeiten. Sprache in jeder Karte wechseln. Nach Änderungen «Dienste speichern» klicken.'
  },
  en: {
    adminTitle: 'Admin Panel', viewSite: 'View site', logout: 'Logout',
    showDev: 'Show on site', showDevDesc: 'Development section on homepage and in navigation',
    portfolio: 'Portfolio', devApps: 'Development', devAppsDesc: 'Apps and other development projects',
    addDev: '+ Add', saveChanges: 'Save changes',
    add: '+ Add', hide: 'Hide', show: 'Show', delete: 'Delete',
    loading: 'Loading...', saving: 'Saving...', saved: '✓ Saved',
    loadedServer: '✓✓ Loaded from server', loadedFiles: 'Loaded from files (KV not available)',
    unsavedChanges: '● Unsaved changes',
    saveError: 'Save error', noProjects: 'No projects yet. Click + Add.',
    noApps: 'No development projects yet. Click + Add.',
    fieldTitle: 'Title', fieldThumb: 'Thumbnail URL', fieldVideo: 'Video URL (YouTube)',
    fieldPlatform: 'Platform', fieldLink: 'Link', fieldDesc: 'Description',
    fieldClient: 'Client', fieldYear: 'Year', fieldDuration: 'Duration',
    langLabel: 'Content by language', noImage: 'No image',
    deleteConfirm: 'Delete this project?', deleteAppConfirm: 'Delete this app?',
    password: 'Password', signIn: 'Sign in', wrongPassword: 'Incorrect password',
    catLabel: 'Content category',
    dashboardTitle: 'Dashboard', dashProjects: 'Projects', dashApps: 'Apps',
    dashLastSaved: 'Last saved', dashViewsToday: 'Views today',
    dashWeek: '7 days', dashMonth: '30 days',
    settingsTitle: 'Settings', settingsClose: 'Close', settingsBtnTitle: 'Settings',
    integrationsTitle: 'Integrations', githubToken: 'GitHub Token', githubDesc: 'For file upload to repository',
    weatherTitle: 'Weather', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'For the weather widget in Dashboard', weatherImages: 'Weather background images',
    generalTitle: 'General', saveBtn: 'Save', uploadBtn: '📁 Upload',
    weatherNoApiKey: 'Set API key in Settings ⚙️', weatherLoading: 'Loading weather…',
    weatherError: 'Failed to load weather', weatherToday: 'Today',
    svcFieldTitle: 'TITLE',
    svcFieldPrice: 'PRICE (NUMBER)',
    svcFieldShortDesc: 'SHORT DESCRIPTION (CARD)',
    svcFieldSubtitle: 'SUBTITLE (MODAL)',
    svcFieldWhat: 'WHAT YOU GET',
    svcFieldPriceNote: 'PRICE NOTE / DURATION',
    svcFieldSteps: 'PROCESS STEPS (4 STEPS)',
    svcFieldFaq: 'FAQ (3 QUESTIONS)',
    svcHide: 'Hide',
    svcShow: 'Show',
    svcSave: '💾 Save services',
    svcCount: 'Services',
    svcDesc: 'Edit texts in all 5 languages. Switch language inside each card. Click «Save services» after changes.'
  }
};

const UI_PREFIX = {
  settingsTitle: '⚙️ ',
  integrationsTitle: '🔗 ',
  weatherTitle: '🌤 ',
  generalTitle: '⚙️ ',
};

const SITE_LANGS = ['de', 'en', 'fr', 'it', 'ru'];
const SITE_LANG_LABELS = { de: '🇩🇪 DE', en: '🇬🇧 EN', fr: '🇫🇷 FR', it: '🇮🇹 IT', ru: '🇷🇺 RU' };
const ADMIN_LANGS = ['ru', 'de', 'en'];
const ADMIN_LANG_LABELS = { ru: 'RU', de: 'DE', en: 'EN' };

const CATEGORIES = [
  { id: 'motion', label: { ru: 'Моушн-дизайн', de: 'Motion Design', en: 'Motion Design' }, icon: '🎬' },
  { id: 'graphic', label: { ru: 'Графический дизайн', de: 'Grafik Design', en: 'Graphic Design' }, icon: '🎨' },
  { id: 'web', label: { ru: 'Веб', de: 'Web', en: 'Web' }, icon: '🌐' },
];

let adminLang = localStorage.getItem('korsmotion_admin_lang') || 'ru';
let projectsData = { projects: [] };
let settingsData = { show_portfolio_section: true, show_services_section: true, show_dev_section: false, apps: [] };
let saveDirty = false;
let servicesData = { services: [] };
let serviceActiveLang = 'de'; // активный язык в редакторе услуг
let activeLangTab = {}; // per project id
let activeAppLangTab = {}; // per app index
let weatherRefreshTimer = null;

// ── Helpers ───────────────────────────────────────────────────────────────────
function u() { return adminLang ? UI[adminLang] || UI.en : UI.en; }
function uid() { return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function isSectionCollapsed(key) {
  const stored = localStorage.getItem(SECTION_COLLAPSE_KEY + key);
  if (stored !== null) return stored === '1';
  return SECTION_COLLAPSE_DEFAULTS[key] ?? true;
}
function setSectionCollapsed(key, collapsed) {
  localStorage.setItem(SECTION_COLLAPSE_KEY + key, collapsed ? '1' : '0');
}
function applySectionCollapse(section) {
  const key = section.dataset.section;
  if (!key) return;
  const collapsed = isSectionCollapsed(key);
  section.classList.toggle('collapsed', collapsed);
  const chevron = section.querySelector('.section-chevron');
  if (chevron) chevron.classList.toggle('open', !collapsed);
}
function ensureUiSettings() {
  if (!settingsData.ui) settingsData.ui = {};
  if (!settingsData.ui.collapsedCats) settingsData.ui.collapsedCats = {};
  if (!settingsData.ui.collapsedProjects) settingsData.ui.collapsedProjects = {};
  if (!settingsData.ui.collapsedApps) settingsData.ui.collapsedApps = {};
  if (!settingsData.ui.collapsedServices) settingsData.ui.collapsedServices = {};
}
function applyUiCollapseFromSettings() {
  ensureUiSettings();
  CATEGORIES.forEach(c => {
    const collapsed = settingsData.ui.collapsedCats[c.id];
    if (collapsed === true) localStorage.setItem(CAT_COLLAPSE_PREFIX + c.id, 'true');
    else if (collapsed === false) localStorage.setItem(CAT_COLLAPSE_PREFIX + c.id, 'false');
  });
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedProjects)) {
    localStorage.setItem(PROJECT_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedApps)) {
    localStorage.setItem(APP_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedServices)) {
    localStorage.setItem(SERVICE_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
}
function snapshotUiCollapseState() {
  ensureUiSettings();
  CATEGORIES.forEach(c => {
    settingsData.ui.collapsedCats[c.id] = isCatCollapsed(c.id);
  });
  settingsData.ui.collapsedProjects = {};
  (projectsData.projects || []).forEach(p => {
    settingsData.ui.collapsedProjects[p.id] = isProjectCardCollapsed(p.id);
  });
  settingsData.ui.collapsedApps = {};
  (settingsData.apps || []).forEach((a, i) => {
    const appId = a.id || `app_${i}`;
    settingsData.ui.collapsedApps[appId] = isAppCardCollapsed(appId);
  });
  settingsData.ui.collapsedServices = {};
  (servicesData.services || []).forEach((s, i) => {
    const svcId = s.id || `svc_${i}`;
    settingsData.ui.collapsedServices[svcId] = isServiceCardCollapsed(svcId);
  });
}
function isCatCollapsed(catId) {
  return localStorage.getItem(CAT_COLLAPSE_PREFIX + catId) === 'true';
}
function setCatCollapsed(catId, collapsed) {
  localStorage.setItem(CAT_COLLAPSE_PREFIX + catId, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedCats[catId] = collapsed;
  markUnsaved();
}
function isProjectCardCollapsed(id) {
  return localStorage.getItem(PROJECT_CARD_COLLAPSE_PREFIX + id) === 'true';
}
function setProjectCardCollapsed(id, collapsed) {
  localStorage.setItem(PROJECT_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedProjects[id] = collapsed;
  markUnsaved();
}
function isAppCardCollapsed(id) {
  return localStorage.getItem(APP_CARD_COLLAPSE_PREFIX + id) === 'true';
}
function setAppCardCollapsed(id, collapsed) {
  localStorage.setItem(APP_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedApps[id] = collapsed;
  markUnsaved();
}
function isServiceCardCollapsed(id) {
  const stored = localStorage.getItem(SERVICE_CARD_COLLAPSE_PREFIX + id);
  if (stored !== null) return stored === 'true';
  return true;
}
function setServiceCardCollapsed(id, collapsed) {
  localStorage.setItem(SERVICE_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedServices[id] = collapsed;
  markUnsaved();
}

function initSectionCollapse() {
  document.querySelectorAll('.section-collapsible').forEach(section => {
    applySectionCollapse(section);
    const head = section.querySelector('.section-head-toggle');
    if (!head || head.dataset.bound === '1') return;
    head.dataset.bound = '1';
    head.addEventListener('click', e => {
      if (e.target.closest('.section-head-actions')) return;
      const key = section.dataset.section;
      const collapsed = !section.classList.contains('collapsed');
      setSectionCollapsed(key, collapsed);
      applySectionCollapse(section);
    });
    head.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      head.click();
    });
  });
}

function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
function setStatus(msg, type) {
  const el = document.getElementById('saveStatus');
  if (!el) return;
  el.textContent = msg;
  el.className = 'save-status' + (type ? ' ' + type : '');
  el.style.color = '';
}

function initSaveBtn() {
  const btn = document.getElementById('saveBtn');
  if (!btn) return;
  btn.style.background = '#16A34A';
  btn.textContent = u().saveChanges;
  btn.disabled = false;
}

function markUnsaved() {
  saveDirty = true;
  const status = document.getElementById('saveStatus');
  if (!status) return;
  status.textContent = u().unsavedChanges;
  status.className = 'save-status unsaved';
}

function markSaving() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (btn) btn.disabled = true;
  if (status) {
    status.textContent = u().saving;
    status.className = 'save-status saving';
  }
}

async function markSavedSuccess() {
  saveDirty = false;
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (btn) btn.disabled = false;
  if (!status) return;
  status.textContent = u().saved;
  status.className = 'save-status success';
  await new Promise(r => setTimeout(r, 700));
  status.textContent = u().loadedServer;
  status.className = 'save-status success';
}

function markSaveError(msg) {
  const btn = document.getElementById('saveBtn');
  if (btn) btn.disabled = false;
  const status = document.getElementById('saveStatus');
  if (!status) return;
  status.textContent = msg || u().saveError;
  status.className = 'save-status error';
}

function syncSectionVisibilityToggles() {
  const map = [
    ['showPortfolioSection', settingsData.show_portfolio_section !== false],
    ['showServicesSection', settingsData.show_services_section !== false],
    ['showDevSection', !!settingsData.show_dev_section],
  ];
  map.forEach(([id, on]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = on;
    syncPremiumToggle(id);
  });
}

function initDirtyTracking() {
  const app = document.getElementById('adminApp');
  if (!app || app.dataset.dirtyBound === '1') return;
  app.dataset.dirtyBound = '1';
  app.addEventListener('input', e => {
    if (e.target.closest('#projectsList, #appsList, #servicesList')) markUnsaved();
  });
  app.addEventListener('change', e => {
    if (['showDevSection', 'showPortfolioSection', 'showServicesSection'].includes(e.target.id)) markUnsaved();
    if (e.target.closest('#appsList')) markUnsaved();
  });
}
function adminAssetUrl(path) {
  if (!path) return '';
  if (/^(https?:\/\/|\/|data:)/i.test(path)) return path;
  return '../' + path.replace(/^\.\//, '');
}
function getGithubToken() {
  return localStorage.getItem(GITHUB_TOKEN_KEY) || '';
}
function getWeatherKey() {
  return localStorage.getItem(WEATHER_KEY) || '';
}
function maskSecretKey(token) {
  return token ? token.slice(0, 8) + '...' : '';
}
function initMaskedSecretField(inputId, storageKey) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = localStorage.getItem(storageKey) || '';
  if (val) {
    input.value = maskSecretKey(val);
    input.dataset.masked = '1';
  } else {
    input.value = '';
    input.dataset.masked = '0';
  }
  delete input.dataset.focusValue;
}
function saveMaskedSecretField(inputId, storageKey, successMsg) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = input.value.trim();
  if (!val || (val.endsWith('...') && val.length <= 12)) {
    showToast(adminLang === 'de' ? 'Vollständigen Schlüssel eingeben' : adminLang === 'en' ? 'Enter full key' : 'Введите полный ключ', 'error');
    return;
  }
  localStorage.setItem(storageKey, val);
  input.value = maskSecretKey(val);
  input.dataset.masked = '1';
  delete input.dataset.focusValue;
  showToast(successMsg, 'success');
  if (storageKey === WEATHER_KEY) loadWeatherWidget();
}
function bindMaskedSecretField(inputId, getValue, storageKey) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('focus', () => {
    if (input.dataset.masked === '1') {
      const stored = getValue();
      if (stored) {
        input.value = stored;
        input.dataset.masked = '0';
        input.dataset.focusValue = stored;
      }
    } else {
      input.dataset.focusValue = input.value;
    }
  });
  input.addEventListener('blur', () => {
    const stored = getValue();
    const current = input.value.trim();
    const focusValue = input.dataset.focusValue || '';
    if (focusValue && current === focusValue && stored) {
      input.value = maskSecretKey(stored);
      input.dataset.masked = '1';
    }
    delete input.dataset.focusValue;
  });
}
function initGithubTokenField() {
  initMaskedSecretField('githubTokenInput', GITHUB_TOKEN_KEY);
}
function saveGithubToken() {
  saveMaskedSecretField('githubTokenInput', GITHUB_TOKEN_KEY, adminLang === 'de' ? 'Token gespeichert ✓' : adminLang === 'en' ? 'Token saved ✓' : 'Токен сохранён ✓');
}
function initWeatherKeyField() {
  initMaskedSecretField('weatherKeyInput', WEATHER_KEY);
}
function saveWeatherKey() {
  saveMaskedSecretField('weatherKeyInput', WEATHER_KEY, adminLang === 'de' ? 'API-Schlüssel gespeichert ✓' : adminLang === 'en' ? 'API key saved ✓' : 'API ключ сохранён ✓');
}
function weatherPreviewPlaceholder(slot) {
  return `<div class="weather-slot-placeholder">${slot.emoji}<br>${esc(slot.label)}</div>`;
}
function weatherPreviewImg(url, weatherId, label) {
  return `<img class="weather-slot-img" src="${esc(url)}" alt="${esc(label)}" data-weather-id="${esc(weatherId)}" onerror="showWeatherPlaceholder(this)">`;
}
window.showWeatherPlaceholder = function(img) {
  const slot = WEATHER_SLOTS.find(s => s.id === img.dataset.weatherId);
  if (slot) img.outerHTML = weatherPreviewPlaceholder(slot);
};
function updateWeatherPreview(weatherId, url) {
  const el = document.getElementById('weather-preview-' + weatherId);
  const slot = WEATHER_SLOTS.find(s => s.id === weatherId);
  if (!el || !slot) return;
  el.innerHTML = url ? weatherPreviewImg(url, weatherId, slot.label) : weatherPreviewPlaceholder(slot);
}
function initWeatherPreviews() {
  WEATHER_SLOTS.forEach(slot => {
    const el = document.getElementById('weather-preview-' + slot.id);
    if (!el) return;
    const localUrl = adminAssetUrl('images/weather/' + slot.id + '.png');
    el.innerHTML = weatherPreviewImg(localUrl, slot.id, slot.label);
  });
}
function renderWeatherGrid() {
  const grid = document.getElementById('weatherImagesGrid');
  if (!grid) return;
  grid.innerHTML = WEATHER_SLOTS.map(slot => `
    <div class="weather-slot" data-weather="${slot.id}">
      <div class="weather-slot-label">${esc(slot.label)}</div>
      <div class="weather-slot-preview" id="weather-preview-${slot.id}">${weatherPreviewPlaceholder(slot)}</div>
      <button type="button" class="upload-btn" onclick="uploadWeatherImage('${slot.id}')">${esc(u().uploadBtn)}</button>
    </div>`).join('');
  initWeatherPreviews();
}
function openSettingsModal() {
  initGithubTokenField();
  initWeatherKeyField();
  renderWeatherGrid();
  syncPremiumToggle('showDevSection');
  const overlay = document.getElementById('settingsModal');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeSettingsModal() {
  const overlay = document.getElementById('settingsModal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
function githubApiPath(targetPath) {
  return targetPath.split('/').map(encodeURIComponent).join('/');
}
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function pickMediaFile(onSelect, accept) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept || 'image/*';
  input.style.display = 'none';
  input.onchange = () => {
    const file = input.files && input.files[0];
    if (file) onSelect(file);
    input.remove();
  };
  document.body.appendChild(input);
  input.click();
}
async function uploadImageToGitHub(file, targetPath) {
  const githubToken = getGithubToken();
  if (!githubToken) {
    showToast(adminLang === 'de' ? 'GitHub Token in Einstellungen angeben' : adminLang === 'en' ? 'Set GitHub Token in Settings' : 'Укажи GitHub Token в настройках', 'error');
    throw new Error('No token');
  }
  showToast(adminLang === 'de' ? 'Hochladen...' : adminLang === 'en' ? 'Uploading...' : 'Загрузка...', '');
  try {
    const content = await readFileAsBase64(file);
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${githubApiPath(targetPath)}`;
    const headers = {
      'Authorization': 'token ' + githubToken,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json'
    };
    const putFile = async (sha) => {
      const body = { message: 'Upload weather image via admin', content, branch: GITHUB_BRANCH };
      if (sha) body.sha = sha;
      return fetch(apiUrl, { method: 'PUT', headers, body: JSON.stringify(body) });
    };
    let resp = await putFile();
    if (resp.status === 409) {
      const getResp = await fetch(apiUrl + `?ref=${GITHUB_BRANCH}`, { headers });
      if (!getResp.ok) throw new Error('Failed to get file SHA');
      const meta = await getResp.json();
      resp = await putFile(meta.sha);
    }
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.message || 'Upload failed');
    }
    showToast(adminLang === 'de' ? 'Hochgeladen ✓' : adminLang === 'en' ? 'Uploaded ✓' : 'Загружено ✓', 'success');
    return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${targetPath}`;
  } catch (e) {
    if (e.message !== 'No token') showToast(adminLang === 'de' ? 'Upload-Fehler' : adminLang === 'en' ? 'Upload error' : 'Ошибка загрузки', 'error');
    throw e;
  }
}
window.uploadWeatherImage = function(weatherId) {
  pickMediaFile(async (file) => {
    try {
      const path = `site-cloudflare/images/weather/${weatherId}.png`;
      const url = await uploadImageToGitHub(file, path);
      updateWeatherPreview(weatherId, url);
      loadWeatherWidget();
    } catch (_) {}
  }, WEATHER_IMAGE_ACCEPT);
};

window.uploadAppIcon = function(appIndex) {
  const app = settingsData.apps[appIndex];
  if (!app) return;
  const appId = app.id || `app_${appIndex}`;
  pickMediaFile(async (file) => {
    try {
      await uploadImageToGitHub(file, `site-cloudflare/images/apps/${appId}/icon.png`);
      app.icon = `images/apps/${appId}/icon.png`;
      renderApps();
      markUnsaved();
    } catch (_) {}
  }, 'image/*');
};

function syncPremiumToggle(inputId) {
  const input = document.getElementById(inputId);
  const track = document.getElementById(inputId + 'Track');
  if (!input || !track) return;
  track.classList.toggle('is-on', input.checked);
  track.setAttribute('aria-checked', input.checked ? 'true' : 'false');
}
function togglePremiumInput(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.checked = !input.checked;
  syncPremiumToggle(inputId);
  input.dispatchEvent(new Event('change', { bubbles: true }));
}
function initPremiumToggles() {
  document.querySelectorAll('.section-vis-toggle').forEach(wrap => {
    if (wrap.dataset.bound === '1') return;
    wrap.dataset.bound = '1';
    const input = wrap.querySelector('.premium-toggle-input');
    if (!input?.id) return;
    const inputId = input.id;
    wrap.addEventListener('click', e => {
      e.stopPropagation();
      togglePremiumInput(inputId);
    });
    wrap.addEventListener('keydown', e => {
      if (e.key !== ' ' && e.key !== 'Enter') return;
      e.preventDefault();
      e.stopPropagation();
      togglePremiumInput(inputId);
    });
    wrap.querySelector('.premium-toggle-track')?.setAttribute('tabindex', '-1');
    syncPremiumToggle(inputId);
  });
  document.querySelectorAll('.premium-toggle-track').forEach(track => {
    if (track.closest('.section-vis-toggle')) return;
    const inputId = track.dataset.for;
    const input = document.getElementById(inputId);
    if (!input) return;
    track.addEventListener('click', () => togglePremiumInput(inputId));
    track.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePremiumInput(inputId);
      }
    });
    syncPremiumToggle(inputId);
  });
}
function initPasswordToggles() {
  document.querySelectorAll('.pw-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '🙈';
        btn.setAttribute('aria-label', adminLang === 'de' ? 'Verbergen' : adminLang === 'en' ? 'Hide' : 'Скрыть');
      } else {
        input.type = 'password';
        btn.textContent = '👁';
        btn.setAttribute('aria-label', adminLang === 'de' ? 'Anzeigen' : adminLang === 'en' ? 'Show' : 'Показать');
      }
    });
  });
}
function startWeatherRefresh() {
  if (weatherRefreshTimer) clearInterval(weatherRefreshTimer);
  weatherRefreshTimer = setInterval(() => loadWeatherWidget(), WEATHER_REFRESH_MS);
}

// ── Admin language switcher ───────────────────────────────────────────────────
function setAdminLang(lang) {
  adminLang = lang;
  localStorage.setItem('korsmotion_admin_lang', lang);
  applyAdminLang();
  renderAll();
  loadWeatherWidget();
  if (document.getElementById('settingsModal')?.classList.contains('open')) {
    renderWeatherGrid();
  }
}

function applyAdminLang() {
  const t = u();
  document.querySelectorAll('[data-ui]').forEach(el => {
    const key = el.getAttribute('data-ui');
    if (t[key] !== undefined) {
      const prefix = UI_PREFIX[key] || '';
      el.textContent = prefix + t[key];
    }
  });
  document.querySelectorAll('[data-ui-title]').forEach(el => {
    const key = el.getAttribute('data-ui-title');
    if (t[key] !== undefined) el.title = t[key];
  });
  document.querySelectorAll('[data-ui-placeholder]').forEach(el => {
    const key = el.getAttribute('data-ui-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.admin-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === adminLang);
  });
  initSaveBtn();
  if (saveDirty) markUnsaved();
}

// ── Auth ──────────────────────────────────────────────────────────────────────
function isLoggedIn() { return sessionStorage.getItem(SESSION_KEY) === 'true'; }

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'block';
  document.getElementById('saveBar').style.display = 'flex';
  applyAdminLang();
  initSectionCollapse();
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
    settingsData = data.settings || { show_portfolio_section: true, show_services_section: true, show_dev_section: false, apps: [] };
    saveDirty = false;
    syncSectionVisibilityToggles();
    setStatus(u().loadedServer, 'success');
  } catch {
    try {
      const [pRes, sRes] = await Promise.all([fetch('../data/projects.json'), fetch('../data/settings.json')]);
      if (pRes.ok) projectsData = await pRes.json();
      if (sRes.ok) settingsData = await sRes.json();
      saveDirty = false;
      setStatus(u().loadedFiles, 'warning');
    } catch { setStatus('Error', 'error'); }
  }
  syncSectionVisibilityToggles();
  applyUiCollapseFromSettings();
  renderAll();
  // Загружаем услуги отдельно из /api/services
  loadServices();
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  markSaving();
  snapshotUiCollapseState();
  try {
    const res = await fetch(API_SAVE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, projects: projectsData, settings: settingsData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    if (!(await saveServices({ silent: true }))) throw new Error('services');
    await markSavedSuccess();
    showToast(u().loadedServer, 'success');
    const now = new Date();
    localStorage.setItem('korsmotion_last_saved',
      now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'}));
    renderDashboard();
  } catch (err) {
    markSaveError(u().saveError + ': ' + err.message);
    showToast(u().saveError, 'error');
  }
});

function bindSectionVisibilityToggles() {
  const pairs = [
    ['showPortfolioSection', 'show_portfolio_section'],
    ['showServicesSection', 'show_services_section'],
    ['showDevSection', 'show_dev_section'],
  ];
  pairs.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.bound === '1') return;
    el.dataset.bound = '1';
    el.addEventListener('change', e => {
      settingsData[key] = e.target.checked;
      syncPremiumToggle(id);
    });
  });
}

function renderAll() {
  renderDashboard();
  renderProjects();
  renderApps();
  renderServices();
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function pickWeatherImageId(weather, icon) {
  const id = weather?.id || 800;
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return 'sun_up';
  if (hour >= 17 && hour < 21) return 'sunset';
  if (icon && icon.endsWith('n')) return 'night';
  if (id >= 200 && id < 300) return 'thunderstorm';
  if (id >= 300 && id < 600) return 'rain';
  if (id >= 600 && id < 700) return 'snow';
  if (id >= 700 && id < 800) return 'fog';
  if (id === 800) return 'sunny';
  return 'cloudy';
}

function weatherEmojiFromId(id, icon) {
  if (id >= 200 && id < 300) return '⛈️';
  if (id >= 300 && id < 600) return '🌧️';
  if (id >= 600 && id < 700) return '❄️';
  if (id >= 700 && id < 800) return '🌫️';
  if (id === 800) return icon && icon.endsWith('n') ? '🌙' : '☀️';
  return '☁️';
}

function build5DayForecast(forecastData) {
  if (!forecastData?.list?.length) return [];
  const dayMap = new Map();
  const todayKey = new Date().toDateString();
  const locale = adminLang === 'de' ? 'de-DE' : adminLang === 'en' ? 'en-GB' : 'ru-RU';

  for (const item of forecastData.list) {
    const d = new Date(item.dt * 1000);
    const key = d.toDateString();
    if (key === todayKey) continue;
    const w = item.weather[0];
    if (!dayMap.has(key)) {
      dayMap.set(key, {
        date: d,
        min: item.main.temp_min,
        max: item.main.temp_max,
        id: w.id,
        icon: w.icon,
      });
    } else {
      const entry = dayMap.get(key);
      entry.min = Math.min(entry.min, item.main.temp_min);
      entry.max = Math.max(entry.max, item.main.temp_max);
    }
  }

  return Array.from(dayMap.values()).slice(0, 5).map(entry => ({
    day: entry.date.toLocaleDateString(locale, { weekday: 'short' }),
    dayNum: entry.date.getDate(),
    min: Math.round(entry.min),
    max: Math.round(entry.max),
    emoji: weatherEmojiFromId(entry.id, entry.icon),
  }));
}

function getWeatherBgUrl(imageId) {
  return adminAssetUrl('images/weather/' + imageId + '.png');
}

function getWeatherDateDisplay() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const weekdays = {
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  };
  const monthsRuGen = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const monthsDe = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const lang = adminLang || 'ru';
  const dayList = weekdays[lang] || weekdays.en;
  let dateStr;
  if (lang === 'ru') dateStr = `${day} ${monthsRuGen[month]}`;
  else if (lang === 'de') dateStr = `${day}. ${monthsDe[month]}`;
  else dateStr = `${day} ${monthsEn[month]}`;
  return {
    dayName: dayList[now.getDay()],
    dateStr,
  };
}

async function loadWeatherWidget() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const t = u();
  const apiKey = getWeatherKey();
  const owmLang = adminLang === 'ru' ? 'ru' : adminLang === 'de' ? 'de' : 'en';

  if (!apiKey) {
    widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherNoApiKey)}</div>`;
    return;
  }

  widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherLoading)}</div>`;

  try {
    const q = encodeURIComponent(WEATHER_CITY);
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric&lang=${owmLang}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${apiKey}&units=metric&lang=${owmLang}`),
    ]);
    if (!currentRes.ok) throw new Error('weather');
    const current = await currentRes.json();
    const forecast = forecastRes.ok ? await forecastRes.json() : null;

    const w = current.weather[0];
    const bgUrl = getWeatherBgUrl(pickWeatherImageId(w, w.icon));
    const temp = Math.round(current.main.temp);
    const humidity = current.main.humidity;
    const wind = Math.round((current.wind?.speed || 0) * 3.6);
    const forecastDays = build5DayForecast(forecast);
    const forecastHtml = forecastDays.length
      ? forecastDays.map(d => `
          <div class="weather-forecast-day">
            <span class="wf-day">${esc(d.day)}/${d.dayNum}</span>
            <span class="wf-emoji">${d.emoji}</span>
            <span class="wf-temp">${d.max}°/${d.min}°</span>
          </div>`).join('')
      : '';
    const { dayName, dateStr } = getWeatherDateDisplay();

    widget.innerHTML = `
      <div class="weather-widget-bg" style="background-image:url('${esc(bgUrl)}')"></div>
      <div class="weather-widget-overlay">
        <div class="weather-widget-header">
          <div class="weather-widget-location">📍 Bischofszell</div>
        </div>
        <div class="weather-widget-body">
          <div class="weather-widget-today">
            <div class="weather-widget-today-label">${esc(t.weatherToday)}</div>
            <div class="weather-widget-today-date">
              <span class="weather-widget-dayname">${esc(dayName)}</span>
              <span class="weather-widget-datestr">${esc(dateStr)}</span>
            </div>
          </div>
          <div class="weather-widget-temp">${temp}°</div>
          <div class="weather-widget-desc">${esc(w.description)}</div>
          <div class="weather-widget-meta"><span>💧 ${humidity}%</span><span>💨 ${wind} km/h</span></div>
        </div>
        ${forecastHtml ? `<div class="weather-widget-forecast">${forecastHtml}</div>` : ''}
      </div>`;
  } catch (_) {
    widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherError)}</div>`;
  }
}

async function renderDashboard() {
  const el = document.getElementById('dashboardSection');
  if (!el) return;

  const t = u();
  const projects = (projectsData.projects || []).length;
  const apps = (settingsData.apps || []).length;
  const lastSaved = localStorage.getItem('korsmotion_last_saved') || '—';

  el.innerHTML = `
    <div class="dash-board">
      <div class="dash-card">
        <div class="dash-icon">📁</div>
        <div class="dash-val">${projects}</div>
        <div class="dash-label">${t.dashProjects}</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">📱</div>
        <div class="dash-val">${apps}</div>
        <div class="dash-label">${t.dashApps}</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">💾</div>
        <div class="dash-val dash-val-sm">${esc(lastSaved)}</div>
        <div class="dash-label">${t.dashLastSaved}</div>
      </div>
      <div class="dash-card" id="dash-today">
        <div class="dash-icon">👁</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashViewsToday}</div>
      </div>
      <div class="dash-card" id="dash-week">
        <div class="dash-icon">📈</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashWeek}</div>
      </div>
      <div class="dash-card" id="dash-month">
        <div class="dash-icon">🗓</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashMonth}</div>
      </div>
      <div id="weather-widget"></div>
    </div>`;

  loadWeatherWidget();
  startWeatherRefresh();

  const setDashViews = (today, week, month) => {
    const map = { 'dash-today': today, 'dash-week': week, 'dash-month': month };
    Object.entries(map).forEach(([id, val]) => {
      const card = document.getElementById(id);
      if (!card) return;
      const el = card.querySelector('.dash-val');
      el.textContent = val;
      el.classList.remove('dash-loading');
    });
  };

  try {
    const resp = await fetch('/api/analytics', {
      headers: { 'X-Admin-Password': ADMIN_PASSWORD }
    });
    const data = await resp.json();
    if (!resp.ok || data.error) throw new Error(data.error || resp.status);

    const acc = data?.data?.viewer?.accounts?.[0];
    const rumViews = (group) => {
      const row = group?.[0];
      if (!row) return 0;
      const n = row.count ?? row.sum?.count ?? row.sum?.visits;
      return n != null ? n : 0;
    };
    if (!acc) throw new Error('No analytics data');

    setDashViews(
      rumViews(acc.todayViews ?? acc.today),
      rumViews(acc.week),
      rumViews(acc.total)
    );
  } catch (err) {
    const msg = err?.message || String(err);
    console.warn('Analytics:', msg);
    setDashViews('—', '—', '—');
    ['dash-today', 'dash-week', 'dash-month'].forEach(id => {
      const card = document.getElementById(id);
      if (card) {
        card.title = msg;
        card.style.cursor = 'help';
      }
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
    const isOpen = !isCatCollapsed(cat.id);
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
  const isCollapsed = isProjectCardCollapsed(p.id);

  return `
    <div class="item-card ${p.visible ? '' : 'hidden-item'}${isCollapsed ? ' collapsed' : ''}" data-id="${p.id}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${isCollapsed ? '' : 'open'}" onclick="event.stopPropagation();toggleProjectCard('${p.id}')" aria-label="Toggle">▾</button>
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
  setCatCollapsed(catId, !isCatCollapsed(catId));
  renderProjects();
};

window.toggleProjectCard = function(id) {
  setProjectCardCollapsed(id, !isProjectCardCollapsed(id));
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
  setCatCollapsed(catId, false);
  renderProjects();
  markUnsaved();
};

window.setProjectLangTab = function(id, lang) {
  activeLangTab[id] = lang;
  renderProjects();
};

window.setAppLangTab = function(idx, lang) {
  activeAppLangTab[idx] = lang;
  renderApps();
};

// ── Dev Apps ──────────────────────────────────────────────────────────────────
function renderAppScreensAdmin(a, i) {
  const screens = (a.screens || ['', '', '', '', '']).concat(['', '', '', '', '']).slice(0, 5);
  const labels = ['Скриншот 1', 'Скриншот 2', 'Скриншот 3', 'Скриншот 4', 'Скриншот 5'];
  return screens.map((s, si) => `
    <div class="form-group">
      <label class="form-label">${labels[si]}</label>
      <input class="form-input app-field" data-index="${i}" data-field="screens" data-screen="${si}"
        value="${esc(s)}" placeholder="images/apps/appname/screen${si + 1}.png">
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
    const appId = a.id || `app_${i}`;
    const collapsed = isAppCardCollapsed(appId);
    const appLang = activeAppLangTab[i] || 'en';
    const iconUrl = a.icon || '';
    const iconPreviewSrc = iconUrl ? adminAssetUrl(iconUrl) : '';
    const iconHtml = iconPreviewSrc
      ? `<img src="${esc(iconPreviewSrc)}" alt="" style="width:64px;height:64px;border-radius:14px;object-fit:cover;border:2px solid var(--border)">`
      : `<div style="width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>`;

    return `
    <div class="item-card ${a.visible ? '' : 'hidden-item'}${collapsed ? ' collapsed' : ''}" data-app-id="${esc(appId)}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${collapsed ? '' : 'open'}" onclick="toggleAppCard('${esc(appId)}')" aria-label="Toggle">▾</button>
        <span class="item-card-title">${esc(a.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm app-vis-btn" data-index="${i}">${a.visible ? t.hide : t.show}</button>
          <button class="btn btn-danger btn-sm app-del-btn" data-index="${i}">${t.delete}</button>
        </div>
      </div>
      <div class="item-card-body item-card-body--plain">
        <div style="display:flex;gap:16px;margin-top:4px;align-items:flex-start">
          <div>${iconHtml}</div>
          <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div class="form-group">
              <label class="form-label">${t.fieldTitle}</label>
              <input class="form-input app-field" data-index="${i}" data-field="title" value="${esc(a.title)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldPlatform}</label>
              <input class="form-input app-field" data-index="${i}" data-field="platform" value="${esc(a.platform)}" placeholder="Android TV">
            </div>
            <div class="form-group" style="grid-column:1/-1">
              <label class="form-label">Иконка (путь)</label>
              <div style="display:flex;gap:8px;align-items:center">
                <input class="form-input app-field" data-index="${i}" data-field="icon" value="${esc(a.icon || '')}" placeholder="images/apps/${esc(appId)}/icon.png" style="flex:1">
                <button type="button" class="btn btn-ghost btn-sm" onclick="uploadAppIcon(${i})">${t.uploadBtn}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="lang-section" style="margin-top:12px">
          <div class="lang-section-label">${t.langLabel}:</div>
          <div class="lang-tabs">
            ${SITE_LANGS.map(lang => `
              <button type="button" class="lang-tab ${appLang === lang ? 'active' : ''}"
                onclick="setAppLangTab(${i},'${lang}')">${SITE_LANG_LABELS[lang]}</button>
            `).join('')}
          </div>
          <div class="lang-fields">
            <div class="form-group">
              <textarea class="form-textarea app-field" data-index="${i}" data-field="descriptions" data-lang="${appLang}"
                placeholder="${t.fieldDesc}...">${esc((a.descriptions && a.descriptions[appLang]) || '')}</textarea>
            </div>
          </div>
        </div>

        <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
          <div class="form-label" style="margin-bottom:10px">🖼 Скриншоты (images/apps/appname/)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            ${renderAppScreensAdmin(a, i)}
          </div>
        </div>

        <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
          <div class="form-label" style="margin-bottom:10px">🏪 Магазины</div>
          <div style="display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:center">
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
              <input type="checkbox" class="app-check" data-index="${i}" data-field="showGooglePlay" ${a.showGooglePlay ? 'checked' : ''}>
              Google Play
            </label>
            <input class="form-input app-field" data-index="${i}" data-field="googlePlayUrl"
              value="${esc(a.googlePlayUrl || '')}" placeholder="https://play.google.com/store/apps/details?id=...">
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
              <input type="checkbox" class="app-check" data-index="${i}" data-field="showAppStore" ${a.showAppStore ? 'checked' : ''}>
              App Store
            </label>
            <input class="form-input app-field" data-index="${i}" data-field="appStoreUrl"
              value="${esc(a.appStoreUrl || '')}" placeholder="https://apps.apple.com/app/...">
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  container.querySelectorAll('.app-field').forEach(el => {
    el.addEventListener('input', e => {
      const idx = +e.target.dataset.index;
      const field = e.target.dataset.field;
      const screenIdx = e.target.dataset.screen;
      const lang = e.target.dataset.lang;
      if (screenIdx !== undefined) {
        if (!settingsData.apps[idx].screens) settingsData.apps[idx].screens = ['', '', '', '', ''];
        settingsData.apps[idx].screens[+screenIdx] = e.target.value;
      } else if (lang) {
        if (!settingsData.apps[idx].descriptions) settingsData.apps[idx].descriptions = {};
        settingsData.apps[idx].descriptions[lang] = e.target.value;
      } else {
        settingsData.apps[idx][field] = e.target.value;
        if (field === 'title') {
          e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        }
        if (field === 'icon') renderApps();
      }
    });
  });
  container.querySelectorAll('.app-check').forEach(el => {
    el.addEventListener('change', e => {
      const idx = +e.target.dataset.index;
      settingsData.apps[idx][e.target.dataset.field] = e.target.checked;
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
      if (confirm(u().deleteAppConfirm)) {
        settingsData.apps.splice(+btn.dataset.index, 1);
        renderApps();
        markUnsaved();
      }
    });
  });
}

window.toggleAppCard = function(id) {
  setAppCardCollapsed(id, !isAppCardCollapsed(id));
  renderApps();
};

document.getElementById('addAppBtn').addEventListener('click', () => {
  settingsData.apps.push({
    id: uid(), title: 'New App', descriptions: {}, platform: 'Android TV',
    icon: '', screens: ['', '', '', '', ''],
    showGooglePlay: false, googlePlayUrl: '',
    showAppStore: false, appStoreUrl: '',
    visible: true,
  });
  renderApps();
  markUnsaved();
});

// ── Init ──────────────────────────────────────────────────────────────────────
renderWeatherGrid();
initSaveBtn();
initPremiumToggles();
initDirtyTracking();
bindSectionVisibilityToggles();
initPasswordToggles();
bindMaskedSecretField('githubTokenInput', getGithubToken, GITHUB_TOKEN_KEY);
bindMaskedSecretField('weatherKeyInput', getWeatherKey, WEATHER_KEY);

document.querySelectorAll('.admin-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setAdminLang(btn.dataset.lang));
});

const saveGithubTokenBtn = document.getElementById('saveGithubTokenBtn');
if (saveGithubTokenBtn) saveGithubTokenBtn.addEventListener('click', saveGithubToken);
const saveWeatherKeyBtn = document.getElementById('saveWeatherKeyBtn');
if (saveWeatherKeyBtn) saveWeatherKeyBtn.addEventListener('click', saveWeatherKey);
const openSettingsModalBtn = document.getElementById('openSettingsModal');
if (openSettingsModalBtn) openSettingsModalBtn.addEventListener('click', openSettingsModal);
const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
if (closeSettingsModalBtn) closeSettingsModalBtn.addEventListener('click', closeSettingsModal);

initSectionCollapse();
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

// ── SERVICES ──────────────────────────────────────────────────────────────────
const LANGS = ['de', 'en', 'ru', 'fr', 'it'];
const LANG_LABELS = { de: 'DE', en: 'EN', ru: 'RU', fr: 'FR', it: 'IT' };

function updateServicesCount() {
  const countEl = document.getElementById('servicesCount');
  if (countEl) {
    countEl.textContent = (servicesData.services || []).filter(s => s.visible !== false).length;
  }
}

async function loadServices() {
  try {
    const res = await fetch(API_SERVICES);
    if (res.ok) {
      const data = await res.json();
      servicesData = data;
    }
  } catch (_) {}
  renderServices();
  updateServicesCount();
}

async function saveServices({ silent = false } = {}) {
  try {
    const res = await fetch(API_SERVICES, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, services: servicesData.services }),
    });
    if (!res.ok) throw new Error();
    if (!silent) {
      await markSavedSuccess();
      showToast(u().loadedServer, 'success');
    }
    return true;
  } catch {
    if (!silent) {
      markSaveError(u().saveError);
      showToast(u().saveError, 'error');
    }
    return false;
  }
}

function renderServices() {
  const container = document.getElementById('servicesList');
  if (!container) return;
  const services = servicesData.services || [];
  updateServicesCount();

  if (!services.length) {
    container.innerHTML = '<div class="empty-state">Нет услуг</div>';
    return;
  }

  container.innerHTML = services.map((svc, i) => renderServiceCard(svc, i)).join('');
  attachServiceEvents(container);
}

function lv(obj, lang) {
  if (!obj) return '';
  return obj[lang] || obj['en'] || obj['de'] || Object.values(obj)[0] || '';
}

function serviceCardId(svc, i) {
  return svc.id || `svc_${i}`;
}

function renderServiceCard(svc, i) {
  const t = u();
  const lang = serviceActiveLang;
  const svcId = serviceCardId(svc, i);
  const isCollapsed = isServiceCardCollapsed(svcId);
  const langTabs = LANGS.map(l => `
    <button class="lang-tab ${l === lang ? 'active' : ''}" data-svc-lang="${l}" data-svc-index="${i}">${LANG_LABELS[l]}</button>
  `).join('');

  const steps = (svc.steps || []).map((step, si) => `
    <div class="step-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;align-items:start">
      <input class="form-input svc-step-title" data-svc-index="${i}" data-step="${si}" data-lang="${lang}"
        value="${esc(lv(step.title, lang))}" placeholder="Шаг ${si+1} заголовок">
      <input class="form-input svc-step-desc" data-svc-index="${i}" data-step="${si}" data-lang="${lang}"
        value="${esc(lv(step.desc, lang))}" placeholder="Описание">
    </div>
  `).join('');

  const faqs = (svc.faq || []).map((faq, fi) => `
    <div class="faq-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
      <input class="form-input svc-faq-q" data-svc-index="${i}" data-faq="${fi}" data-lang="${lang}"
        value="${esc(lv(faq.q, lang))}" placeholder="Вопрос">
      <input class="form-input svc-faq-a" data-svc-index="${i}" data-faq="${fi}" data-lang="${lang}"
        value="${esc(lv(faq.a, lang))}" placeholder="Ответ">
    </div>
  `).join('');

  return `
    <div class="item-card ${svc.visible !== false ? '' : 'hidden-item'}${isCollapsed ? ' collapsed' : ''}" data-svc-index="${i}" data-svc-id="${esc(svcId)}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${isCollapsed ? '' : 'open'}" onclick="event.stopPropagation();toggleServiceCard('${esc(svcId)}')" aria-label="Toggle">▾</button>
        <span class="item-card-title">${esc(lv(svc.title, lang) || svc.id)}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm svc-vis-btn" data-svc-index="${i}">${svc.visible !== false ? t.svcHide : t.svcShow}</button>
        </div>
      </div>

      <div class="item-card-body item-card-body--plain">
      <div class="lang-tabs" style="margin:0 0 16px">${langTabs}</div>

      <div class="item-fields">
        <div class="form-group">
          <label class="form-label">${t.svcFieldTitle}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="title" data-lang="${lang}"
            value="${esc(lv(svc.title, lang))}">
        </div>
        <div class="form-group">
          <label class="form-label">${t.svcFieldPrice}</label>
          <input class="form-input svc-price" data-svc-index="${i}" type="number"
            value="${svc.price || ''}" placeholder="500">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldShortDesc}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="shortDesc" data-lang="${lang}"
            value="${esc(lv(svc.shortDesc, lang))}">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldSubtitle}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="subtitle" data-lang="${lang}"
            value="${esc(lv(svc.subtitle, lang))}">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldWhat}</label>
          <textarea class="form-textarea svc-field" data-svc-index="${i}" data-field="whatText" data-lang="${lang}">${esc(lv(svc.whatText, lang))}</textarea>
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldPriceNote}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="priceNote" data-lang="${lang}"
            value="${esc(lv(svc.priceNote, lang))}">
        </div>

        <div class="form-group full">
          <label class="form-label" style="margin-bottom:8px">${t.svcFieldSteps}</label>
          ${steps}
        </div>

        <div class="form-group full">
          <label class="form-label" style="margin-bottom:8px">${t.svcFieldFaq}</label>
          ${faqs}
        </div>
      </div>
      </div>
    </div>
  `;
}

window.toggleServiceCard = function(id) {
  setServiceCardCollapsed(id, !isServiceCardCollapsed(id));
  renderServices();
};

function attachServiceEvents(container) {
  // Переключение языка в карточке
  container.querySelectorAll('[data-svc-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      serviceActiveLang = btn.dataset.svcLang;
      renderServices();
    });
  });

  // Видимость
  container.querySelectorAll('.svc-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.svcIndex;
      const on = servicesData.services[i].visible !== false;
      servicesData.services[i].visible = !on;
      renderServices();
      markUnsaved();
    });
  });

  // Цена
  container.querySelectorAll('.svc-price').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      servicesData.services[i].price = +e.target.value || 0;
    });
  });

  // Текстовые поля (title, shortDesc, subtitle, whatText, priceNote)
  container.querySelectorAll('.svc-field').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const field = e.target.dataset.field;
      const lang = e.target.dataset.lang;
      if (!servicesData.services[i][field]) servicesData.services[i][field] = {};
      servicesData.services[i][field][lang] = e.target.value;
      if (field === 'title') {
        e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value;
      }
    });
  });

  // Шаги
  container.querySelectorAll('.svc-step-title, .svc-step-desc').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const si = +e.target.dataset.step;
      const lang = e.target.dataset.lang;
      const field = e.target.classList.contains('svc-step-title') ? 'title' : 'desc';
      if (!servicesData.services[i].steps[si][field]) servicesData.services[i].steps[si][field] = {};
      servicesData.services[i].steps[si][field][lang] = e.target.value;
    });
  });

  // FAQ
  container.querySelectorAll('.svc-faq-q, .svc-faq-a').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const fi = +e.target.dataset.faq;
      const lang = e.target.dataset.lang;
      const field = e.target.classList.contains('svc-faq-q') ? 'q' : 'a';
      if (!servicesData.services[i].faq[fi][field]) servicesData.services[i].faq[fi][field] = {};
      servicesData.services[i].faq[fi][field][lang] = e.target.value;
    });
  });
}

// Кнопка "Сохранить услуги"
document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveSvcBtn');
  if (saveBtn) saveBtn.addEventListener('click', async () => {
    markSaving();
    snapshotUiCollapseState();
    await saveServices();
  });
});
