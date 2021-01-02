const createCloseButton = (el, nav, body) => {

    const close = document.createElement('button');
    close.innerHTML = '<span class="visually-hidden">Close</span>';
    close.id = 'close__nav';
    close.classList.add('close');

    el.insertBefore(close, nav);

    close.addEventListener('click', () => { 
        body.classList.remove('mobile__nav');
        body.removeChild(el);

        toggleHeaderDisplay('block');
        shouldContentScroll(true)
    });
}

const toggleHeaderDisplay = (val) => {
  const header = document.getElementsByTagName("header")[0]

  header.style.display = val;
}

const shouldContentScroll = (val) => {
  const body = document.getElementsByTagName("body")[0]
  const overflow = val ? 'auto' : 'hidden';

  body.style.overflow = overflow;
}


// Checks if page is scrolled
// Adds class to body if page is scrolled past 0
const checkIsScrolled = () => {

    const body = document.body;
    const classes = body.classList;
    const isScrolled = classes.contains("scrolled")

    window.scrollY > 0 ? !isScrolled && classes.add('scrolled') : isScrolled && classes.remove('scrolled')
}


/*    Exported Methods    */

const MobileNavigation = () => {

  const trigger = document.getElementById('mobile-trigger');
  
  trigger && trigger.addEventListener('click', (e) => {

      // get references to DOM elements we need
      const body = document.getElementsByTagName("body")[0]
      const header = document.getElementsByTagName("header")[0]

      // create the mobile navigation container if it hasn't already been created
      const mobileContainer = document.getElementById('mobile__nav');
      const mobileNav = mobileContainer ? mobileContainer : document.createElement('div');
      
      // setup the mobile navigation because this is the first time creating it
      if(!mobileContainer){
          mobileNav.id = 'mobile__nav';
          mobileNav.className = 'mobile content__section';

          const navigation = document.querySelector('.nav-main');
          const navigationCopy = navigation.cloneNode(true);
          mobileNav.appendChild(navigationCopy);

          createCloseButton(mobileNav, navigationCopy, body);
      }
  
      // add mobile navigation to the DOM
      body.insertBefore(mobileNav, header);
      
      // add class to transition in menu
      mobileNav.classList.add('open');
      
      toggleHeaderDisplay('none');
      shouldContentScroll(false);
  });
}


const FixedNavigation = () => {

  document.addEventListener('DOMContentLoaded', checkIsScrolled, false);
  window.addEventListener('scroll', checkIsScrolled);
}


export { MobileNavigation, FixedNavigation }
