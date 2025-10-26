'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const burger = document.querySelector('.header__burger');
const headerWrapper = document.querySelector('.header__wrapper');
const lineOne = document.querySelector('.burger__line-one');
const lineTwo = document.querySelector('.burger__line-two');
const navLinks = document.querySelectorAll('.navigation__link');
const openMenu = () => {
    document.body.classList.add('lock');
    headerWrapper.classList.add('_active');
    lineOne.classList.add('active');
    lineTwo.classList.add('active');
};
const closeMenu = () => {
    document.body.classList.remove('lock');
    headerWrapper.classList.remove('_active');
    lineOne.classList.remove('active');
    lineTwo.classList.remove('active');
};
burger.addEventListener('click', () => {
    if (headerWrapper.classList.contains('_active')) {
        closeMenu();
    }
    else {
        openMenu();
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        closeMenu();
        const href = link.getAttribute('href');
        setTimeout(() => {
            window.location = href;
        }, 1000);
    });
});
//# sourceMappingURL=burger.js.map