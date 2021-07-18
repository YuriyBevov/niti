const header = document.querySelector('.header');
const main = document.querySelector('main');

const intro = document.querySelector('.intro');
console.log(intro.offsetHeight)

main.style.marginTop = `${header.offsetHeight}px`;

header.style.position = 'fixed';

intro.style.height = `${intro.offsetHeight - header.offsetHeight}px`;

window.addEventListener('resize', () => {
    const header = document.querySelector('.header');
    main.style.marginTop = `${header.offsetHeight}px`;
    
})