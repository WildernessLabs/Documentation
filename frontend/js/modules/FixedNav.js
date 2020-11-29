const SetFixed = (element) => {

  try {
    const headerEl = document.querySelector('header');
    const scrollTop =  headerEl.offsetHeight;
    const offsetTop = headerEl.offsetHeight;
    const footerOffset = document.querySelector('footer').offsetTop;

    // set initial state of fixed element
    const el = document.querySelector(element);
    setFixedState(el);

    window.addEventListener('scroll', (e) => {
      setFixedState(el);
    });
    
    function setFixedState(elem){

      const scrollPosition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
      const elementOffset = scrollPosition + elem.offsetHeight;
      const isMaxHeight = elem.offsetHeight >= window.innerHeight;

      if(scrollPosition > scrollTop && elementOffset < footerOffset){
        elem.classList.remove('static-top', 'fixed-bottom');
        
        if(isMaxHeight){
          elem.classList.add('max-height');
        }

        elem.classList.add('fixed-element');
        elem.style.top = offsetTop;

      } else if(scrollPosition < scrollTop) {
        elem.classList.remove('fixed-element', 'fixed-bottom');
        elem.classList.add('static-top');
        elem.style.top = '0px';
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

export { SetFixed }
