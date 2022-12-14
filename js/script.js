"use strict";

// variables

let introBtn = document.querySelector(".intro__btn");

let modalWindow = document.querySelector(".modal");
let modalWindowActive = document.querySelector(".modal--active");

let navBtn = document.querySelector(".nav__btn");
let btnLine = document.querySelectorAll(".btn__line");
let btnLineTop = btnLine[0];
let btnLineMiddle = btnLine[1];
let btnLineBottom = btnLine[2];

let navList = document.querySelector(".nav__list");

let closeBtn = document.querySelector(".modal__close");


// navBtn eventListener

navBtn.addEventListener("click", animNavBtn);

// animNavBtn

function animNavBtn() {
    btnLineTop.classList.toggle("btn__line--top");
    btnLineMiddle.classList.toggle("btn__line--middle");
    btnLineBottom.classList.toggle("btn__line--bottom");

    navList.classList.toggle("nav__list--show");
}

// introBtn eventListener

introBtn.addEventListener("click", showModal);

// showModal

function showModal() {
    modalWindow.classList.add("modal--active");
}

// closeBtn eventListener

closeBtn.addEventListener("click", closeModal);

// closeModal

function closeModal() {
    modalWindow.classList.remove("modal--active");
}