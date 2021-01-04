import { isValidEvent } from './Utils';

const Accordion = (el) => {
 

  if(el){
    const triggers = el.querySelectorAll('.trigger');

    triggers.forEach((trigger) => {
      
      const triggerSpan = trigger.querySelector('span');
      const submenu = trigger.nextElementSibling; // reference to subtree, element directly following trigger is always the sub tree
      
      if(submenu && submenu.nodeName == 'UL'){

        // SETUP MARKUP
        // create trigger buttons if one doesn't exist already
        let triggerButton = trigger.querySelector('.triggerButton') || createAccordionTrigger();
        trigger.appendChild(triggerButton);
        
        // setup initial state of menus and buttons
        trigger.classList.add('has-submenu'); //setup submenu class
        
        if(submenu.classList.contains('active')){
          submenu.style.display = 'block';
          trigger.setAttribute('aria-expanded', true);
        } else {
          submenu.style.display = 'none';
          trigger.setAttribute('aria-expanded', false);
        }

        // BIND EVENTS
        trigger.addEventListener('click', (e) => { e.preventDefault(); });

        triggerSpan.addEventListener('click', (e) => { onTriggerLink(e); });
        triggerSpan.addEventListener('keydown', (e) => { onTriggerLink(e); });

        triggerButton.addEventListener('click', (e) => { onTriggerButton(e) }); // addEventListener
        
        function onTriggerLink(e){
          if(isValidEvent(e)){
            window.location.replace(trigger.href);
          }
        }

        function onTriggerButton(e){
          e.preventDefault();

          const triggerClasses = trigger.classList;
          const submenuClasses = submenu.classList;

          // toggle active class of 'trigger' and 'ul' menu
          if(triggerClasses.contains('has-submenu')){
            
            // set accordion tree to active
            if(!triggerClasses.contains('active')){

              triggerClasses.add('active');
              // setTimeout required to toggle display prop before class prop
              // display required to remove elements from DOM when hidden
              submenu.style.display = 'block';
              setTimeout(()=>{
                submenuClasses.add('active');
              }, 1);
              

            } else {
              triggerClasses.remove('active');
              submenuClasses.remove('active');
              
              setTimeout(()=>{
                  submenu.style.display = 'none';
              }, 100);
            }
          }
        }
      } 
    });
  }
}

const createAccordionTrigger = () => {
  const triggerButton = document.createElement('button');
  triggerButton.innerHTML = '<span class="visually-hidden">Toggle</span>';
  triggerButton.classList.add('triggerButton');

  return triggerButton;
}

export default Accordion
