const ADMIN_PASSWORD = 'korsmotion2026';
const SESSION_KEY = 'korsmotion_admin_session';

const API_DATA = '/api/data';
const API_SAVE = '/api/save';

let projectsData = { projects: [] };
let settingsData = { show_dev_section: false, apps: [] };

const loginScreen = document.getElementById('loginScreen');
const adminApp = document.getElementById('adminApp');
const saveBar = document.getElementById('saveBar');
const projectsList = document.getElementById('projectsList');
const appsList = document.getElementById('appsList');

// ── Auth ──────────────────────────────────────────────────────────────────────

function uid() {
  return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
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

// ── Data loading ──────────────────────────────────────────────────────────────

async function loadData() {
  setStatus('Loading...', '');
  try {
    const res = await fetch(API_DATA);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    projectsData = data.projects || { projects: [] };
    settingsData = data.settings || { show_dev_section: false, apps: [] };
    setStatus('Loaded from server ✓', 'success');
  } catch (err) {
    // Fallback: try static JSON files
    try {
      const [pRes, sRes] = await Promise.all([
        fetch('../data/projects.json'),
        fetch('../data/settings.json'),
      ]);
      if (pRes.ok) projectsData = await pRes.json();
      if (sRes.ok) settingsData = await sRes.json();
      setStatus('Loaded from files (KV not available)', 'warning');
    } catch {
      setStatus('Could not load data', 'error');
    }
  }
  document.getElementById('showDevSection').checked = !!settingsData.show_dev_section;
  renderProjects();
  renderApps();
}

// ── Save ──────────────────────────────────────────────────────────────────────

document.getElementById('saveBtn').addEventListener('click', async () => {
  setStatus('Saving...', '');
  try {
    const res = await fetch(API_SAVE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: ADMIN_PASSWORD,
        projects: projectsData,
        settings: settingsData,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Server error');
    }
    setStatus('Saved to server ✓', 'success');
    showToast('Changes saved!', 'success');
  } catch (err) {
    setStatus('Save failed: ' + err.message, 'error');
    showToast('Error: ' + err.message, 'error');
  }
});

function setStatus(msg, type) {
  const el = document.getElementById('saveStatus');
  el.textContent = msg;
  el.className = 'save-status' + (type ? ' ' + type : '');
}

// ── Dev section toggle ────────────────────────────────────────────────────────

document.getElementById('showDevSection').addEventListener('change', (e) => {
  settingsData.show_dev_section = e.target.checked;
});

// ── Portfolio categories ──────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'motion', label: 'Motion Design', icon: '🎬' },
  { id: 'graphic', label: 'Graphic Design', icon: '🎨' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'app', label: 'App Dev', icon: '📱' },
];

// Which category tabs are expanded
const expandedCats = new Set(CATEGORIES.map(c => c.id));

function projectsByCategory(catId) {
  return (projectsData.projects || []).filter(p => (p.categoryId || 'motion') === catId);
}

function renderProjects() {
  const allProjects = projectsData.projects || [];
  document.getElementById('projectsCount').textContent =
    allProjects.length + ' project' + (allProjects.length !== 1 ? 's' : '');

  projectsList.innerHTML = CATEGORIES.map(cat => {
    const items = projectsByCategory(cat.id);
    const isOpen = expandedCats.has(cat.id);
    return `
      <div class="cat-section" data-cat="${cat.id}">
        <div class="cat-header" onclick="toggleCat('${cat.id}')">
          <div class="cat-header-left">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-label">${cat.label}</span>
            <span class="cat-count">${items.length}</span>
          </div>
          <div class="cat-header-right">
            <button class="btn btn-primary btn-sm add-cat-btn" data-cat="${cat.id}" onclick="event.stopPropagation(); addProject('${cat.id}')">+ Add</button>
            <span class="cat-chevron ${isOpen ? 'open' : ''}">▾</span>
          </div>
        </div>
        <div class="cat-body ${isOpen ? 'open' : ''}">
          ${items.length === 0
            ? `<div class="empty-state">No projects in ${cat.label} yet.</div>`
            : items.map(p => renderProjectCard(p)).join('')
          }
        </div>
      </div>
    `;
  }).join('');

  // Bind events
  projectsList.querySelectorAll('.project-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = e.target.dataset.id;
      const field = e.target.dataset.field;
      const project = projectsData.projects.find(p => p.id === id);
      if (project) {
        project[field] = e.target.value;
        if (field === 'title') {
          const card = e.target.closest('.item-card');
          if (card) card.querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        }
        if (field === 'thumbnail') {
          updateThumbPreview(id, e.target.value);
        }
      }
    });
  });

  projectsList.querySelectorAll('.toggle-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const project = projectsData.projects.find(p => p.id === id);
      if (project) {
        project.visible = !project.visible;
        renderProjects();
      }
    });
  });

  projectsList.querySelectorAll('.delete-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (confirm('Delete this project?')) {
        projectsData.projects = projectsData.projects.filter(p => p.id !== id);
        renderProjects();
      }
    });
  });
}

