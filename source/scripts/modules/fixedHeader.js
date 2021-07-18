const header = document.querySelector('.header');
const main = document.querySelector('main');
const intro = document.querySelector('.intro');

header.style.position = 'fixed';

let headerInitHeight = header.offsetHeight;

main.style.marginTop = `${headerInitHeight}px`;
intro.style.height = `${window.innerHeight - headerInitHeight}px`;

const setIntroBlockHeight = () => {
    const setHeight = (height) => {
        intro.style.height = `${height - headerInitHeight}px`;
    }

    const height = window.innerHeight;
    const width = window.innerWidth;

    const checkHeaderHeightChange = () => {
        if(headerInitHeight !== header.offsetHeight) {
            headerInitHeight = header.offsetHeight
            main.style.marginTop = `${header.offsetHeight}px`;
        }
    }

    checkHeaderHeightChange();

    if( height < 534 ) {
        checkHeaderHeightChange();
        setHeight(534);
    } 
    
    if (height < 661 && width > 1140) {
        checkHeaderHeightChange();
        setHeight(700);
    }

    if(height > 1640) {
        checkHeaderHeightChange();
        setHeight(960);
    }
}

setIntroBlockHeight();

window.addEventListener('resize', () => setIntroBlockHeight());