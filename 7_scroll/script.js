const menu = document.querySelector(".menu-icon");
const links = document.querySelector(".links");
const homePage = document.querySelector(".page-1");
const navbar = document.querySelector("nav");
const date = document.querySelector("#date");
const button = document.querySelector(".button");

// ****** current date showcase ******
date.innerHTML = new Date().getFullYear();

// ****** mobile navbar showcase ******
menu.addEventListener("click", () => {
    links.classList.toggle("active");
});

// ****** fixed navbar ******
window.addEventListener("scroll", () => {
    const navbarHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navbarHeight) {
        navbar.classList.add("fixed-navbar");
        button.classList.add("show-button");
    } else {
        navbar.classList.remove("fixed-navbar");
        button.classList.remove("show-button");
    }
});

// ****** smooth scroll ******
const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // Calculate navbar height dynamically
        const navbarHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-navbar");

        let position = element.offsetTop - navbarHeight;

        if (!fixedNav) {
            position = element.offsetTop - 80;
            console.log("took position from if condition");
        }

        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth'
        });

        links.classList.remove("active");
    });
});


