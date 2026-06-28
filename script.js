/*
 * Saurabh Verma - Portfolio
 * UI behaviors: theme toggle, mobile nav, scroll reveal, scroll-to-top
 * All content is static HTML for SEO
 */

(function () {
  'use strict';

  // --- Loader ---
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 300));
  }

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const saved = localStorage.getItem('theme');
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (!dark) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    themeToggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // --- Mobile Nav ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const active = mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = active ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal ---
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // --- Scroll Top Button ---
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Active Nav Link ---
  const headerLinks = document.querySelectorAll('.header__link');
  const sections = document.querySelectorAll('section[id]');
  if (headerLinks.length && sections.length) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          headerLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => navObserver.observe(s));
  }

  // --- Footer Year ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // --- Dynamic Experience Years ---
  const start = new Date(2020, 8); // Sept 2020
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  document.querySelectorAll('.exp-years').forEach(el => {
    el.textContent = years + '+ years';
  });
})();
