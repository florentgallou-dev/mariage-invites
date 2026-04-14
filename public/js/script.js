/* ========================================
   FAIRE-PART — Script
   Reveal on scroll, countdown, nav dots,
   RSVP form handling
   ======================================== */

(function () {
  'use strict';

  // ---------- Reveal on Scroll (Intersection Observer) ----------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // ---------- Countdown ----------
  const timerEl = document.querySelector('.countdown__timer');
  if (timerEl) {
    const targetDate = new Date(timerEl.dataset.date).getTime();

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    function updateCountdown() {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '0';
        hoursEl.textContent = '0';
        minutesEl.textContent = '0';
        secondsEl.textContent = '0';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = days;
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ---------- Active Nav Dot on Scroll ----------
  const sections = document.querySelectorAll('.section');
  const navDots = document.querySelectorAll('.nav-dot');

  if (sections.length && navDots.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navDots.forEach((dot) => {
              dot.classList.toggle('active', dot.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ---------- Smooth Scroll for Nav Dots ----------
  navDots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(dot.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- RSVP Form ----------
  const form = document.getElementById('rsvp-form');
  const successMsg = document.getElementById('rsvp-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // In production, replace with a real submission
      // (e.g. Formspree, Google Forms, Netlify Forms)
      form.hidden = true;
      successMsg.hidden = false;
    });
  }

  // ---------- Parallax-like subtle movement on hero ----------
  const heroContent = document.querySelector('.hero__content');
  if (heroContent && window.matchMedia('(min-width: 769px)').matches) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroContent.style.transform = 'translateY(' + scrollY * 0.25 + 'px)';
        heroContent.style.opacity = 1 - scrollY / window.innerHeight;
      }
    }, { passive: true });
  }

  // ---------- High Contrast Toggle ----------
  const contrastToggle = document.getElementById('contrast-toggle');
  if (contrastToggle) {
    if (localStorage.getItem('high-contrast') === 'true') {
      document.body.classList.add('high-contrast');
      contrastToggle.setAttribute('aria-pressed', 'true');
    }

    contrastToggle.addEventListener('click', function () {
      var isActive = document.body.classList.toggle('high-contrast');
      contrastToggle.setAttribute('aria-pressed', String(isActive));
      localStorage.setItem('high-contrast', String(isActive));
    });
  }
})();
