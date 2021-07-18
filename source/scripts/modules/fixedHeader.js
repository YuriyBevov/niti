const header = document.querySelector('.header');
const main = document.querySelector('main');
const intro = document.querySelector('.intro');

header.style.position = 'fixed';

let headerInitHeight = header.offsetHeight;

main.style.marginTop = `${headerInitHeight}px`;
intro.style.height = `${window.innerHeight - headerInitHeight}px`;

const setIntroBlockHeight = () => {
    console.log('func')
    

    const setHeight = (height) => {
        console.log('setHeight')
        intro.style.height = `${height - headerInitHeight}px`;
    }

    const height = window.innerHeight;
    const width = window.innerWidth;

    const checkHeaderHeightChange = () => {

        if(headerInitHeight !== header.offsetHeight) {
            console.log('change header')
            headerInitHeight = header.offsetHeight
            main.style.marginTop = `${header.offsetHeight}px`;
        }
    }

    checkHeaderHeightChange();

    if( height < 534 ) {
        console.log('< 534')
        alert('< 534')

        checkHeaderHeightChange();
        setHeight(534);
    } 
    
    if (height < 661 && width > 1140) {
        console.log('< 661')
        alert('< 661 && width > 1140')

        checkHeaderHeightChange();
        setHeight(700);
    }

    if(height > 1640) {
        alert('> 1640')
        console.log('>')
        checkHeaderHeightChange();
        setHeight(960);
    }
}

setIntroBlockHeight();

window.addEventListener('resize', () => setIntroBlockHeight());