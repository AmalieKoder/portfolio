// Henter fra themeToggle.js

import { themeToggled } from "./themeToggle.js";


// Henter fra HTML til JavaScript

const button = document.querySelector(".img");
const colorShift = document.querySelector("h1");



// Når denne knappen hører et klik skal (themeToggled) shifte backgrunnsfargen

button.addEventListener("click", themeToggled);



// Når denne function hører et click skal (h1) shifte en random fargen
colorShift.onclick = function () {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.color = "rgb(" + red + "," + green + "," + blue + ")";
};






