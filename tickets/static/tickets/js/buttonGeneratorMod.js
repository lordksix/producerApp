const createButton = (func, classes, ariaLabel, textContent = null, href = null, data = null, index = null, innerChild = null) => {
  const span = document.createElement('span');
  span.ariaLabel = ariaLabel;
  const button = document.createElement('button');
  button.type = func;
  button.classList.add(`${classes}`);
  button.setAttribute(`data-${data}`, index);
  button.textContent = textContent;
  if (innerChild) button.appendChild(innerChild);
  if (href) button.addEventListener('click', () => window.location.href = href);
  span.appendChild(button);
  return span;
};

export {
  createButton,
};