const createDiv = (classes, data = null, index = null, innerChild = null) => {
  const div = document.createElement('div');
  if((typeof classes) === 'object') classes.forEach((class0) => div.classList.add(`${class0}`));
  else if(classes) div.classList.add(`${classes}`);
  if (data) div.setAttribute(`data-${data}`, index);
  if (innerChild) div.appendChild(innerChild);
  return div;
};

export {
  createDiv,
};