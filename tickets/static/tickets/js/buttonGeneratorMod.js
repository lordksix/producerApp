const createButton = (func, classes, ariaLabel, textContent = null, href = null, data = null, index = null, innerChild = null) => {
  const span = document.createElement('span');
  span.ariaLabel = ariaLabel;
  const button = document.createElement('button');
  button.type = func;
  if((typeof classes) === 'object') classes.forEach((class0) => button.classList.add(`${class0}`));
  else if(classes) button.classList.add(`${classes}`);
  if (data) button.setAttribute(`data-${data}`, index);
  if (textContent) button.textContent = textContent;
  if (innerChild) button.appendChild(innerChild);
  if (href) button.addEventListener('click', () => window.location.href = href);
  span.appendChild(button);
  return span;
};

export {
  createButton,
};