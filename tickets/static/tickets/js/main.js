import { menuPopUp, menuPopOut, menuModalResize } from "./MenuModalModule.js";
import { sliderEvents } from "./sliderModule.js";

const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');
const windowWidth = window.innerWidth;
const menuLinks = document.querySelectorAll('.menu li a');

console.log(menuBurger);

window.addEventListener('load', sliderEvents('#slider-wrapper', 'next', 'prev', '.event-slide'))
window.addEventListener('resize', menuModalResize(menuBlock, bodyNode, windowWidth));

menuBurger.addEventListener('click', menuPopUp(menuBurger, menuBlock, bodyNode));
menuOptions.forEach((option) => option.addEventListener('click', menuPopOut(menuBurger, menuBlock, bodyNode)));