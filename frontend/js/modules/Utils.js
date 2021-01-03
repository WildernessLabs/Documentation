const shouldContentScroll = (val) => {
  const body = document.getElementsByTagName("body")[0]
  const overflow = val ? 'auto' : 'hidden';

  body.style.overflow = overflow;
}

export { shouldContentScroll }