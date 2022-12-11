"use strict";

let introBtn = document.querySelector(".intro__btn");
let modalWindow = document.querySelector(".modal");
let modalWindowActive = document.querySelector(".modal--active");
let navBtn = document.querySelector(".nav__btn");

navBtn.addEventListener("click", showNav);

introBtn.addEventListener("click", showModal);

function showModal() {
    modalWindow.classList.add("modal--active");
}