(function () {
  'use strict';

  /* ── Cycling hero headline words ─── */
  var words = document.querySelectorAll('.hero__cycling-word');
  if (words.length) {
    var idx = 0;
    function cycle() {
      words.forEach(function (w, i) {
        w.classList.toggle('is-active', i === idx);
      });
      idx = (idx + 1) % words.length;
    }
    cycle();
    setInterval(cycle, 2800);
  }

  /* ── Hero journey panel progress bar ─── */
  var progressFill  = document.getElementById('hero-journey-progress');
  var progressLabel = document.getElementById('hero-journey-progress-label');
  if (progressFill && progressLabel) {
    var pct = 62;
    setInterval(function () {
      pct = pct >= 88 ? 38 : pct + 1;
      progressFill.style.width = pct + '%';
      progressLabel.textContent = pct + '%';
    }, 120);
  }

  /* ── Generic tab panels (Solutions, Journey, etc.) ─── */
  function initTabs(tabSelector, panelSelector) {
    var tabs   = document.querySelectorAll(tabSelector);
    var panels = document.querySelectorAll(panelSelector);
    if (!tabs.length) return;

    function activate(index) {
      tabs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
      });
      panels.forEach(function (p, i) {
        p.classList.toggle('is-active', i === index);
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { activate(i); });
    });

    activate(0); /* open first tab by default */
  }

  initTabs('.solutions__tab',  '.solutions__panel');
  initTabs('.journey__tab',    '.journey__panel');
}());
