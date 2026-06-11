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
    catLabel: 'Категория контента',
    dashboardTitle: 'Дашборд', dashProjects: 'Проектов', dashApps: 'Приложений',
    dashLastSaved: 'Последнее сохранение', dashViewsToday: 'Просмотров сегодня',
    dashWeek: 'За 7 дней', dashMonth: 'За 30 дней'
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
    catLabel: 'Inhaltskategorie',
    dashboardTitle: 'Dashboard', dashProjects: 'Projekte', dashApps: 'Apps',
    dashLastSaved: 'Letzte Speicherung', dashViewsToday: 'Aufrufe heute',
    dashWeek: '7 Tage', dashMonth: '30 Tage'
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
    catLabel: 'Content category',
    dashboardTitle: 'Dashboard', dashProjects: 'Projects', dashApps: 'Apps',
    dashLastSaved: 'Last saved', dashViewsToday: 'Views today',
    dashWeek: '7 days', dashMonth: '30 days'
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
function getGithubToken() {
  return localStorage.getItem(GITHUB_TOKEN_KEY) || '';
}
function maskSecretKey(token) {
  return token ? token.slice(0, 8) + '...' : '';
}
function maskGithubToken(token) { return maskSecretKey(token); }
function getWeatherKey() {
  return localStorage.getItem(WEATHER_KEY) || '';
}
function initWeatherKeyField() {
  initMaskedSecretField('weatherKeyInput', WEATHER_KEY);
}
function saveWeatherKey() {
  saveMaskedSecretField('weatherKeyInput', WEATHER_KEY, 'API ключ сохранён ✓');
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
    showToast('Введите полный ключ', 'error');
    return;
  }
  localStorage.setItem(storageKey, val);
  input.value = maskSecretKey(val);
  input.dataset.masked = '1';
  delete input.dataset.focusValue;
  showToast(successMsg, 'success');
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
  saveMaskedSecretField('githubTokenInput', GITHUB_TOKEN_KEY, 'Токен сохранён ✓');
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
      <button type="button" class="upload-btn" onclick="uploadWeatherImage('${slot.id}')">📁 Загрузить</button>
    </div>`).join('');
  initWeatherPreviews();
}
function openSettingsModal() {
  initGithubTokenField();
  initWeatherKeyField();
  initWeatherPreviews();
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
function sanitizeAppFolder(title) {
  return (title || 'app').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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
const MEDIA_FILE_ACCEPT = 'image/*,video/mp4,.gif';
function isVideoMp4(file) {
  return file.type === 'video/mp4' || /\.mp4$/i.test(file.name);
}
function pickMediaFile(onSelect, accept) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept || MEDIA_FILE_ACCEPT;
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
    showToast('Сначала укажи GitHub Token в настройках', 'error');
    throw new Error('No token');
  }
  showToast('Загрузка...', '');
  try {
    const content = await readFileAsBase64(file);
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${githubApiPath(targetPath)}`;
    const headers = {
      'Authorization': 'token ' + githubToken,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json'
    };
    const putFile = async (sha) => {
      const body = { message: 'Upload image via admin', content, branch: GITHUB_BRANCH };
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
    showToast('Загружено ✓', 'success');
    return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${targetPath}`;
  } catch (e) {
    if (e.message !== 'No token') showToast('Ошибка загрузки', 'error');
    throw e;
  }
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
  initGithubTokenField();
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
  syncPremiumToggle('showDevSection');
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
const WEATHER_CITY = 'Bischofszell,CH';

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
  const days = [];
  const seen = new Set();
  for (const item of forecastData.list) {
    const d = new Date(item.dt * 1000);
    const key = d.toDateString();
    if (seen.has(key)) continue;
    seen.add(key);
    const w = item.weather[0];
    days.push({
      day: d.toLocaleDateString('ru-RU', { weekday: 'short' }),
      temp: Math.round(item.main.temp),
      emoji: weatherEmojiFromId(w.id, w.icon),
    });
    if (days.length >= 5) break;
  }
  return days;
}

function getWeatherBgUrl(imageId) {
  return adminAssetUrl('images/weather/' + imageId + '.png');
}

async function loadWeatherWidget() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const apiKey = getWeatherKey();
  if (!apiKey) {
    widget.innerHTML = '<div class="weather-widget-placeholder">⚙️ API ключ не указан</div>';
    return;
  }

  widget.innerHTML = '<div class="weather-widget-placeholder">Загрузка погоды…</div>';

  try {
    const q = encodeURIComponent(WEATHER_CITY);
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric&lang=ru`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${apiKey}&units=metric&lang=ru`),
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
            <div>${esc(d.day)}</div>
            <span class="wf-emoji">${d.emoji}</span>
            <div class="wf-temp">${d.temp}°</div>
          </div>`).join('')
      : '';

    widget.innerHTML = `
      <div class="weather-widget-bg" style="background-image:url('${esc(bgUrl)}')"></div>
      <div class="weather-widget-overlay">
        <div class="weather-widget-location">📍 Bischofszell</div>
        <div class="weather-widget-temp">${temp}°</div>
        <div class="weather-widget-desc">${esc(w.description)}</div>
        <div class="weather-widget-meta">💧 ${humidity}% · 💨 ${wind} km/h</div>
        ${forecastHtml ? `<div class="weather-widget-forecast">${forecastHtml}</div>` : ''}
      </div>`;
  } catch (_) {
    widget.innerHTML = '<div class="weather-widget-placeholder">Не удалось загрузить погоду</div>';
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
    <h2 class="section-title">${t.dashboardTitle}</h2>
    <div class="dash-layout">
      <div class="dash-grid">
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
      </div>
      <div id="weather-widget"></div>
    </div>`;

  loadWeatherWidget();

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
  } catch (e) {
    ['dash-today', 'dash-week', 'dash-month'].forEach(id => {
      const card = document.getElementById(id);
      if (card) {
        const val = card.querySelector('.dash-val');
        if (val) {
          val.textContent = '—';
          val.classList.remove('dash-loading');
        }
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
        if (field === 'videoUrl') updateVideoPreview(id, e.target.value);
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
              <div class="input-with-upload">
                <input class="form-input proj-field" data-id="${p.id}" data-field="thumbnail" value="${esc(p.thumbnail)}" placeholder="https://...">
                <button type="button" class="upload-btn" onclick="uploadProjectThumb('${p.id}')">📁 Загрузить</button>
              </div>
            </div>
            <div class="form-group full">
              <label class="form-label">${t.fieldVideo}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="videoUrl" value="${esc(p.videoUrl)}" placeholder="https://youtube.com/watch?v=...">
              ${buildVideoPreviewHtml(p.id, p.videoUrl)}
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

function isRawGithubMp4(url) {
  return !!url && url.startsWith('https://raw.githubusercontent.com') && /\.mp4$/i.test(url);
}

function buildVideoPreviewHtml(id, url) {
  if (!url) return '';
  const ytId = getYouTubeIdAdmin(url);
  if (ytId) {
    return `
      <div class="video-thumb-wrap" id="vthumb-${id}">
        <img class="video-thumb-img" src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" alt="">
        <button class="video-play-btn" onclick="toggleVideoPreview('${id}','${esc(url)}')">▶ Play</button>
      </div>`;
  }
  if (isRawGithubMp4(url)) {
    return `
      <div class="video-thumb-wrap" id="vthumb-${id}">
        <video src="${esc(url)}" style="width:100%;border-radius:8px;max-height:180px;object-fit:cover" controls muted preload="metadata"></video>
      </div>`;
  }
  return '';
}

function updateVideoPreview(id, url) {
  const input = document.querySelector(`.proj-field[data-id="${id}"][data-field="videoUrl"]`);
  if (!input) return;
  const html = buildVideoPreviewHtml(id, url);
  const wrap = document.getElementById('vthumb-' + id);
  if (!html) {
    if (wrap) wrap.remove();
    return;
  }
  if (wrap) {
    wrap.outerHTML = html;
  } else {
    input.insertAdjacentHTML('afterend', html);
  }
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
      <div class="input-with-upload">
        <input class="form-input app-field" data-index="${i}" data-field="screens" data-screen="${si}"
          value="${esc(s)}" placeholder="images/apps/appname/screen${si+1}.png">
        <button type="button" class="upload-btn" onclick="uploadAppScreen(${i}, ${si})" title="Загрузить">📁</button>
      </div>
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
            <div class="input-with-upload">
              <input class="form-input app-field" data-index="${i}" data-field="icon" value="${esc(a.icon||'')}" placeholder="images/apps/appname/icon.png">
              <button type="button" class="upload-btn" onclick="uploadAppIcon(${i})">📁 Загрузить</button>
            </div>
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

// ── GitHub image upload handlers ──────────────────────────────────────────────
window.uploadProjectThumb = function(projectId) {
  pickMediaFile(async (file) => {
    try {
      const isVideo = isVideoMp4(file);
      const path = isVideo
        ? `site-cloudflare/images/portfolio/${projectId}_preview.mp4`
        : `site-cloudflare/images/portfolio/${projectId}_${file.name}`;
      const url = await uploadImageToGitHub(file, path);
      const field = isVideo ? 'videoUrl' : 'thumbnail';
      const inp = document.querySelector(`.proj-field[data-id="${projectId}"][data-field="${field}"]`);
      if (inp) {
        inp.value = url;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } catch (_) {}
  });
};

window.uploadAppIcon = function(appIndex) {
  const app = settingsData.apps[appIndex];
  const folder = sanitizeAppFolder(app && app.title);
  pickMediaFile(async (file) => {
    try {
      const path = `site-cloudflare/images/apps/${folder}/icon.png`;
      const url = await uploadImageToGitHub(file, path);
      const inp = document.querySelector(`.app-field[data-index="${appIndex}"][data-field="icon"]`);
      if (inp) {
        inp.value = url;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } catch (_) {}
  });
};

window.uploadWeatherImage = function(weatherId) {
  pickMediaFile(async (file) => {
    try {
      const path = `site-cloudflare/images/weather/${weatherId}.png`;
      const url = await uploadImageToGitHub(file, path);
      updateWeatherPreview(weatherId, url);
    } catch (_) {}
  }, WEATHER_IMAGE_ACCEPT);
};

window.uploadAppScreen = function(appIndex, screenIndex) {
  const app = settingsData.apps[appIndex];
  const folder = sanitizeAppFolder(app && app.title);
  pickMediaFile(async (file) => {
    try {
      const path = `site-cloudflare/images/apps/${folder}/screen${screenIndex + 1}.png`;
      const url = await uploadImageToGitHub(file, path);
      const inp = document.querySelector(`.app-field[data-index="${appIndex}"][data-field="screens"][data-screen="${screenIndex}"]`);
      if (inp) {
        inp.value = url;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } catch (_) {}
  });
};

function syncPremiumToggle(inputId) {
  const input = document.getElementById(inputId);
  const track = document.getElementById(inputId + 'Track');
  if (!input || !track) return;
  track.classList.toggle('is-on', input.checked);
  track.setAttribute('aria-checked', input.checked ? 'true' : 'false');
}

function initPremiumToggles() {
  document.querySelectorAll('.premium-toggle-track').forEach(track => {
    const inputId = track.dataset.for;
    const input = document.getElementById(inputId);
    if (!input) return;
    track.addEventListener('click', () => {
      input.checked = !input.checked;
      syncPremiumToggle(inputId);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    track.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        input.checked = !input.checked;
        syncPremiumToggle(inputId);
        input.dispatchEvent(new Event('change', { bubbles: true }));
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
        btn.setAttribute('aria-label', 'Скрыть');
      } else {
        input.type = 'password';
        btn.textContent = '👁';
        btn.setAttribute('aria-label', 'Показать');
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderWeatherGrid();
initPremiumToggles();
initPasswordToggles();
bindMaskedSecretField('githubTokenInput', getGithubToken, GITHUB_TOKEN_KEY);
bindMaskedSecretField('weatherKeyInput', getWeatherKey, WEATHER_KEY);

// Admin lang switcher buttons
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
