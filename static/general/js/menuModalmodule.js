function menuModal(menuBurger, menuBlock, bodyNode) {
  menuBurger.computedStyleMap.display = 'none';
  menuBlock.classList.add('menu_popup');
  bodyNode.classList.add('modal-active');
}

function menuInteraction(menuBlock, menuBurger, bodyNode) {
  menuBlock.classList.add('out');
  menuBurger.computedStyleMap.display = 'block';
  bodyNode.classList.remove('modal-active');
  setTimeout(() => menuBlock.classList.remove('menu_popup', 'out'), 500);
}

function menuResize(windowWidth, menuBlock, bodyNode) {
  if (windowWidth >= 768) {
    menuBlock.classList.remove('menu_popup', 'out');
    bodyNode.classList.remove('modal-active');
  }
}


export default {
  menuModal,
  menuInteraction,
  menuResize
}