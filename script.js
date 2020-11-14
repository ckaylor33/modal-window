'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = () => {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  //No need for the class selector .hidden - dot only for the selector, just passing in the name of the class
};

const closeModal = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

//we are using the functionality of adding and removing classes all the time in order to change the appearence of elements on the page

//by adding and removing a class we can activate and de-activate certain styles at the same time
