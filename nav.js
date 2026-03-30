// nav.js — shared across all pages
(function(){
  // inject nav toggle button
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.innerHTML = '☰';
  toggle.setAttribute('aria-label','Toggle navigation');
  document.body.appendChild(toggle);

  const nav = document.querySelector('nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
  });

  // close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.innerHTML = '☰';
    });
  });

  // set active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // animate data bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target;
        const w = fill.dataset.w || '0';
        fill.style.width = w + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.data-bar-fill').forEach(el => {
    el.style.width = '0%';
    observer.observe(el);
  });

  // stagger card reveals
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, i * 80);
        cardObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.card, .product-card, .problem-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease';
    cardObserver.observe(el);
  });
})();
