import Accordion from './modules/accordion';
import ArticleNav from './modules/articlenav';
import { SetFixed } from './modules/fixednav';
import { FixedNavigation, MobileNavigation  } from './modules/navigation'
import { MobileSubNavigation  } from './modules/subnavigation'
import { Codeblock } from './modules/codeblock';
import { Darkmode } from './modules/darkmode';

const main = () => {

  // initialize navigation accordion if it exists
  Accordion(document.querySelector('.sidebar .nav-accordion'));

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