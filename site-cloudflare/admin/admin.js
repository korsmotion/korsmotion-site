const ADMIN_PASSWORD = 'korsmotion2026';
const SESSION_KEY = 'korsmotion_admin_session';
const STORAGE_PROJECTS = 'korsmotion_projects';
const STORAGE_SETTINGS = 'korsmotion_settings';

let projectsData = { projects: [] };
let settingsData = { show_dev_section: true, apps: [] };

const loginScreen = document.getElementById('loginScreen');
const adminApp = document.getElementById('adminApp');
const saveBar = document.getElementById('saveBar');
const projectsList = document.getElementById('projectsList');
const appsList = document.getElementById('appsList');

function uid() {
  return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function isLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === 'true';
}

function showAdmin() {
  loginScreen.style.display = 'none';
  adminApp.style.display = 'block';
  saveBar.style.display = 'flex';
  loadData();
}

function showLogin() {
  loginScreen.style.display = 'flex';
  adminApp.style.display = 'none';
  saveBar.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
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

async function loadData() {
  const storedProjects = localStorage.getItem(STORAGE_PROJECTS);
  const storedSettings = localStorage.getItem(STORAGE_SETTINGS);

  if (storedProjects && storedSettings) {
    try {
      projectsData = JSON.parse(storedProjects);
      settingsData = JSON.parse(storedSettings);
    } catch (_) { /* fall through to fetch */ }
  }

  if (!storedProjects || !storedSettings) {
    try {
      const [pRes, sRes] = await Promise.all([
        fetch('../data/projects.json'),
        fetch('../data/settings.json')
      ]);
      if (pRes.ok) projectsData = await pRes.json();
      if (sRes.ok) settingsData = await sRes.json();
    } catch (_) {
      showToast('Could not load data files', 'error');
    }
  }

  document.getElementById('showDevSection').checked = !!settingsData.show_dev_section;
  renderProjects();
  renderApps();
}

document.getElementById('showDevSection').addEventListener('change', (e) => {
  settingsData.show_dev_section = e.target.checked;
});

function renderProjects() {
  const items = projectsData.projects || [];
  document.getElementById('projectsCount').textContent = items.length + ' project' + (items.length !== 1 ? 's' : '');

  if (!items.length) {
    projectsList.innerHTML = '<div class="empty-state">No projects yet. Click + Add to create one.</div>';
    return;
  }

  projectsList.innerHTML = items.map((p, i) => `
    <div class="item-card${p.visible ? '' : ' hidden-item'}" data-index="${i}">
      <div class="item-card-head">
        <span class="item-card-title">${esc(p.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm toggle-vis-btn" data-index="${i}" title="Toggle visibility">
            ${p.visible ? 'Hide' : 'Show'}
          </button>
          <button class="btn btn-danger btn-sm delete-project-btn" data-index="${i}">Delete</button>
        </div>
      </div>
      <div class="item-fields">
        <div class="form-group">
          <label class="form-label">Title</label>
          <input type="text" class="form-input project-field" data-index="${i}" data-field="title" value="${esc(p.title)}">
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <input type="text" class="form-input project-field" data-index="${i}" data-field="category" value="${esc(p.category)}">
        </div>
        <div class="form-group full">
          <label class="form-label">Thumbnail URL</label>
          <input type="text" class="form-input project-field" data-index="${i}" data-field="thumbnail" value="${esc(p.thumbnail)}" placeholder="logo.png or https://...">
        </div>
        <div class="form-group full">
          <label class="form-label">Video URL</label>
          <input type="text" class="form-input project-field" data-index="${i}" data-field="videoUrl" value="${esc(p.videoUrl)}" placeholder="https://youtube.com/...">
        </div>
      </div>
    </div>
  `).join('');

  projectsList.querySelectorAll('.project-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = +e.target.dataset.index;
      const field = e.target.dataset.field;
      projectsData.projects[idx][field] = e.target.value;
      if (field === 'title') {
        const card = e.target.closest('.item-card');
        card.querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
      }
    });
  });

  projectsList.querySelectorAll('.toggle-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.index;
      projectsData.projects[idx].visible = !projectsData.projects[idx].visible;
      renderProjects();
    });
  });

  projectsList.querySelectorAll('.delete-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.index;
      if (confirm('Delete this project?')) {
        projectsData.projects.splice(idx, 1);
        renderProjects();
      }
    });
  });
}

