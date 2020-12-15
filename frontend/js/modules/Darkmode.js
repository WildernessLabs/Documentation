const Darkmode = () => {
  try{

    const toggle = document.querySelector(`.dark-mode-toggle`);
  
    toggle.addEventListener('click',(e) =>{

      const body = document.querySelector('body');

      body.classList.contains('theme-light') ?
        toggleClass(body, 'theme-dark', 'theme-light') :
        toggleClass(body, 'theme-light', 'theme-dark');
    });

  }catch(error){
    console.log(`Cannot init darkmode toggle`);
  }
}


const toggleClass = (el, add, remove) =>{
  el.classList.remove(remove);
  el.classList.add(add);
}

export { Darkmode }
