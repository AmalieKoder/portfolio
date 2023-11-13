// Henter fra themeToggle.js

import { themeToggled } from "./themeToggle.js";

// Henter fra HTML til JavaScript

const button = document.querySelector(".img");


// Når denne knappen hører et klik skal (themeToggled) shifte backgrunnsfargen

button.addEventListener("click", themeToggled);




