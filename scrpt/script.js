// Henter fra themeToggle.js

import { themeToggled } from "./themeToggle.js";
import {colorShift} from "./themeToggle.js";

// Henter fra HTML til JavaScript

const button = document.querySelector(".img");
const color = document.querySelector("h1");


// Når denne knappen hører et klik skal (themeToggled) shifte backgrunnsfargen

button.addEventListener("click", themeToggled);
color.addEventListener("click", colorShift);






