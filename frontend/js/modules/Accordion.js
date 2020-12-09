const Accordion = (el) => {
  try{
    const accordion = document.querySelectorAll(el);
    const triggers = document.querySelectorAll(`${el} .trigger`);

    if(accordion.length > 0){
      triggers.forEach((trigger) => {
        const subMenu = trigger.nextElementSibling;

        if(subMenu && subMenu.nodeName == 'UL'){
          trigger.classList.add('has-submenu'); //setup submenu class
          subMenu.classList.contains('active') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
          
          // bind event listeners for expand/collapse
          trigger.addEventListener("click", (e) => {
            e.preventDefault();

            // toggle active class of 'trigger' and 'ul' menu
            if(trigger.classList.contains('has-submenu')){
              if(!trigger.classList.contains('active')){

                trigger.classList.add('active');
                // setTimeout required to toggle display prop before class prop
                // display required to remove elements from DOM when hidden
                subMenu.style.display = 'block';
                setTimeout(()=>{
                    subMenu.classList.add('active');
                }, 1);
                
                setTimeout(()=>{
                  window.location.replace(e.target.href);
                }, 500);

              } else {
                trigger.classList.remove('active');
                subMenu.classList.remove('active');
                
                setTimeout(()=>{
                    subMenu.style.display = 'none';
                }, 100);
              }
            }
          }); // addEventListener
          
        } 
      });
    }
  }catch(error){
    console.log(`Element: ${el} does not exist, cannot init accordion`);
  }
}

const toggleClass = (el, add, remove) =>{
    el.classList.remove(remove);
    el.classList.add(add);
}

export default Accordion
