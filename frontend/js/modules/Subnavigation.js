import Accordion from './Accordion';
import { shouldContentScroll } from './Utils';

const MobileSubNavigation = () => {

  const trigger = document.querySelector('.mobile-secondary-trigger');
  
  trigger && trigger.addEventListener('click', (e) => {

    const mobileContainerName = 'mobile_sub_navigation';
    const mobileContainer = document.querySelector(`.${mobileContainerName}`);

    // setup the mobile navigation because this is the first time creating it
    if(!mobileContainer){
      // get references to DOM elements we need
      const body = document.getElementsByTagName("body")[0]
      const header = document.getElementsByTagName("header")[0]

      const subNavigation = document.querySelector('.nav-accordion-wrapper');

      // create the mobile navigation container if it hasn't already been created
      const mobileNav = document.createElement('div');
      mobileNav.id = 'mobile_sub_nav';
      mobileNav.className = mobileContainerName;

      // wrap subnavigation
      const wrapper = document.createElement('div')
      wrapper.classList.add('subnavigation-wrapper',  subNavigation ? 'sub-active' : 'top-active');

      //create copy of topbar
      const topNavigation = document.querySelector('.topbar-wrapper');
      const topNavigationCopy = topNavigation.cloneNode(true);

      // create controls above top menu navigation
      const topNavButtons = document.createElement('div');
      topNavButtons.className = 'top-nav-buttons';

      const close = document.createElement('button');
      close.type = 'button';
      close.innerHTML = '<span class="visually-hidden">Close Nav</span>';
      close.className = 'nav-close';
      topNavButtons.appendChild(close);

      const navForward = document.createElement('button');
      navForward.type = 'button';
      navForward.innerHTML = '<span class="visually-hidden">Go to subpage navigation</span>';
      navForward.className = 'nav-toggle forward';
      topNavButtons.appendChild(navForward);

      // add buttons and topmav to the subnav
      topNavigationCopy.prepend(topNavButtons);
      wrapper.appendChild(topNavigationCopy);

      // create copy of subnavigation
      if(subNavigation){

        // const subNavigationWrapper = document.createElement('div');
        // subNavigationWrapper.className = 'mobile-accordion-wrapper';

        const subNavigationCopy = subNavigation.cloneNode(true);
        subNavigationCopy.classList.remove('fixed-element');
        subNavigationCopy.style = "";

        // subNavigationWrapper.appendChild(subNavigationCopy);

        wrapper.appendChild(subNavigationCopy);
      }

      // create backdrop
      const backdrop = document.createElement('div');
      backdrop.classList.add('mobile_nav_backdrop');
      mobileNav.appendChild(backdrop);

      // add mobile navigation to the DOM
      mobileNav.classList.add(subNavigation ? 'with-subnav' : 'no-subnav');
      mobileNav.appendChild(wrapper);

      // create accordion
      setTimeout(()=>{
        Accordion(document.querySelector(`.${mobileContainerName} .nav-accordion`));
      });
      
      trigger.parentNode.insertBefore(mobileNav, trigger.nextSibling);

      /* Navigation Events */
      if(subNavigation){
        document.querySelector('.subnavigation-wrapper .nav-toggle.back').addEventListener('click', (e)=> {
          wrapper.classList.contains('sub-active') ? 
            toggleClass(wrapper, 'top-active', 'sub-active') :
            toggleClass(wrapper, 'sub-active', 'top-active');
        });

        document.querySelector('.subnavigation-wrapper .nav-toggle.forward').addEventListener('click', (e)=> {
          wrapper.classList.contains('top-active') ? 
            toggleClass(wrapper, 'sub-active', 'top-active') :
            toggleClass(wrapper, 'top-active', 'sub-active');
        });

        document.querySelector('.subnavigation-wrapper .nav-close').addEventListener('click', toggleNav);
      }
      
      backdrop.addEventListener('click', toggleNav);

      // toggle off navigation if the browser width is expanded
      window.matchMedia( "(min-width: 1025px)" ).addEventListener('change', (e) => {
        body.classList.contains('display-subnav') && toggleNav();
      });
    }

    toggleNav();
  });
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
    shouldContentScroll(false);
  }
  
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
