// Henter fra themeToggle.js

import { themeToggled } from "./themeToggle.js";

// Henter fra HTML til JavaScript

const button = document.querySelector("button");
const navbar = document.querySelector(".ul");

// Når denne knappen hører et klik skal (themeToggled) shifte backgrunnsfargen

button.addEventListener("click", themeToggled);

let navOpen = false;

function toggleNav() {
    if (navOpen === false) {
        navbar.classList = "showNav";
        navOpen = true;
    }
    else {
        navbar.classList = "ul";
        navOpen = false;
    }
}


