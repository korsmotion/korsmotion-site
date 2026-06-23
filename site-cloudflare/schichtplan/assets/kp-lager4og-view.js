/* Lager 4.OG — shared read-only part detail modal */
(function () {
  const { esc, stock, galleryHtml, partPhotos } = window.L4;

  let currentPart = null;
  let viewMode = 'admin';
  let withdrawHandler = null;
  let bound = false;

  const $ = id => document.getElementById(id);

  function populateView(part) {
    const bestand = parseInt(part.bestand, 10) || 0;
    const minBest = parseInt(part.minBestand, 10) || 0;
    const s = stock(part.bestand, part.minBestand);
    $('l4ViewName').textContent = part.name || '—';
    $('l4ViewCat').textContent = part.category || '—';
    $('l4ViewGallery').innerHTML = galleryHtml(part, 'view');
    $('l4ViewType').textContent = part.type || '—';
    $('l4ViewDesc').textContent = part.desc || '—';
    $('l4ViewNr').textContent = part.nr || '—';
    $('l4ViewBestNr').textContent = part.bestNr || '—';
    $('l4ViewLoc').textContent = part.location || '—';
    $('l4ViewBestand').textContent = `${bestand} Stk.`;
    $('l4ViewBestand').className = `l4-view-value ${s.cls}`;
    $('l4ViewMin').textContent = `${minBest} Stk.`;
    const machines = Array.isArray(part.machines) ? part.machines : [];
    $('l4ViewMachines').innerHTML = machines.length
      ? machines.map(m => `<span class="machine-tag">${esc(m)}</span>`).join('')
      : '<span class="l4-view-muted">—</span>';

    const worker = $('l4ViewWorker');
    const entnehmenBtn = $('l4EntnehmenBtn');
    if (worker) {
      worker.hidden = viewMode !== 'worker';
      if (viewMode === 'worker') {
        const qtyInput = $('l4WithdrawQty');
        qtyInput.min = '1';
        qtyInput.max = String(Math.max(1, bestand));
        qtyInput.value = bestand > 0 ? '1' : '0';
        qtyInput.disabled = bestand < 1;
        if (entnehmenBtn) {
          entnehmenBtn.hidden = false;
          entnehmenBtn.disabled = bestand < 1;
        }
      } else if (entnehmenBtn) {
        entnehmenBtn.hidden = true;
      }
    } else if (entnehmenBtn) {
      entnehmenBtn.hidden = true;
    }
  }

  function openLightbox(idx) {
    if (!currentPart) return;
    const src = partPhotos(currentPart)[idx];
    if (!src) return;
    $('l4LightboxImg').src = src;
    $('l4Lightbox').classList.add('open');
  }

  function closeLightbox() {
    $('l4Lightbox')?.classList.remove('open');
    if ($('l4LightboxImg')) $('l4LightboxImg').src = '';
  }

  function openPartView(part, opts) {
    if (!part) return;
    currentPart = part;
    viewMode = opts?.mode === 'worker' ? 'worker' : 'admin';
    populateView(part);
    $('l4PartViewModal')?.classList.add('open');
  }

  function closePartView() {
    $('l4PartViewModal')?.classList.remove('open');
    currentPart = null;
  }

  function bindPartView(opts) {
    if (opts?.onWithdraw) withdrawHandler = opts.onWithdraw;
    if (bound) return;
    bound = true;

    $('l4ViewClose')?.addEventListener('click', closePartView);
    $('l4PartViewModal')?.addEventListener('click', e => {
      if (e.target === $('l4PartViewModal')) closePartView();
    });
    $('l4PartViewDialog')?.addEventListener('click', e => e.stopPropagation());

    $('l4ViewGallery')?.addEventListener('click', e => {
      const thumb = e.target.closest('[data-l4-idx]');
      if (!thumb) return;
      e.stopPropagation();
      openLightbox(parseInt(thumb.dataset.l4Idx, 10));
    });

    $('l4LightboxClose')?.addEventListener('click', e => {
      e.stopPropagation();
      closeLightbox();
    });
    $('l4Lightbox')?.addEventListener('click', e => {
      if (e.target === $('l4Lightbox') || e.target === $('l4LightboxImg')) closeLightbox();
    });

    $('l4EntnehmenBtn')?.addEventListener('click', () => {
      if (currentPart && typeof withdrawHandler === 'function') {
        withdrawHandler(currentPart);
      }
    });
  }

  window.L4.openPartView = openPartView;
  window.L4.closePartView = closePartView;
  window.L4.bindPartView = bindPartView;
  window.L4.getViewPart = () => currentPart;
})();
