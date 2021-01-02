import Accordion from './modules/Accordion';
import ArticleNav from './modules/ArticleNav';
import { SetFixed } from './modules/FixedNav';
import { FixedNavigation, MobileNavigation  } from './modules/Navigation'
import { MobileSubNavigation  } from './modules/Subnavigation'
import { Codeblock } from './modules/Codeblock';
import { Darkmode } from './modules/Darkmode';

const main = () => {

  // initialize navigation accordion if it exists
  Accordion('.nav-accordion');

  // init a fixed sidebar
  const sidebar = document.querySelector('.sidebar');
  sidebar && SetFixed('.nav-accordion', sidebar);

  const articleBar = document.querySelector('.articlebar');
  if(articleBar){
    SetFixed('.article_inner', articleBar);
    ArticleNav();
  }

  MobileNavigation();
  MobileSubNavigation();
  FixedNavigation();

  Codeblock();
  Darkmode();
}

main();