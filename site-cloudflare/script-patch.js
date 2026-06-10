// ── Patch: pf-yt-overlay CSS ──────────────────────────────────────────────────
// Этот файл добавляет стили для полного overlay поверх YouTube iframe.
// Overlay блокирует ВСЕ кнопки YouTube (логотип, перемотка, реклама).
// Клик на overlay открывает детали проекта.
(function injectOverlayStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* YouTube overlay — блокирует кнопки и брендинг */
    .pf-yt-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }
    .pf-yt-overlay svg {
      opacity: 0;
      transition: opacity .2s;
    }
    .pf-yt-overlay:hover svg {
      opacity: 1;
    }

    /* Убедимся что pf-media имеет position:relative для overlay */
    .pf-media {
      position: relative !important;
    }
  `;
  document.head.appendChild(style);
})();