function renderApps() {
  const items = settingsData.apps || [];
  document.getElementById('appsCount').textContent = items.length + ' app' + (items.length !== 1 ? 's' : '');

  if (!items.length) {
    appsList.innerHTML = '<div class="empty-state">No apps yet. Click + Add to create one.</div>';
    return;
  }

  appsList.innerHTML = items.map((a, i) => `
    <div class="item-card${a.visible ? '' : ' hidden-item'}" data-index="${i}">
      <div class="item-card-head">
        <span class="item-card-title">${esc(a.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm toggle-app-vis-btn" data-index="${i}">
            ${a.visible ? 'Hide' : 'Show'}
          </button>
          <button class="btn btn-danger btn-sm delete-app-btn" data-index="${i}">Delete</button>
        </div>
      </div>
      <div class="item-fields">
        <div class="form-group">
          <label class="form-label">Title</label>
          <input type="text" class="form-input app-field" data-index="${i}" data-field="title" value="${esc(a.title)}">
        </div>
        <div class="form-group">
          <label class="form-label">Platform</label>
          <input type="text" class="form-input app-field" data-index="${i}" data-field="platform" value="${esc(a.platform)}" placeholder="Android TV">
        </div>
        <div class="form-group full">
          <label class="form-label">Description</label>
          <textarea class="form-textarea app-field" data-index="${i}" data-field="description">${esc(a.description)}</textarea>
        </div>
        <div class="form-group full">
          <label class="form-label">Link</label>
          <input type="text" class="form-input app-field" data-index="${i}" data-field="link" value="${esc(a.link)}" placeholder="https://...">
        </div>
      </div>
    </div>
  `).join('');

  appsList.querySelectorAll('.app-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = +e.target.dataset.index;
      const field = e.target.dataset.field;
      settingsData.apps[idx][field] = e.target.value;
      if (field === 'title') {
        const card = e.target.closest('.item-card');
        card.querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
      }
    });
  });

  appsList.querySelectorAll('.toggle-app-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.index;
      settingsData.apps[idx].visible = !settingsData.apps[idx].visible;
      renderApps();
    });
  });

  appsList.querySelectorAll('.delete-app-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.index;
      if (confirm('Delete this app?')) {
        settingsData.apps.splice(idx, 1);
        renderApps();
      }
    });
  });
}

document.getElementById('addProjectBtn').addEventListener('click', () => {
  const layouts = ['large', 'small', 'third'];
  const gradients = ['pv-1', 'pv-2', 'pv-3', 'pv-4', 'pv-5'];
  const count = projectsData.projects.length;
  projectsData.projects.push({
    id: uid(),
    title: 'New Project',
    category: 'Motion',
    thumbnail: '',
    videoUrl: '',
    visible: true,
    layout: layouts[count % layouts.length],
    gradient: gradients[count % gradients.length],
    client: '',
    year: new Date().getFullYear().toString(),
    duration: '',
    description: ''
  });
  renderProjects();
});

document.getElementById('addAppBtn').addEventListener('click', () => {
  settingsData.apps.push({
    id: uid(),
    title: 'New App',
    description: '',
    platform: 'Android TV',
    link: '',
    visible: true
  });
  renderApps();
});

function downloadJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  const status = document.getElementById('saveStatus');
  status.textContent = 'Saving...';
  status.className = 'save-status';

  localStorage.setItem(STORAGE_PROJECTS, JSON.stringify(projectsData));
  localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settingsData));

  downloadJSON('projects.json', projectsData);
  downloadJSON('settings.json', settingsData);

  try {
    const res = await fetch('./save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projects: projectsData, settings: settingsData })
    });
    if (res.ok) {
      status.textContent = 'Saved to server';
      status.className = 'save-status success';
      showToast('Changes saved to server', 'success');
      return;
    }
  } catch (_) { /* static hosting — no server endpoint */ }

  status.textContent = 'Saved locally + files downloaded';
  status.className = 'save-status success';
  showToast('Saved! Replace files in /data/ folder with downloads.', 'success');
});

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

if (isLoggedIn()) {
  showAdmin();
} else {
  showLogin();
}