function renderProjectCard(p) {
  const thumbHtml = p.thumbnail
    ? `<img class="thumb-preview" id="thumb-${p.id}" src="${esc(p.thumbnail)}" alt="" onerror="this.style.display='none'">`
    : `<div class="thumb-placeholder" id="thumb-${p.id}">No image</div>`;

  return `
    <div class="item-card${p.visible ? '' : ' hidden-item'}" data-id="${p.id}">
      <div class="item-card-head">
        <span class="item-card-title">${esc(p.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm toggle-vis-btn" data-id="${p.id}">
            ${p.visible ? 'Hide' : 'Show'}
          </button>
          <button class="btn btn-danger btn-sm delete-project-btn" data-id="${p.id}">Delete</button>
        </div>
      </div>
      <div class="item-card-body">
        <div class="thumb-col">
          ${thumbHtml}
        </div>
        <div class="fields-col">
          <div class="item-fields">
            <div class="form-group">
              <label class="form-label">Title</label>
              <input type="text" class="form-input project-field" data-id="${p.id}" data-field="title" value="${esc(p.title)}">
            </div>
            <div class="form-group">
              <label class="form-label">Category label</label>
              <input type="text" class="form-input project-field" data-id="${p.id}" data-field="category" value="${esc(p.category)}" placeholder="Logo Animation">
            </div>
            <div class="form-group full">
              <label class="form-label">Thumbnail URL</label>
              <input type="text" class="form-input project-field" data-id="${p.id}" data-field="thumbnail" value="${esc(p.thumbnail)}" placeholder="https://... or logo.png">
            </div>
            <div class="form-group full">
              <label class="form-label">Video URL (YouTube / MP4)</label>
              <input type="text" class="form-input project-field" data-id="${p.id}" data-field="videoUrl" value="${esc(p.videoUrl)}" placeholder="https://youtube.com/watch?v=...">
            </div>
            <div class="form-group full">
              <label class="form-label">Description</label>
              <textarea class="form-textarea project-field" data-id="${p.id}" data-field="description">${esc(p.description)}</textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateThumbPreview(id, url) {
  const el = document.getElementById('thumb-' + id);
  if (!el) return;
  if (url) {
    el.outerHTML = `<img class="thumb-preview" id="thumb-${id}" src="${esc(url)}" alt="" onerror="this.style.display='none'">`;
  } else {
    el.outerHTML = `<div class="thumb-placeholder" id="thumb-${id}">No image</div>`;
  }
}

window.toggleCat = function(catId) {
  if (expandedCats.has(catId)) {
    expandedCats.delete(catId);
  } else {
    expandedCats.add(catId);
  }
  renderProjects();
};

window.addProject = function(catId) {
  const gradients = ['pv-1', 'pv-2', 'pv-3', 'pv-4', 'pv-5'];
  const count = projectsData.projects.length;
  projectsData.projects.push({
    id: uid(),
    title: 'New Project',
    category: CATEGORIES.find(c => c.id === catId)?.label || 'Motion Design',
    categoryId: catId,
    thumbnail: '',
    videoUrl: '',
    visible: true,
    layout: count % 3 === 0 ? 'large' : count % 3 === 1 ? 'small' : 'third',
    gradient: gradients[count % gradients.length],
    client: '',
    year: new Date().getFullYear().toString(),
    duration: '',
    description: '',
  });
  expandedCats.add(catId);
  renderProjects();
};

// ── Apps ──────────────────────────────────────────────────────────────────────

function renderApps() {
  const items = settingsData.apps || [];
  document.getElementById('appsCount').textContent =
    items.length + ' app' + (items.length !== 1 ? 's' : '');

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
      <div class="item-fields" style="margin-top:14px">
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
        e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
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

document.getElementById('addAppBtn').addEventListener('click', () => {
  settingsData.apps.push({
    id: uid(),
    title: 'New App',
    description: '',
    platform: 'Android TV',
    link: '',
    visible: true,
  });
  renderApps();
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Init ──────────────────────────────────────────────────────────────────────

if (isLoggedIn()) {
  showAdmin();
} else {
  showLogin();
}
