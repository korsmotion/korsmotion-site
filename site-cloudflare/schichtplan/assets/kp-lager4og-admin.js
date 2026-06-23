(function () {
  const {
    esc, stock, stockBadgeHtml, imgHtml, toast, fmtDt, partPhotos, partMatchesSearch, findPart, PHOTO_SLOTS,
    fetchParts, fetchEmployees, fetchLog, fetchCategories, fetchMachines,
    saveCategories, saveMachines,
    savePart, deletePart, saveEmployee, deleteEmployee,
    formMachineOptions, openPartView, bindPartView,
  } = window.L4;

  let parts = [];
  let employees = [];
  let log = [];
  let categories = [];
  let settingsMachines = [];
  let editingPartId = null;
  let editingEmpId = null;
  let formPhotos = [null, null, null];
  let selectedMachines = [];
  let photoPollTimer = null;
  let activePhotoSession = null;

  const $ = id => document.getElementById(id);

  function slotEl(index) {
    return document.querySelector(`.l4-photo-slot[data-slot="${index}"]`);
  }

  function stopPhotoPoll() {
    if (photoPollTimer) {
      clearInterval(photoPollTimer);
      photoPollTimer = null;
    }
    activePhotoSession = null;
  }

  function resetPhotoQrUi() {
    stopPhotoPoll();
    $('l4QrPanel').hidden = true;
    $('l4QrCanvas').innerHTML = '';
    $('l4QrStatus').textContent = 'Warte auf Foto vom Handy…';
    document.querySelectorAll('.l4-photo-slot [data-received]').forEach(el => { el.hidden = true; });
  }

  function updateSlotUi(index) {
    const slot = slotEl(index);
    if (!slot) return;
    const src = formPhotos[index];
    const preview = slot.querySelector('[data-preview]');
    const actions = slot.querySelector('.l4-photo-slot-actions');
    const received = slot.querySelector('[data-received]');
    if (src) {
      preview.hidden = false;
      preview.querySelector('img').src = src;
      actions.hidden = true;
    } else {
      preview.hidden = true;
      preview.querySelector('img').src = '';
      actions.hidden = false;
      received.hidden = true;
    }
  }

  function resetAllPhotoSlots() {
    formPhotos = [null, null, null];
    resetPhotoQrUi();
    for (let i = 0; i < PHOTO_SLOTS; i++) {
      const slot = slotEl(i);
      const input = slot?.querySelector('[data-file]');
      if (input) input.value = '';
      updateSlotUi(i);
    }
  }

  function setSlotPhoto(index, dataUrl, fromQr) {
    formPhotos[index] = dataUrl;
    updateSlotUi(index);
    if (fromQr) {
      slotEl(index)?.querySelector('[data-received]')?.removeAttribute('hidden');
    }
  }

  function clearSlotPhoto(index) {
    formPhotos[index] = null;
    const slot = slotEl(index);
    const input = slot?.querySelector('[data-file]');
    if (input) input.value = '';
    updateSlotUi(index);
  }

  function newPhotoSessionId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function startQrSession() {
    if (typeof QRCode === 'undefined') {
      toast('❗ QR-Bibliothek nicht geladen');
      return;
    }
    if (activePhotoSession) {
      $('l4QrPanel').hidden = false;
      return;
    }
    resetPhotoQrUi();
    const sessionId = newPhotoSessionId();
    activePhotoSession = sessionId;
    const uploadUrl = `${location.origin}/schichtplan/lager/upload?session=${encodeURIComponent(sessionId)}`;
    $('l4QrHint').textContent = 'QR scannen — bis zu 3 Fotos nacheinander vom Handy übertragen.';
    $('l4QrPanel').hidden = false;
    $('l4QrCanvas').innerHTML = '';
    new QRCode($('l4QrCanvas'), {
      text: uploadUrl,
      width: 200,
      height: 200,
      colorDark: '#111827',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M,
    });
    $('l4QrStatus').textContent = 'Warte auf Fotos vom Handy…';
    photoPollTimer = setInterval(() => pollPhotoSession(sessionId), 2000);
    pollPhotoSession(sessionId);
  }

  async function pollPhotoSession(sessionId) {
    if (!activePhotoSession || activePhotoSession !== sessionId) return;
    try {
      const res = await fetch(`/api/lager/photo-poll?session=${encodeURIComponent(sessionId)}`);
      if (!res.ok) return;
      const data = await res.json();
      if (!data.slots) return;
      for (let slot = 1; slot <= 3; slot++) {
        const s = data.slots[String(slot)];
        const index = slot - 1;
        if (s?.ready && s.imageBase64 && !formPhotos[index]) {
          setSlotPhoto(index, s.imageBase64, true);
          toast(`✅ Foto ${slot} erhalten!`);
        }
      }
      const filled = formPhotos.filter(Boolean).length;
      $('l4QrStatus').textContent = filled
        ? `${filled} von 3 Fotos übernommen${filled < 3 ? ' — weitere möglich' : ''}`
        : 'Warte auf Fotos vom Handy…';
      if (filled >= 3) {
        $('l4QrStatus').textContent = '✅ Alle 3 Fotos übernommen';
      }
    } catch { /* retry */ }
  }

  function closePartForm() {
    resetAllPhotoSlots();
    $('l4PartForm').classList.remove('open');
  }

  function setTab(tab) {
    document.querySelectorAll('[data-l4-tab]').forEach(b => b.classList.toggle('on', b.dataset.l4Tab === tab));
    document.querySelectorAll('[data-l4-pane]').forEach(p => {
      const on = p.dataset.l4Pane === tab;
      p.hidden = !on;
      p.classList.toggle('on', on);
    });
    if (tab === 'journal') renderJournal();
    if (tab === 'settings') renderSettings();
  }

  function renderSettingsChips(containerId, items, delAttr) {
    const el = $(containerId);
    if (!el) return;
    el.innerHTML = items.map(item => `
      <span class="l4-settings-chip">
        <span class="l4-settings-chip-label">${esc(item)}</span>
        <button type="button" class="l4-settings-chip-del" ${delAttr}="${esc(item)}" title="Entfernen" aria-label="Entfernen">✕</button>
      </span>
    `).join('');
  }

  function renderSettings() {
    renderSettingsChips('l4CatTags', categories, 'data-del-cat');
    renderSettingsChips('l4MachTags', settingsMachines, 'data-del-mach');
  }

  async function persistCategories(next) {
    categories = await saveCategories(next);
    renderSettings();
    toast('✅ Kategorien gespeichert');
  }

  async function persistMachines(next) {
    settingsMachines = await saveMachines(next);
    renderSettings();
    toast('✅ Maschinen gespeichert');
  }

  async function addCategory() {
    const input = $('l4CatInput');
    const name = (input?.value || '').trim();
    if (!name) { toast('❗ Name eingeben'); return; }
    if (categories.some(c => c.toLowerCase() === name.toLowerCase())) {
      toast('❗ Kategorie existiert bereits');
      return;
    }
    try {
      await persistCategories([...categories, name]);
      if (input) input.value = '';
    } catch { toast('❗ Speichern fehlgeschlagen'); }
  }

  async function addMachine() {
    const input = $('l4MachInput');
    const name = (input?.value || '').trim();
    if (!name) { toast('❗ Name eingeben'); return; }
    if (settingsMachines.some(m => m.toLowerCase() === name.toLowerCase())) {
      toast('❗ Maschine existiert bereits');
      return;
    }
    try {
      await persistMachines([...settingsMachines, name]);
      if (input) input.value = '';
    } catch { toast('❗ Speichern fehlgeschlagen'); }
  }

  async function removeCategory(name) {
    if (categories.length <= 1) { toast('❗ Mindestens eine Kategorie'); return; }
    const inUse = parts.some(p => p.category === name);
    if (inUse && !confirm(`Kategorie «${name}» wird von Teilen verwendet. Trotzdem löschen?`)) return;
    try {
      await persistCategories(categories.filter(c => c !== name));
    } catch { toast('❗ Löschen fehlgeschlagen'); }
  }

  async function removeMachine(name) {
    if (settingsMachines.length <= 1) { toast('❗ Mindestens eine Maschine'); return; }
    const inUse = parts.some(p => (p.machines || []).includes(name));
    if (inUse && !confirm(`Maschine «${name}» wird von Teilen verwendet. Trotzdem löschen?`)) return;
    try {
      await persistMachines(settingsMachines.filter(m => m !== name));
    } catch { toast('❗ Löschen fehlgeschlagen'); }
  }

  async function loadAll() {
    try {
      [parts, employees, log, categories, settingsMachines] = await Promise.all([
        fetchParts(), fetchEmployees(), fetchLog(true),
        fetchCategories(), fetchMachines(),
      ]);
    } catch {
      toast('Laden fehlgeschlagen');
    }
    renderParts();
    renderEmployees();
    renderSettings();
  }

  function renderParts() {
    const q = ($('l4AdminPartSearch')?.value || '').trim();
    const list = parts.filter(p => partMatchesSearch(p, q));
    $('l4PartsCount').textContent = `(${parts.length})`;
    $('l4PartsList').innerHTML = list.map(p => {
      const out = (parseInt(p.bestand, 10) || 0) === 0;
      return `<div class="admin-item${out ? ' l4-card-disabled' : ''}" data-part-id="${p.id}">
        <div class="l4-parts-row admin-item-row" data-view-part="${p.id}" role="button" tabindex="0">
          <div class="l4-parts-thumb">${imgHtml(p, 22)}</div>
          <div class="l4-parts-col-name">
            <div class="l4-parts-name">${esc(p.name)}</div>
            <div class="l4-parts-sub">${esc(p.type || '—')} · ${esc(p.category)}</div>
          </div>
          <div class="l4-parts-col-loc">${esc(p.location)}</div>
          <div class="l4-parts-col-stock">${stockBadgeHtml(p.bestand, p.minBestand)}</div>
        </div>
        <div class="admin-item-actions">
          <button type="button" class="btn-secondary" data-edit-part="${p.id}">✏️ Bearbeiten</button>
          <button type="button" class="btn-danger" data-del-part="${p.id}">🗑 Löschen</button>
        </div>
      </div>`;
    }).join('') || '<p class="l4-parts-empty">Noch keine Teile.</p>';
  }

  function renderEmployees() {
    $('l4EmpList').innerHTML = employees.map(e => `
      <div class="admin-item">
        <div class="admin-item-row">
          <div class="admin-item-info">
            <div class="admin-item-name">${esc(e.name)}</div>
            <div class="admin-item-sub">Badge ${esc(e.badge4)} · ${esc(e.role || '—')}</div>
          </div>
        </div>
        <div class="admin-item-actions">
          <button type="button" class="btn-secondary" data-edit-emp="${e.id}">✏️ Bearbeiten</button>
          <button type="button" class="btn-danger" data-del-emp="${e.id}">🗑 Löschen</button>
        </div>
      </div>
    `).join('') || '<p style="color:var(--text-muted);font-size:13px">Noch keine Mitarbeiter.</p>';
  }

  function renderJournal() {
    $('l4JournalBody').innerHTML = log.map(row => `
      <tr>
        <td>${esc(fmtDt(row.datetime))}</td>
        <td>${esc(row.employeeName)}</td>
        <td>${esc(row.partName)}</td>
        <td style="font-family:'JetBrains Mono',monospace">${esc(row.dynawinNr)}</td>
        <td>${row.qty}</td>
        <td>${esc(row.machine)}</td>
        <td style="font-family:'JetBrains Mono',monospace">${row.bestandBefore} → ${row.bestandAfter}</td>
      </tr>
    `).join('') || '<tr><td colspan="7" style="color:var(--text-muted)">Noch keine Einträge.</td></tr>';
  }

  function exportCsv() {
    const header = ['Datum', 'Mitarbeiter', 'Teil', 'Dynawin', 'Menge', 'Maschine', 'Bestand vor', 'Bestand nach'];
    const rows = log.map(r => [
      fmtDt(r.datetime), r.employeeName, r.partName, r.dynawinNr, r.qty, r.machine, r.bestandBefore, r.bestandAfter,
    ]);
    const csv = [header, ...rows].map(row => row.map(c => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `lager4og-journal-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function toggleMachineCheck(lbl) {
    const m = lbl.dataset.m;
    const input = lbl.querySelector('input[type=checkbox]');
    const next = !lbl.classList.contains('checked');
    lbl.classList.toggle('checked', next);
    if (input) input.checked = next;
    if (next) {
      if (!selectedMachines.includes(m)) selectedMachines.push(m);
    } else {
      selectedMachines = selectedMachines.filter(x => x !== m);
    }
  }

  function buildMachineChecks(checked) {
    selectedMachines = [...(checked || [])];
    const opts = formMachineOptions(settingsMachines);
    $('l4FMachines').innerHTML = opts.map(m => `
      <label class="machine-check${selectedMachines.includes(m) ? ' checked' : ''}" data-m="${esc(m)}">
        <input type="checkbox"${selectedMachines.includes(m) ? ' checked' : ''}>
        <span>${esc(m)}</span>
      </label>
    `).join('');
  }

  function buildCategorySelect(selected) {
    const sel = $('l4FCategory');
    if (!sel) return;
    sel.innerHTML = '<option value="">—</option>' + categories.map(c => `<option>${esc(c)}</option>`).join('');
    if (selected) sel.value = selected;
  }

  function openPartForm(id) {
    editingPartId = id || null;
    resetAllPhotoSlots();
    $('l4PartFormTitle').textContent = id ? 'Teil bearbeiten' : 'Neues Teil';

    if (id) {
      const p = findPart(parts, id);
      if (!p) return;
      buildCategorySelect(p.category);
      $('l4FName').value = p.name;
      $('l4FType').value = p.type;
      $('l4FDesc').value = p.desc || '';
      $('l4FNr').value = p.nr === '—' ? '' : p.nr;
      $('l4FLoc').value = p.location;
      $('l4FBest').value = p.bestNr === '—' ? '' : p.bestNr;
      $('l4FBestand').value = p.bestand;
      $('l4FMin').value = p.minBestand || 0;
      formPhotos = partPhotos(p);
      for (let i = 0; i < PHOTO_SLOTS; i++) updateSlotUi(i);
      buildMachineChecks(p.machines);
    } else {
      buildCategorySelect('');
      ['l4FName', 'l4FType', 'l4FDesc', 'l4FNr', 'l4FLoc', 'l4FBest', 'l4FBestand', 'l4FMin'].forEach(i => { $(i).value = i === 'l4FBestand' || i === 'l4FMin' ? '0' : ''; });
      buildMachineChecks([]);
    }
    $('l4PartForm').classList.add('open');
  }

  function openEmpForm(id) {
    editingEmpId = id || null;
    $('l4EmpFormTitle').textContent = id ? 'Mitarbeiter bearbeiten' : 'Neuer Mitarbeiter';
    if (id) {
      const e = employees.find(x => x.id === id);
      $('l4EName').value = e.name;
      $('l4EBadge').value = e.badge4;
      $('l4ERole').value = e.role || '';
    } else {
      $('l4EName').value = '';
      $('l4EBadge').value = '';
      $('l4ERole').value = '';
    }
    $('l4EmpForm').classList.add('open');
  }

  async function savePartForm() {
    const name = $('l4FName').value.trim();
    const location = $('l4FLoc').value.trim();
    const category = $('l4FCategory').value;
    if (!name || !location || !category) { toast('❗ Pflichtfelder ausfüllen'); return; }
    const part = {
      id: editingPartId,
      name,
      type: $('l4FType').value.trim(),
      category,
      desc: $('l4FDesc').value.trim(),
      nr: $('l4FNr').value.trim() || '—',
      location,
      bestNr: $('l4FBest').value.trim() || '—',
      bestand: parseInt($('l4FBestand').value, 10) || 0,
      minBestand: parseInt($('l4FMin').value, 10) || 0,
      machines: selectedMachines,
      photos: [...formPhotos],
      keywords: [name.toLowerCase(), category.toLowerCase()],
    };
    try {
      const saved = await savePart(part, !editingPartId);
      if (editingPartId) {
        const i = parts.findIndex(p => p.id === editingPartId);
        if (i >= 0) parts[i] = saved;
      } else parts.push(saved);
      closePartForm();
      renderParts();
      toast('✅ Gespeichert');
    } catch (e) {
      toast('❗ ' + (e.message || 'Fehler'));
    }
  }

  async function saveEmpForm() {
    const name = $('l4EName').value.trim();
    const badge4 = $('l4EBadge').value.replace(/\D/g, '').slice(0, 4);
    if (!name || badge4.length !== 4) { toast('❗ Name und 4-stellige Badge'); return; }
    try {
      const saved = await saveEmployee({
        id: editingEmpId || undefined,
        name,
        badge4,
        role: $('l4ERole').value.trim(),
      });
      if (editingEmpId) {
        const i = employees.findIndex(e => e.id === editingEmpId);
        if (i >= 0) employees[i] = saved;
      } else employees.push(saved);
      $('l4EmpForm').classList.remove('open');
      renderEmployees();
      toast('✅ Gespeichert');
    } catch (e) {
      toast('❗ ' + (e.message || 'Fehler'));
    }
  }

  function bind() {
    document.querySelectorAll('[data-l4-tab]').forEach(b => {
      b.addEventListener('click', () => setTab(b.dataset.l4Tab));
    });
    $('l4NewPart').addEventListener('click', () => openPartForm(null));
    $('l4NewEmp').addEventListener('click', () => openEmpForm(null));
    $('l4AdminPartSearch')?.addEventListener('input', renderParts);
    $('l4AdminPartSearch')?.addEventListener('search', renderParts);
    $('l4ExportCsv').addEventListener('click', exportCsv);

    $('l4CatAdd')?.addEventListener('click', addCategory);
    $('l4CatInput')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); addCategory(); }
    });
    $('l4CatTags')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-del-cat]');
      if (btn) removeCategory(btn.getAttribute('data-del-cat'));
    });

    $('l4MachAdd')?.addEventListener('click', addMachine);
    $('l4MachInput')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); addMachine(); }
    });
    $('l4MachTags')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-del-mach]');
      if (btn) removeMachine(btn.getAttribute('data-del-mach'));
    });

    $('l4PartFormClose').addEventListener('click', closePartForm);
    $('l4PartCancel').addEventListener('click', closePartForm);
    $('l4PartSave').addEventListener('click', savePartForm);

    $('l4PhotoSlots')?.addEventListener('click', e => {
      const clearBtn = e.target.closest('[data-clear]');
      const slot = e.target.closest('.l4-photo-slot');
      if (!slot) return;
      const index = parseInt(slot.dataset.slot, 10);
      if (clearBtn) {
        e.preventDefault();
        clearSlotPhoto(index);
      }
    });

    $('l4QrStart')?.addEventListener('click', startQrSession);

    $('l4PhotoSlots')?.addEventListener('change', e => {
      const input = e.target.closest('[data-file]');
      if (!input) return;
      const slot = input.closest('.l4-photo-slot');
      if (!slot) return;
      const index = parseInt(slot.dataset.slot, 10);
      const file = input.files?.[0];
      if (!file) return;
      resetPhotoQrUi();
      const reader = new FileReader();
      reader.onload = ev => setSlotPhoto(index, ev.target.result, false);
      reader.readAsDataURL(file);
    });

    $('l4EmpFormClose').addEventListener('click', () => $('l4EmpForm').classList.remove('open'));
    $('l4EmpCancel').addEventListener('click', () => $('l4EmpForm').classList.remove('open'));
    $('l4EmpSave').addEventListener('click', saveEmpForm);

    $('l4FMachines').addEventListener('click', e => {
      const lbl = e.target.closest('[data-m]');
      if (!lbl) return;
      e.preventDefault();
      toggleMachineCheck(lbl);
    });

    $('l4PartsList').addEventListener('click', async e => {
      const edit = e.target.closest('[data-edit-part]');
      const del = e.target.closest('[data-del-part]');
      const view = e.target.closest('[data-view-part]');
      if (edit) {
        e.stopPropagation();
        openPartForm(parseInt(edit.dataset.editPart, 10));
        return;
      }
      if (del) {
        e.stopPropagation();
        if (confirm('Teil löschen?')) {
          const id = parseInt(del.dataset.delPart, 10);
          try {
            await deletePart(id);
            parts = parts.filter(p => p.id !== id);
            renderParts();
            toast('Gelöscht');
          } catch { toast('Fehler'); }
        }
        return;
      }
      if (view) {
        const p = findPart(parts, parseInt(view.dataset.viewPart, 10));
        if (p) openPartView(p, { mode: 'admin' });
      }
    });

    $('l4EmpList').addEventListener('click', async e => {
      const edit = e.target.closest('[data-edit-emp]');
      const del = e.target.closest('[data-del-emp]');
      if (edit) openEmpForm(parseInt(edit.dataset.editEmp, 10));
      if (del && confirm('Mitarbeiter löschen?')) {
        const id = parseInt(del.dataset.delEmp, 10);
        try {
          await deleteEmployee(id);
          employees = employees.filter(x => x.id !== id);
          renderEmployees();
          toast('Gelöscht');
        } catch { toast('Fehler'); }
      }
    });
  }

  async function init() {
    if (new URLSearchParams(location.search).has('embed')) {
      document.body.classList.add('l4-embed');
    }
    bindPartView();
    bind();
    await loadAll();
  }

  window.l4AdminRefresh = loadAll;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
