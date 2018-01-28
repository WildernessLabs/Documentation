// Mobile menu toggle
const el2 = document.querySelector('.mobile-toggle');
const nav2 = document.querySelector('.main-nav ul');

if(el2) {
  el2.addEventListener('click', (e) => {
    nav2.classList.toggle('is-visible');
    el2.classList.toggle('has-open-nav');
  });
}

// Submenu toggle
const elAside = document.querySelector('.mobile-toggle--aside');
const elAsideAlt = document.querySelector('.mobile-toggle--aside-alt');
const navAside = document.querySelector('.interior-content aside');

if(elAside) {
  elAside.addEventListener('click', (e) => {
    navAside.classList.toggle('is-open');
    elAside.classList.toggle('has-open-nav');
  });
}

if(elAsideAlt) {
  elAsideAlt.addEventListener('click', (e) => {
    navAside.classList.toggle('is-open');
    elAside.classList.toggle('has-open-nav');
  });
}