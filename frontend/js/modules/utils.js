const shouldContentScroll = (val) => {
  const body = document.getElementsByTagName("body")[0]
  const overflow = val ? 'auto' : 'hidden';

  body.style.overflow = overflow;
}

const isValidEvent = (e) => {
  return e.keyCode === 13 || e.type == 'click' ? true : false
}

export { shouldContentScroll, isValidEvent }