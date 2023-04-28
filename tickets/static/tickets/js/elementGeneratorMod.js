const createElementDefault = (element, classes, innerChild = null, textContent = null, data = null, index = null) => {
  const element = document.createElement(element);
  if((typeof classes) === 'object') classes.forEach((class0) => element.classList.add(`${class0}`));
  else if(classes) element.classList.add(`${classes}`);
  if (data) element.setAttribute(`data-${data}`, index);
  if (innerChild) element.appendChild(innerChild);
  if (textContent) element.textContent = textContent;
  return element;
};

export {
  createElementDefault,
};