let introBtn = document.querySelector(".intro__btn");
let modalWindow = document.querySelector(".modal");
let modalWindowActive = document.querySelector(".modal--active");

introBtn.addEventListener("click", showModal);

function showModal() {
    modalWindow.classList.add("modal--active");
}