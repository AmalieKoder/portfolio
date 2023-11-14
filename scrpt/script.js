// Henter fra themeToggle.js

import { themeToggled } from "./themeToggle.js";


// Henter fra HTML til JavaScript

const button = document.querySelector(".img");



// Når denne knappen hører et klik skal (themeToggled) shifte backgrunnsfargen

button.addEventListener("click", themeToggled);

var colorShift = document.querySelector("h1");

colorShift.onclick = function () {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};






