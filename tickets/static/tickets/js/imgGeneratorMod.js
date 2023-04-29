const createImg = (classes, src, alt = null, data = null, index = null) => {

  const img = document.createElement('img');
  img.src = src;
  if((typeof classes) === 'object') classes.forEach((class0) => img.classList.add(`${class0}`));
  else if(classes) img.classList.add(`${classes}`);
  if (data) img.setAttribute(`data-${data}`, index);
  if (alt) img.alt = alt;
  return img;
};

export {
  createImg,
};