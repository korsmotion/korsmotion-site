(function () {
  const panes = { suche: 'l4PaneSuche', verwaltung: 'l4PaneVerwaltung' };

  function setMainTab(tab) {
    document.querySelectorAll('[data-l4-main]').forEach(btn => {
      btn.classList.toggle('on', btn.dataset.l4Main === tab);
    });
    Object.entries(panes).forEach(([key, id]) => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('on', key === tab);
    });
    if (tab === 'verwaltung' && typeof window.l4AdminRefresh === 'function') {
      window.l4AdminRefresh();
    }
  }

  function initMainTabs() {
    document.querySelectorAll('[data-l4-main]').forEach(btn => {
      btn.addEventListener('click', () => setMainTab(btn.dataset.l4Main));
    });
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab') === 'verwaltung' ? 'verwaltung' : 'suche';
    setMainTab(tab);
  }

  window.l4SetMainTab = setMainTab;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainTabs);
  } else {
    initMainTabs();
  }
})();
