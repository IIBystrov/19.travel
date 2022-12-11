"use strict";

let introBtn = document.querySelector(".intro__btn");

let modalWindow = document.querySelector(".modal");
let modalWindowActive = document.querySelector(".modal--active");

let navBtn = document.querySelector(".nav__btn");
let btnLine = document.querySelectorAll(".btn__line");
let btnLineTop = btnLine[0];
let btnLineMiddle = btnLine[1];
let btnLineBottom = btnLine[2];

navBtn.addEventListener("click", animNavBtn);

function animNavBtn() {
    btnLineTop.classList.toggle("btn__line--top");
    btnLineMiddle.classList.toggle("btn__line--middle");
    btnLineBottom.classList.toggle("btn__line--bottom");
}

introBtn.addEventListener("click", showModal);

function showModal() {
    modalWindow.classList.add("modal--active");
}