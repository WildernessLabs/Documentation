// Mobile menu toggle
const el = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav ul');

if(el) {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('is-visible');
    el.classList.toggle('has-open-nav');
  });
}

// Submenu toggle
const elAside = document.querySelector('.mobile-toggle--aside');
const elAsideAlt = document.querySelector('.mobile-toggle--aside-alt');
const navAside = document.querySelector('.interior-content aside');

if(elAside) {
  elAside.addEventListener('click', (e) => {
    e.preventDefault();
    navAside.classList.toggle('is-open');
    elAside.classList.toggle('has-open-nav');
  });
}

if(elAsideAlt) {
  elAsideAlt.addEventListener('click', (e) => {
    e.preventDefault();
    navAside.classList.toggle('is-open');
    elAside.classList.toggle('has-open-nav');
  });
}