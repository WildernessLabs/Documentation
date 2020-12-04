const Codeblock = () => {
  try{

    const blocks = document.querySelectorAll(`.content-body pre`);

    if(blocks.length > 0){
      blocks.forEach((block) => {

        // create copy button
        const copy = document.createElement('button');
        copy.setAttribute('class', 'copy-code-button');

        // create hidden text element
        const hiddenText = document.createElement('span');
        // hiddenText.setAttribute('class', 'visually-hidden');
        hiddenText.innerHTML = 'Copy Code Example';

        // add elements to DOM
        copy.appendChild(hiddenText);
        block.appendChild(copy);

        copy.addEventListener('click', (e)=> {
          copyCode(block);
        });
        
      });
    }

  }catch(error){
    console.log(`Element: ${el} does not exist, cannot init`);
  }
}

const copyCode = (el) => {
  
  // set range of copy
  const range = document.createRange();
  range.selectNodeContents(el);

  // set your selection
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  // trigger copy
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
};

export { Codeblock }
