const Accordion = (el) => {
  try{
    
    if(el){
      const triggers = el.querySelectorAll('.trigger');

      triggers.forEach((trigger) => {
        
        const subMenu = trigger.nextElementSibling;
        
        if(subMenu && subMenu.nodeName == 'UL'){

          const triggerButton = document.createElement('button');
          triggerButton.innerHTML = '<span class="visually-hidden">Toggle</span>';
          triggerButton.classList.add('triggerButton');
          trigger.appendChild(triggerButton);

          trigger.classList.add('has-submenu'); //setup submenu class
          
          if(subMenu.classList.contains('active')){
            subMenu.style.display = 'block';
            trigger.setAttribute('aria-expanded', true);
          } else {
            subMenu.style.display = 'none';
            trigger.setAttribute('aria-expanded', true);
          }
          // subMenu.classList.contains('active') ?  : 
          
          // bind event listeners for expand/collapse
          triggerButton.addEventListener("click", (e) => {
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
                
                // setTimeout(()=>{
                //   window.location.replace(e.target.href);
                // }, 500);

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

export default Accordion
