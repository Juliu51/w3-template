"use strict";

let menuPirmas = document.querySelector('.menu');
let menu = document.querySelector('.container');

menuPirmas.addEventListener('click', () => {

    if (menu.className == 'container on') {
        console.log(true);
    } else {
        menu.classList.add('on');
    }
});
console.log(menu);

let isjungti = document.querySelector('.isjungti');

isjungti.addEventListener('click', () => {
    if (menu.className == 'container on') {
        menu.classList.remove('on');
    } else {
        menu.classList.add('on');
    }
});
console.log(isjungti);