(() => {
const modalWindow = document.querySelector('.js-modal-window');
const openModalBtn = document.querySelector('.js-open-modal');
const closeModalBtn = document.querySelector('.js-close-modal');


const openMenu = () => {
    modalWindow.classList.add('modal-visible');
};

const closeMenu = () => {
    modalWindow.classList.remove('modal-visible');
};


openModalBtn.addEventListener('click', openMenu);
closeModalBtn.addEventListener('click', closeMenu);
})();