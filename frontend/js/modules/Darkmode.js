const Darkmode = () => {
  try{
    
    const body = document.querySelector('body');
    const theme = localStorage.getItem('theme');

    // Set the theme if one exists in local storage
    // If a theme in local storage doesn't exist, fallback to the OS setting preference
    theme ? updateTheme(body, theme) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 
        updateTheme(body, 'theme-dark') : updateTheme(body, 'theme-light');

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
