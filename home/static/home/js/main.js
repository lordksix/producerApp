import MenuModal from "./MenuModalModule.js";

const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');
const windowWidth = window.innerWidth;
const menuLinks = document.querySelectorAll('.menu li a');

console.log(menuBurger);

const menuPopUp = () => MenuModal.menuPopUp(menuBurger, menuBlock, bodyNode);
const menuPopOut = () => MenuModal.menuPopOut(menuBurger, menuBlock, bodyNode);
const menuResize = () => MenuModal.menuModalResize(menuBlock, bodyNode, windowWidth);

window.addEventListener('resize', menuResize);

menuBurger.addEventListener('click', menuPopUp);
menuOptions.forEach((option) => option.addEventListener('click', menuPopOut));