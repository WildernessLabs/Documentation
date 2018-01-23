// Mobile menu toggle
const el = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav ul');

el.addEventListener('click', (e) => {
  nav.classList.toggle('is-visible');
  el.classList.toggle('has-open-nav');
});

// Close mobile menu when clicking anywhere outside of it
var header = document.querySelector('header');
var headerTrigger = document.querySelector('.mobile-toggle');
var headerNavMenu = document.querySelector('.main-nav ul');

document.addEventListener('click', function(event) {
  var isClickInside = header.contains(event.target);

  if (!isClickInside) {
    headerNavMenu.classList.remove('is-visible');
    headerTrigger.classList.remove('has-open-nav');
  }
});

// Submenu toggle
const elAside = document.querySelector('.mobile-toggle--aside');
const elAsideAlt = document.querySelector('.mobile-toggle--aside-alt');
const navAside = document.querySelector('.interior-content aside');

elAside.addEventListener('click', (e) => {
  navAside.classList.toggle('is-open');
  elAside.classList.toggle('has-open-nav');
});

elAsideAlt.addEventListener('click', (e) => {
  navAside.classList.toggle('is-open');
  elAside.classList.toggle('has-open-nav');
});