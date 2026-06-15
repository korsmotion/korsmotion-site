/** KorsPlan Bilder — lightbox gallery */
(function () {
  let lb;
  let lbImg;
  let closeBtn;

  function ensureLightbox() {
    if (lb) return;
    lb = document.createElement('div');
    lb.id = 'kpBilderLb';
    lb.className = 'kp-bilder-lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML =
      '<button type="button" class="kp-bilder-lb-close" aria-label="Schliessen">✕</button>' +
      '<img class="kp-bilder-lb-img" alt="">';
    document.body.appendChild(lb);
    lbImg = lb.querySelector('.kp-bilder-lb-img');
    closeBtn = lb.querySelector('.kp-bilder-lb-close');

    closeBtn.addEventListener('click', closeLightbox);
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLightbox();
    });
  }

  function openLightbox(src, alt) {
    ensureLightbox();
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
  }

  function init() {
    document.querySelectorAll('[data-kp-bilder-src]').forEach((card) => {
      card.addEventListener('click', () => {
        openLightbox(card.dataset.kpBilderSrc, card.dataset.kpBilderAlt || '');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
