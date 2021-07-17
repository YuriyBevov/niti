const header = document.querySelector('.header');
const main = document.querySelector('main');

main.style.marginTop = `${header.offsetHeight}px`;
header.style.position = 'fixed';

window.addEventListener('resize', () => {
    const header = document.querySelector('.header');
    main.style.marginTop = `${header.offsetHeight}px`;
})