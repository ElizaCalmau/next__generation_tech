let productMenuHighligher = () => {
    let highlight = document.querySelector('.highlight');
    let poductsPage = document.querySelector('#products-page');
    let loginPage = document.querySelector('#login-page');
    let scrollPosition = window.scrollY;
    if (window.innerWidth > 960 && scrollPosition < 600){
        poductsPage.classList.add('highlight');
        loginPage.classList.remove('highlight');
//     } else if (window.innerWidth > 960 && scrollPosition > 600){
//         loginPage.classList.add('highlight');
//         poductsPage.classList.remove('highlight');
    }
 } 

window.addEventListener('scroll', productMenuHighligher);

let loginNavItem = document.querySelector('#login-page');
let orderPage = document.querySelector('.order__page');

let loginPopup = () => {
    orderPage.classList.toggle('active');
    loginNavItem.classList.toggle('is-active');
}
loginNavItem.addEventListener('click', loginPopup)
// orderPage.addEventListener('click', loginPopup)
