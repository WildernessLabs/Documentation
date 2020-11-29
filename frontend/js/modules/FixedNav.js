const FixedNav = (el) => {

  console.log(`Init fixed on ${el}`)

  window.addEventListener('scroll', (e)=> {
    const scrollTop = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
   
    console.log(`Scroll Top: ${scrollTop}`);

  });
}

export default FixedNav
