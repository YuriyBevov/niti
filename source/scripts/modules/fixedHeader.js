const header = document.querySelector('.header');
const main = document.querySelector('main');

const intro = document.querySelector('.intro');
console.log(intro.offsetHeight)

let headerInitHeight = header.offsetHeight;

main.style.marginTop = `${headerInitHeight}px`;

header.style.position = 'fixed';

intro.style.height = `${intro.offsetHeight - header.offsetHeight}px`;

window.addEventListener('resize', () => {
    if(headerInitHeight !== header.offsetHeight) {
        headerInitHeight = header.offsetHeight;
        main.style.marginTop = `${headerInitHeight}px`;
        console.log('change')
    }
})