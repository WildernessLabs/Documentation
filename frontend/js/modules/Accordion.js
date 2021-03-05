import { isValidEvent } from './utils';

const Accordion = (el, shouldExpandTopLevel) => {
 

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
        
        if(trigger.parentNode.parentNode == el && 
          shouldExpandTopLevel &&
          !submenu.classList.contains('active')) {
            toggleActiveState();
          }
        
        submenu.classList.contains('active') ?
          trigger.setAttribute('aria-expanded', true) :
          trigger.setAttribute('aria-expanded', false);

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
          toggleActiveState();
        }

        function toggleActiveState(){
          // toggle active class of 'trigger' and 'ul' menu
          if(trigger.classList.contains('has-submenu')){
            
            // set accordion tree to active
            if(!trigger.classList.contains('active')){

              swapClasses(trigger, 'active', 'not-active');

              // setTimeout required to toggle display prop before class prop
              // display required to remove elements from DOM when hidden
              setTimeout(()=>{
                swapClasses(submenu, 'active', 'not-active');
              }, 1);
            
            } else {
              swapClasses(trigger, 'not-active', 'active');
              swapClasses(submenu, 'not-active', 'active');
            }
          }
        }
      } 
    });
  }
}

const swapClasses = (el, add, remove) => {
  el.classList.add(add);
  el.classList.remove(remove);
}
const createAccordionTrigger = () => {
  const triggerButton = document.createElement('button');
  triggerButton.innerHTML = '<span class="visually-hidden">Toggle</span>';
  triggerButton.classList.add('triggerButton');

  return triggerButton;
}

export default Accordion
