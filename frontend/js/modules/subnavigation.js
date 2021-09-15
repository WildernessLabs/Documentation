import Accordion from './accordion';
import { shouldContentScroll, isValidEvent } from './utils';

const MobileSubNavigation = () => {

  const trigger = document.querySelector('.mobile-secondary-trigger');
  const mobileContainer = document.querySelector(`.mobile_sub_navigation`);
  
  if(trigger && !mobileContainer){ 
    
    createDOM(trigger);
    bindEvents();

    trigger.addEventListener('click', toggleNav);
  }
}

const createDOM = (siblingElement) => {

  const subnav = getSubnav(); // reference to left accordion subnav 

  // create the mobile navigation container if it hasn't already been created
  const mobileNav = document.createElement('div');
  mobileNav.id = 'mobile_sub_nav';
  mobileNav.className = 'mobile_sub_navigation';

  // wrap subnavigation
  const wrapper = document.createElement('div')
  wrapper.classList.add('subnavigation-wrapper',  subnav ? 'sub-active' : 'top-active');

  // create controls above top menu navigation
  const topnavButtons = document.createElement('div');
  topnavButtons.className = 'top-nav-buttons';

  const close = document.createElement('button');
  close.type = 'button';
  close.innerHTML = '<span class="visually-hidden">Close Nav</span>';
  close.className = 'nav-close';
  topnavButtons.appendChild(close);

  const navForward = document.createElement('button');
  navForward.type = 'button';
  navForward.innerHTML = '<span class="visually-hidden">Go to subpage navigation</span>';
  navForward.className = 'nav-toggle forward';
  topnavButtons.appendChild(navForward);

  // create copy of secondary top navigation
  const topnavCopy = document.querySelector('.topbar-wrapper').cloneNode(true);
  topnavCopy.prepend(topnavButtons);

  wrapper.appendChild(topnavCopy);

  // create copy of subnavigation
  if(subnav){
    const subNavigationCopy = subnav.cloneNode(true);
    subNavigationCopy.classList.remove('fixed-element');
    subNavigationCopy.style = "";
    // console.log(setSubnavHeight());
    wrapper.appendChild(subNavigationCopy);
  }

  // create backdrop
  const backdrop = document.createElement('div');
  backdrop.classList.add('mobile_nav_backdrop');
  mobileNav.appendChild(backdrop);

  // add mobile navigation to the DOM
  mobileNav.classList.add(subnav ? 'with-subnav' : 'no-subnav');
  mobileNav.appendChild(wrapper);

  // append mobile nav next to specified element
  siblingElement.parentNode.insertBefore(mobileNav, siblingElement.nextSibling);

  // create accordion
  Accordion(document.querySelector(`.mobile_sub_navigation .nav-accordion`));
}

const bindEvents = () => {

  const subnav = getSubnav(); // reference to left accordion subnav 
  const wrapper = document.querySelector('.subnavigation-wrapper');

  if(subnav){
  
    wrapper.querySelector('.nav-toggle.back').addEventListener('click', (e)=> {
      wrapper.classList.contains('sub-active') && toggleClass(wrapper, 'top-active', 'sub-active');
    });

    wrapper.querySelector('.nav-toggle.forward').addEventListener('click', (e)=> {
      wrapper.classList.contains('top-active') && toggleClass(wrapper, 'sub-active', 'top-active');
    });

    wrapper.querySelector('.nav-close').addEventListener('click', toggleNav);

    window.addEventListener('resize', () =>{
      setSubnavHeight();
    });
  }
  
  // toggle off nav when backdrop is clicked
  document.querySelector('.mobile_nav_backdrop').addEventListener('click', toggleNav);

  // toggle off navigation if the browser width is expanded past tablet
  window.matchMedia( "(min-width: 1025px)" ).addEventListener('change', (e) => {
    document.getElementsByTagName("body")[0].classList.contains('display-subnav') && toggleNav();
  });
}

const setSubnavHeight = () => {
  const controls = document.querySelector('.mobile-subnav-controls');
  const header = document.querySelector('.nav-main-wrapper');
  const nav = document.querySelector('.nav-accordion-wrapper .nav-accordion');
  nav.style.height = `${window.innerHeight - header.offsetHeight - controls.offsetHeight}px`;
}

const getSubnav = () => {
  return document.querySelector('.nav-accordion-wrapper');
}

const toggleNav = () => {
  const body = document.getElementsByTagName("body")[0];
  const trigger = document.querySelector('.mobile-secondary-trigger');

  // toggle active state of header icon
  trigger.classList.contains('active') ? trigger.classList.remove('active') : trigger.classList.add('active');
  
  // toggle visual state of nav
  if(body.classList.contains('display-subnav')){
    body.classList.remove('display-subnav');
    shouldContentScroll(true);
  } else {
    body.classList.add('display-subnav');
    setSubnavHeight();
    shouldContentScroll(false);
  }
  
  // if the subnav exists, and it is displayed, toggle classes
  // this resets nav to default state when it is toggled off
  const subnavWrapper = document.querySelector('.subnavigation-wrapper');
  if(subnavWrapper && body.classList.contains('display-subnav')){
    toggleClass(subnavWrapper, 'sub-active', 'top-active');
  }
}

const toggleClass = (el, add, remove) => {
  el.classList.add(add);
  el.classList.remove(remove);
};

export { MobileSubNavigation }
