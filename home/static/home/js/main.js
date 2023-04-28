import { menuPopUp, menuPopOut, menuModalResize } from "./MenuModalModule.js";

const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');
const windowWidth = window.innerWidth;
const menuLinks = document.querySelectorAll('.menu li a');

const menuPop = () => menuPopUp(menuBurger, menuBlock, bodyNode);
const menuVanish = () => menuPopOut(menuBurger, menuBlock, bodyNode);
const menuResize = () => menuModalResize(menuBlock, bodyNode, windowWidth);

window.addEventListener('resize', menuResize);

menuBurger.addEventListener('click', menuPop);
menuOptions.forEach((option) => option.addEventListener('click', menuVanish));