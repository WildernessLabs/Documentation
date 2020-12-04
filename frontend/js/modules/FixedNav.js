const SetFixed = (element, parent) => {

  try {
    const headerEl = document.querySelector('.nav-main-wrapper');
    const scrollTop =  headerEl.offsetHeight;
    const offsetTop = headerEl.offsetHeight;
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
      });
    }

    function setFixedState(elem){

      const scrollPosition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
      const elementOffset = scrollPosition + elem.offsetHeight;
      const isMaxHeight = elem.offsetHeight >= window.innerHeight;

      if(scrollPosition > scrollTop && elementOffset < footerOffset){
        elem.classList.remove('static-top', 'fixed-bottom');
        
        if(isMaxHeight){
          elem.classList.add('max-height');
        }
        
        if(!elem.classList.contains('fixed-element')){
          elem.classList.add('fixed-element');
          elem.style.top = offsetTop;

          if(parent) matchWidth(elem, parent);
        }
        
      } else if(scrollPosition < scrollTop) {
        elem.classList.remove('fixed-element', 'fixed-bottom');
        elem.classList.add('static-top');
        elem.style.top = `${scrollTop}px`;
        elem.style.bottom = 'inherit';

      }

      // else if(elementOffset > footerOffset && !isMaxHeight){
      //   // elem.classList.remove('fixed-element', 'static-top');
      //   // elem.classList.add('fixed-bottom');
      //   // elem.style.top = 'auto';
      //   // elem.style.bottom = '0px';
      // }
    }
  } catch(error){
    console.log(`Element: ${element} does not exist, cannot set to fixed`);
  }
}

const matchWidth = (el, par) => {
  console.log(el);
  if(el.classList.contains('fixed-element')){
    const width = par.getBoundingClientRect().width
    el.style.width = `${width}px`;
  } else if(el.style.width != 'auto'){
    el.style.width = 'auto';
  }
}

export { SetFixed }
