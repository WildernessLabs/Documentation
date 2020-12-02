import { doesExist } from './Utils';
import Accordion from './modules/Accordion';
import ArticleNav from './modules/ArticleNav';
import { SetFixed } from './modules/FixedNav';
import { FixedNavigation, MobileNavigation } from './modules/Navigation'

const main = () => {

  // initialize navigation accordion if it exists
  const nav_selector = '.nav-accordion'
  Accordion(nav_selector);
  SetFixed(nav_selector);
  
  SetFixed('.article_inner');
 
  ArticleNav();

  MobileNavigation();
  FixedNavigation();
}

main();