const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const header = document.querySelector('.header');

const onClickOpenMenu = () => {
    burger.classList.toggle('opened')
    header.classList.toggle('js-mobile-opened')
};

burger.addEventListener('click', onClickOpenMenu);

window.addEventListener('resize', () => {
    if(window.innerWidth > 767 && header.classList.contains('js-mobile-opened')) {
        header.classList.remove('js-mobile-opened');
        burger.classList.remove('opened')
    }
})