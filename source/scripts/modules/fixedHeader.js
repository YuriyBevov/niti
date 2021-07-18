const header = document.querySelector('.header');
const main = document.querySelector('main');
const intro = document.querySelector('.intro');

let headerInitHeight = header.offsetHeight;

main.style.marginTop = `${headerInitHeight}px`;

header.style.position = 'fixed';

intro.style.height = `${intro.offsetHeight - header.offsetHeight}px`;

window.addEventListener('resize', () => {
    if(headerInitHeight !== header.offsetHeight) {
        headerInitHeight = header.offsetHeight;
        main.style.marginTop = `${headerInitHeight}px`;
    }
})

window.addEventListener('orientationchange', () => {
    console.log('change', window.screen, intro.offsetHeight, window.innerHeight)
    setTimeout(() => {
        if(window.innerHeight < 500) {
            intro.style.height = `${500 - header.offsetHeight}px`
        } else {
            console.log('else' , window.innerHeight)
            intro.style.height = `${window.innerHeight - header.offsetHeight}px`;
        }
    }, 10);


    
})