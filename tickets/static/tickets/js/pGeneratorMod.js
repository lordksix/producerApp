const createP = (classes, textContent, data = null, index = null) => {
  const pTag = document.createElement('p');
  if((typeof classes) === 'object') classes.forEach((class0) => pTag.classList.add(`${class0}`));
  else if(classes) pTag.classList.add(`${classes}`);
  if (data) pTag.setAttribute(`data-${data}`, index);
  pTag.textContent = textContent;
  return pTag;
};

export {
  createP,
};