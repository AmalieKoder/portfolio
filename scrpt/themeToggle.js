export function themeToggled() {
    const body = document.querySelector("body");
    body.classList.toggle("darkMode");
    console.log("button clicked");
}