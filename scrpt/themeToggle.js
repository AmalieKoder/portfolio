// Lager en funksjon til en knapp som kan shifte bakgrunnsfargen
// Og exporter til script.js

export function themeToggled() {
    const body = document.querySelector("body");
    body.classList.toggle("darkMode");
    console.log("button clicked");
}