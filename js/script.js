"use strict";

let introBtn = document.querySelector(".intro__btn");
let modalWindow = document.querySelector(".modal");
let modalWindowActive = document.querySelector(".modal--active");
let navBtn = document.querySelector(".nav__btn");
let btnLine = document.querySelectorAll(".btn__line");
let btnLineTop = btnLine[1];
let btnLineMiddle = btnLine[2];

navBtn.addEventListener("click", showNav);

introBtn.addEventListener("click", showModal);

function showModal() {
    modalWindow.classList.add("modal--active");
}