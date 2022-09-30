let navLinks = document.querySelector('.navbar__menu');
let menu = document.querySelector('.navbar__toggle');
let navLogo = document.querySelector('#navbar__logo');

let mobileMenu = () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

let closeMobileMenu = () => {
    let bars = document.querySelector('.navbar__toggle');
    if(window.innerWidth <= 960 && bars){
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    }
}

navLinks.addEventListener('click', closeMobileMenu);
navLogo.addEventListener('click', closeMobileMenu);

let highlightNavbar = () => {
    let highlight = document.querySelector('.highlight');
    let homePage = document.querySelector('#home-page');
    let servicesPage = document.querySelector('#services-page');
    let poductsPage = document.querySelector('#products-page');
    let scrollPosition = window.scrollY;
    
    if(window.innerWidth > 960 && scrollPosition < 543){
        homePage.classList.add('highlight');
        servicesPage.classList.remove('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPosition > 543){
        homePage.classList.remove('highlight');
        servicesPage.classList.add('highlight');
        return;
    }
}

window.addEventListener('scroll', highlightNavbar);