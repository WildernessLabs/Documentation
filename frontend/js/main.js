import { doesExist } from './Utils';
import Accordion from './modules/Accordion';
import FixedNav from './modules/FixedNav';

const main = () => {

  // initialize navigation accordion if it exists
  const nav_selector = '.nav-accordion'
  if(doesExist(nav_selector)){
    Accordion(nav_selector);
    FixedNav(nav_selector)
  }
 
}

main();