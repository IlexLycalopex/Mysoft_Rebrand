(function () {
  'use strict';

  const nav    = document.getElementById('site-nav');
  const items  = document.querySelectorAll('.site-nav__item');
  let closeTimer = null;

  function openItem(item) {
    clearTimeout(closeTimer);
    items.forEach(function (i) { i.classList.remove('is-open'); });
    item.classList.add('is-open');
  }

  function scheduleClose() {
    closeTimer = setTimeout(function () {
      items.forEach(function (i) { i.classList.remove('is-open'); });
    }, 180);
  }

  function cancelClose() { clearTimeout(closeTimer); }

  items.forEach(function (item) {
    var btn   = item.querySelector('.site-nav__btn');
    var panel = item.querySelector('.site-nav__panel');

    if (btn) {
      btn.addEventListener('mouseenter', function () { openItem(item); });
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(function (i) { i.classList.remove('is-open'); });
        if (!isOpen) item.classList.add('is-open');
      });
    }

    if (panel) {
      panel.addEventListener('mouseenter', cancelClose);
      panel.addEventListener('mouseleave', scheduleClose);
    }

    item.addEventListener('mouseleave', scheduleClose);
  });

  /* Close on outside click */
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) {
      items.forEach(function (i) { i.classList.remove('is-open'); });
    }
  });

  /* Scroll state */
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  /* Mobile toggle */
  var mobileToggle = document.getElementById('site-nav-mobile-toggle');
  var navItemsEl   = document.getElementById('site-nav-items');

  if (mobileToggle && navItemsEl) {
    mobileToggle.addEventListener('click', function () {
      navItemsEl.classList.toggle('is-mobile-open');
      mobileToggle.classList.toggle('is-active');
    });
  }
}());
