const menuPopUp = (menuBurger, menuBlock, bodyNode, menuBurgerDisplay = 'none', 
  menuBlockClass = 'menu_popup', bodyNodeClass = 'modal-active') => {
    console.log('popup');
  menuBurger.computedStyleMap.display = `${menuBurgerDisplay}`;
  menuBlock.classList.add(`${menuBlockClass}`);
  bodyNode.classList.add(`${bodyNodeClass}`);
};

const menuPopOut = (menuBurger, menuBlock, bodyNode, menuBurgerDisplay = 'block', 
menuBlockClass = 'menu_popup', menuBlockClassOut = 'out', bodyNodeClass = 'modal-active') => {
  menuBlock.classList.add(`${menuBlockClassOut}`);
  menuBurger.computedStyleMap.display = `${menuBurgerDisplay}`;
  bodyNode.classList.remove(`${bodyNodeClass}`);
  setTimeout(() => menuBlock.classList.remove(`${menuBlockClass}`, `${menuBlockClassOut}`), 500);
};

const menuModalResize = (menuBlock, bodyNode, windowWidth, menuBlockClass = 'menu_popup',
menuBlockClassOut = 'out', bodyNodeClass = 'modal-active') => {
  if (windowWidth >= 768) {
    menuBlock.classList.remove(`${menuBlockClass}`, `${menuBlockClassOut}`)
    bodyNode.classList.remove(`${bodyNodeClass}`);
  }
};

export default {
  menuPopUp,
  menuPopOut,
  menuModalResize,
};