const throttle = require('lodash.throttle');

const ArticleNav = () => {

    try {

      /* Setup Viewport Tracking of Page Headers */
      const headerLinks = document.querySelectorAll('.content-body a[name]');
      
      const offsetTop = document.querySelector('.nav-main-wrapper').offsetHeight + 15;
      // const offsetTop = headerEl;

      if (headerLinks.length > 0) {

        window.addEventListener('scroll', throttle(() =>{
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
              console.log("We are at the bottom!!");

              const links = document.querySelectorAll('.article-nav a')
              const lastLink = links[links.length - 1];
              removeActiveArticleLink();
              setActiveLink(lastLink);
              
            } else {
              for (const link of headerLinks) {
                if(link.getBoundingClientRect().top < offsetTop && !isActive(link)){
                  
                  removeActiveArticleLink();
                  
                  const navLink = document.querySelector(`a[href='#${link.getAttribute('name')}']`);
                  setActiveLink(navLink);
                }
              }
            }
            
          }, 100)
        );
    
      }

      /* Setup Events for Article Links */
      const navLinks = document.querySelectorAll('.article-nav a');
      if (navLinks.length > 0) {
        for (const link of navLinks) {
          link.addEventListener('click', (e) => {
            e.preventDefault();

            const name = e.target.getAttribute('href').substring(1);
            document.querySelector(`a[name='${name}']`).scrollIntoView();

            removeActiveArticleLink();
            setActiveLink(e.target);
          });
        }
      }

    } catch(error){
      console.log('No Article Nav on Page');
    }
}

const isActive = (elem) => {
  return elem.classList.contains('active-header-link');
}

const setActiveLink = (elem) => {
  elem.classList.add('active-header-link');
}

const removeActiveArticleLink = () => {
  var links = document.querySelectorAll('.active-header-link');

  [].forEach.call(links, function(el) {
      el.classList.remove('active-header-link');
  });
}

const isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight - 400 || document.documentElement.clientHeight - 400) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default ArticleNav
