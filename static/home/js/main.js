import RenderMenuModal from "{% static 'general/js/menuModalmodule'%}";

const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');
const windowWidth = window.innerWidth;

const menuResize = RenderMenuModal.menuResize(windowWidth, menuBlock, bodyNode);
const menuModal = RenderMenuModal.menuModal(menuBurger, menuBlock, bodyNode);
const menuInteraction = RenderMenuModal.menuInteraction(menuBlock, menuBurger, bodyNode);

window.addEventListener('resize', menuResize)

menuBurger.addEventListener('click', menuModal);
menuOptions.forEach((option) => option.addEventListener('click', menuInteraction));