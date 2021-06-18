"use strict";

const navigationBtns = document.querySelectorAll(".card__navigation-button");

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
const navLinks = document.querySelectorAll(".navbar__link");

const container = document.querySelector(".container");
const openNavbarIcon = document.querySelector(".open-navbar-icon");
const closeNavbarIcon = document.querySelector(".close-navbar-icon");

// Navigation for card
navigationBtns.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.parentElement.parentElement.classList.toggle("change")
  )
);

//Nav-links background
let i = 0;
navLinks.forEach(
  (link) => (link.style.cssText = `background-color:${colors[i++]}`)
);

//Navbar functionality
openNavbarIcon.addEventListener("click", () => {
  container.classList.add("change");
});

closeNavbarIcon.addEventListener("click", () => {
  container.classList.remove("change");
});
