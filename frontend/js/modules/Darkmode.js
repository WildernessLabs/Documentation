const Darkmode = () => {
  try{
    
    const body = document.querySelector('body');
  
    const theme = localStorage.getItem('theme');
    theme ? updateTheme(body, theme) : localStorage.setItem('theme', 'theme-light');

    const toggle = document.querySelector(`.dark-mode-toggle`);
    toggle.addEventListener('click',(e) =>{
      
      body.classList.contains('theme-light') ?
        updateTheme(body, 'theme-dark') :
        updateTheme(body, 'theme-light');
    });

  }catch(error){
    console.log(`Cannot init darkmode toggle`);
  }
}


const updateTheme = (el, themeName) =>{
  el.className = '';
  el.classList.add(themeName);
  localStorage.setItem('theme', themeName)
}

export { Darkmode }
