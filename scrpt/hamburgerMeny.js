// Henter fra HTML til JavaScript

const navbar = document.querySelector(".ul");

// (let) sjekker navOpen om den er false

let navOpen = false;

// Lager en funksjon til en hamburger knapp
// den dykker opp på telefon
// Henter også fra navn fra CSS

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