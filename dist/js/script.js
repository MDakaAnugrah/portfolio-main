// Nav

const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');

nav.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    navMenu.classList.toggle('hidden');
});

//Navbar Fixed

window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};