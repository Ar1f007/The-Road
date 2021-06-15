"use strict";

const navigationBtns = document.querySelectorAll(".card__navigation-button");

navigationBtns.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.parentElement.parentElement.classList.toggle("change")
  )
);
