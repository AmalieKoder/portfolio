const navbar = document.querySelector(".ul");

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