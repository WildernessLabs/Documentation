const SetFixed = (element, parent, fullHeight) => {

  try {
    const headerEl = document.querySelector('.nav-main-wrapper');
    const headerHeight =  headerEl.offsetHeight;
    const footerOffset = document.querySelector('footer').offsetTop;

    // set initial state of fixed element
    const el = document.querySelector(element);
    setFixedState(el);

    window.addEventListener('scroll', (e) => {
      setFixedState(el);
    });
    
    if(parent){
      window.addEventListener('resize', (e) => {
        matchWidth(el, parent);
        fullHeight == true && setHeightToScreen(el);
        setFixedState(el);
      });
    }

    function setHeightToScreen(el){
      const height = window.innerHeight - el.offsetTop;
      console.log("Set Height", height);
      el.style.height = `${height}px`;
    }
    
    function setFixedState(elem){

      const scrollPosition = window.scrollY || document.body.headerHeight || document.documentElement.headerHeight;
      const elementOffset = scrollPosition + elem.offsetHeight;
      const isMaxHeight = elem.offsetHeight >= window.innerHeight;

      const elTop = elem.getBoundingClientRect().top;
      const navSecondary = document.querySelector('.nav-secondary');
      const navSecondaryBottom = navSecondary.getBoundingClientRect().bottom;

      if(elTop < headerHeight && elementOffset < footerOffset){
        elem.classList.remove('static-top', 'fixed-bottom');

        if(isMaxHeight){
          elem.classList.add('max-height');
        }
        
        if(!elem.classList.contains('fixed-element')){
          elem.classList.add('fixed-element');
          elem.style.top = `${headerHeight}px`;

          if(parent) matchWidth(elem, parent);
        }
        
      } else if(navSecondaryBottom > headerHeight || (isHidden(navSecondary) && window.scrollY == 0)) {
        elem.classList.remove('fixed-element', 'fixed-bottom');
        elem.classList.add('static-top');
        elem.style.top = `inherit`;
        elem.style.bottom = 'inherit';
      }

      fullHeight == true && setHeightToScreen(el);
    }
  } catch(error){
    console.log(`Element: ${element} does not exist, cannot set to fixed`);
  }
}
const isHidden = (el) => {
  return (el.offsetParent === null)
}

const matchWidth = (el, par) => {
  if(el.classList.contains('fixed-element')){
    const width = par.getBoundingClientRect().width
    el.style.width = `${width}px`;
  } else if(el.style.width != 'auto'){
    el.style.width = 'auto';
  }
}

export { SetFixed }
