let navLinks = document.querySelector('.navbar__menu');
let menu = document.querySelector('.navbar__toggle');

let mobileMenu = () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);