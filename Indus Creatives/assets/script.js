/* Indus Creatives — minimal site JS
   Mobile nav toggle + IntersectionObserver reveal */
(function () {
  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form -> mailto fallback (no backend on basic GoDaddy plans)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var subject = encodeURIComponent('New project inquiry — ' + (d.get('name') || ''));
      var body = encodeURIComponent(
        'Name: ' + (d.get('name') || '') +
        '\nEmail: ' + (d.get('email') || '') +
        '\nCompany: ' + (d.get('company') || '') +
        '\nProject type: ' + (d.get('project') || '') +
        '\nBudget: ' + (d.get('budget') || '') +
        '\n\nMessage:\n' + (d.get('message') || '')
      );
      window.location.href = 'mailto:hello@induscreatives.in?subject=' + subject + '&body=' + body;
    });
  }
})();
