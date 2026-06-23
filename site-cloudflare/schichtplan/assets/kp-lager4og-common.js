/* Lager 4.OG — shared constants & API */
(function (global) {
  const L4_DEFAULT_MACHINES = [
    'Waldner 19.2', 'Bemasor Klär', 'Druckner 15.2', 'Rotary',
    'Station 2', '10.2', '10.3', '10.3-2', 'Sonstiges',
  ];
  const L4_DEFAULT_CATEGORIES = ['Sensor', 'Pneumatik', 'Dichtung', 'Vakuum', 'Antrieb', 'Elektrik', 'Befestigung', 'Kupplung', 'Sonstiges'];
  const L4_ADMIN_PW = 'korsmotion2026';

  function l4Esc(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function l4Stock(bestand, minBestand) {
    const n = parseInt(bestand, 10) || 0;
    const min = parseInt(minBestand, 10) || 0;
    if (n === 0) return { label: 'LEER', cls: 'stock-out', low: true };
    if (n <= min) return { label: 'WENIG', cls: 'stock-low', low: true };
    return { label: 'OK', cls: 'stock-ok', low: false };
  }

  function l4StockBadgeHtml(bestand, minBestand) {
    const s = l4Stock(bestand, minBestand);
    const n = parseInt(bestand, 10) || 0;
    return `<span class="l4-stock-badge card-stock ${s.cls}">${s.label} · ${n} Stk.</span>`;
  }

  function l4PartPhotos(part) {
    const out = [null, null, null];
    if (part && Array.isArray(part.photos)) {
      for (let i = 0; i < 3; i++) {
        const v = part.photos[i];
        out[i] = typeof v === 'string' && v ? v : null;
      }
    } else if (part && part.photo && typeof part.photo === 'string') {
      out[0] = part.photo;
    }
    return out;
  }

  function l4PrimaryPhoto(part) {
    const photos = l4PartPhotos(part);
    return photos.find(Boolean) || null;
  }

  function l4ImgHtml(part, size) {
    const src = l4PrimaryPhoto(part);
    if (src) return `<img src="${l4Esc(src)}" alt="">`;
    return `<span class="emoji-placeholder" style="font-size:${size}px">🔧</span>`;
  }

  function l4FindPart(parts, id) {
    const pid = parseInt(id, 10);
    return parts.find(p => parseInt(p.id, 10) === pid) || null;
  }

  function l4PartMatchesSearchWorker(p, q) {
    if (!q) return true;
    const ql = String(q).toLowerCase();
    return [p.name, p.category, p.desc].some(v => String(v ?? '').toLowerCase().includes(ql));
  }

  /** Worker kiosk: never filter by assigned machines — only text search */
  function l4WarehouseParts(allParts, q) {
    return (allParts || []).filter(p => l4PartMatchesSearchWorker(p, q));
  }

  function l4KioskMachineTiles(settingsMachines) {
    const src = Array.isArray(settingsMachines) && settingsMachines.length
      ? settingsMachines
      : L4_DEFAULT_MACHINES;
    const list = src.map(String).filter(Boolean).filter(m => m !== 'Sonstiges');
    list.sort((a, b) => a.localeCompare(b, 'de'));
    list.push('Sonstiges');
    return list;
  }

  function l4FormMachineOptions(settingsMachines) {
    const src = Array.isArray(settingsMachines) && settingsMachines.length
      ? settingsMachines
      : L4_DEFAULT_MACHINES;
    return src.map(String).filter(Boolean).filter(m => m !== 'Sonstiges');
  }

  function l4PartMatchesSearch(p, q) {
    if (!q) return true;
    const ql = String(q).toLowerCase();
    const hay = [
      p.name, p.type, p.category, p.desc, p.nr, p.bestNr, p.location,
      ...(p.keywords || []),
    ].map(v => String(v ?? '').toLowerCase()).join(' ');
    return hay.includes(ql);
  }

  function l4GalleryHtml(part, variant) {
    const photos = l4PartPhotos(part);
    const hasAny = photos.some(Boolean);
    const cls = variant === 'view' ? ' l4-gallery-thumb-view' : '';
    if (!hasAny) return `<div class="l4-gallery-empty-slot l4-gallery-empty-view">🔧</div>`;
    return photos.map((src, i) => {
      if (src) {
        return `<button type="button" class="l4-gallery-thumb${cls}" data-l4-idx="${i}" aria-label="Foto ${i + 1}"><img src="${l4Esc(src)}" alt=""></button>`;
      }
      return `<div class="l4-gallery-empty-slot l4-gallery-empty-view" aria-hidden="true">—</div>`;
    }).join('');
  }

  function l4Hl(text, q) {
    if (!q) return l4Esc(text);
    const t = String(text);
    const ql = q.toLowerCase();
    const i = t.toLowerCase().indexOf(ql);
    if (i < 0) return l4Esc(t);
    return l4Esc(t.slice(0, i)) + '<mark>' + l4Esc(t.slice(i, i + q.length)) + '</mark>' + l4Esc(t.slice(i + q.length));
  }

  async function l4FetchParts() {
    const res = await fetch('/api/lager/parts');
    if (!res.ok) throw new Error('parts');
    const data = await res.json();
    return data.parts || [];
  }

  async function l4FetchEmployees() {
    const res = await fetch('/api/lager/employees');
    if (!res.ok) throw new Error('employees');
    const data = await res.json();
    return data.employees || [];
  }

  async function l4FetchLog(admin) {
    const headers = admin ? { 'X-Admin-Password': L4_ADMIN_PW } : {};
    const res = await fetch('/api/lager/log', { headers });
    if (!res.ok) throw new Error('log');
    const data = await res.json();
    return data.log || [];
  }

  async function l4Withdraw(payload) {
    const res = await fetch('/api/lager/withdraw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || 'withdraw'), { data, status: res.status });
    return data;
  }

  async function l4SavePart(part, isNew) {
    const url = isNew ? '/api/lager/parts' : `/api/lager/parts/${part.id}`;
    const res = await fetch(url, {
      method: isNew ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW, part }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'save');
    return data.part;
  }

  async function l4DeletePart(id) {
    const res = await fetch(`/api/lager/parts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW }),
    });
    if (!res.ok) throw new Error('delete');
  }

  async function l4SaveEmployee(employee) {
    const res = await fetch('/api/lager/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW, employee }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'save');
    return data.employee;
  }

  async function l4DeleteEmployee(id) {
    const res = await fetch(`/api/lager/employees/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW }),
    });
    if (!res.ok) throw new Error('delete');
  }

  function l4Toast(msg) {
    const t = document.getElementById('l4Toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2400);
  }

  async function l4FetchCategories() {
    const res = await fetch('/api/lager/categories');
    if (!res.ok) throw new Error('categories');
    const data = await res.json();
    const list = data.categories;
    return Array.isArray(list) && list.length ? list : [...L4_DEFAULT_CATEGORIES];
  }

  async function l4FetchMachines() {
    const res = await fetch('/api/lager/machines');
    if (!res.ok) throw new Error('machines');
    const data = await res.json();
    const list = data.machines;
    return Array.isArray(list) && list.length ? list : [...L4_DEFAULT_MACHINES];
  }

  async function l4SaveCategories(categories) {
    const res = await fetch('/api/lager/categories', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW, categories }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'save');
    return data.categories || categories;
  }

  async function l4SaveMachines(machines) {
    const res = await fetch('/api/lager/machines', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': L4_ADMIN_PW },
      body: JSON.stringify({ password: L4_ADMIN_PW, machines }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'save');
    return data.machines || machines;
  }

  function l4FmtDt(iso) {
    try {
      return new Date(iso).toLocaleString('de-CH', { dateStyle: 'short', timeStyle: 'short' });
    } catch {
      return iso || '—';
    }
  }

  global.L4 = {
    DEFAULT_MACHINES: L4_DEFAULT_MACHINES,
    DEFAULT_CATEGORIES: L4_DEFAULT_CATEGORIES,
    esc: l4Esc,
    stock: l4Stock,
    stockBadgeHtml: l4StockBadgeHtml,
    partPhotos: l4PartPhotos,
    primaryPhoto: l4PrimaryPhoto,
    findPart: l4FindPart,
    partMatchesSearch: l4PartMatchesSearch,
    partMatchesSearchWorker: l4PartMatchesSearchWorker,
    warehouseParts: l4WarehouseParts,
    kioskMachineTiles: l4KioskMachineTiles,
    formMachineOptions: l4FormMachineOptions,
    imgHtml: l4ImgHtml,
    galleryHtml: l4GalleryHtml,
    PHOTO_SLOTS: 3,
    hl: l4Hl,
    fetchParts: l4FetchParts,
    fetchEmployees: l4FetchEmployees,
    fetchLog: l4FetchLog,
    fetchCategories: l4FetchCategories,
    fetchMachines: l4FetchMachines,
    saveCategories: l4SaveCategories,
    saveMachines: l4SaveMachines,
    withdraw: l4Withdraw,
    savePart: l4SavePart,
    deletePart: l4DeletePart,
    saveEmployee: l4SaveEmployee,
    deleteEmployee: l4DeleteEmployee,
    toast: l4Toast,
    fmtDt: l4FmtDt,
  };
})(typeof window !== 'undefined' ? window : globalThis);
