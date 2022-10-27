"use strict";

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menu = document.querySelector('#menu');
const dimmingBlock = document.querySelector('#dimming')

menuOpen.addEventListener('click', function () {
    menu.classList.add('active');
    dimmingBlock.classList.add('active')
});

menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
    dimmingBlock.classList.remove('active');

})