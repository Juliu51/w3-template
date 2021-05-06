"use strict";

let menuPirmas = document.querySelector('.menu');
let menu = document.querySelector('.container');
let menuAntras = document.querySelector('.contact');
let isjungtiContact = document.querySelector('.contact_lentele');
let isjungtiMenu = document.querySelector('.menu_lentele');

menuPirmas.addEventListener('click', () => {

    if (menu.className == 'container on') {
        isjungtiContact.classList.remove('off');
    } else {
        menu.classList.add('on');
        isjungtiContact.classList.add('off');
    }
});

let isjungti = document.querySelector('.isjungti');

isjungti.addEventListener('click', () => {
    if (menu.className == 'container on') {
        menu.classList.remove('on');
        isjungtiContact.classList.remove('off');
    } else {
        menu.classList.add('on');
        isjungtiContact.classList.add('off');
    }
});

menuAntras.addEventListener('click', () => {

    if (menu.className == 'container on') {
        isjungtiMenu.classList.remove('off');
    } else {
        menu.classList.add('on');
        isjungtiMenu.classList.add('off');
    }
});

let ijungti = document.querySelector('.ijungti');

ijungti.addEventListener('click', () => {
    if (menu.className == 'container on') {
        menu.classList.remove('on');
        isjungtiMenu.classList.remove('off');
    } else {
        menu.classList.add('on');
        isjungtiMenu.classList.add('off');
    }
});

