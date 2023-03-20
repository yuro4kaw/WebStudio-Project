(() => {
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');


const openMenu = () => {
    mobileMenu.classList.add('menu-visible');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    mobileMenu.classList.remove('menu-visible');
    document.body.style.overflow = 'visible';
};

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('menu-visible');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'visible';
});

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
})();