const header = document.querySelector('.header');
const main = document.querySelector('main');
const intro = document.querySelector('.intro');

header.style.position = 'fixed';

let headerInitHeight = header.offsetHeight;

main.style.marginTop = `${headerInitHeight}px`;
intro.style.height = `${window.innerHeight - headerInitHeight}px`;

let initialHeight = window.innerHeight;
console.log('initialHeight', initialHeight)

const setHeight = (height) => {
    intro.style.height = `${height - headerInitHeight}px`;
}

const setIntroBlockHeight = () => {
    console.log(window.innerHeight, initialHeight)
    const height = window.innerHeight;
    // console.log('height', height)
    const width = window.innerWidth;



    const checkHeaderHeightChange = () => {
        if(headerInitHeight !== header.offsetHeight) {
            headerInitHeight = header.offsetHeight
            main.style.marginTop = `${header.offsetHeight}px`;
        }
    }

    checkHeaderHeightChange();

    if( height < 534 && width < 1140) {
        // console.log('height < 534 && width < 1140')
        checkHeaderHeightChange();
        setHeight(534);
    } 
    
    else if (height < 661 && width > 1140) {
        // console.log('height < 661 && width > 1140')
        checkHeaderHeightChange();
        setHeight(700);
    }

    else if (height > 1640) {
        // console.log('height > 1640')
        checkHeaderHeightChange();
        setHeight(960);
    }

    else if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  {
        setHeight(window.innerHeight);
    }
}

setIntroBlockHeight();

window.addEventListener('resize', setIntroBlockHeight);

window.addEventListener('orientationchange', () => {
    console.log(window.screen.orientation.type)
    if(window.screen.orientation.type === 'portrait-primary') {
        console.log(window)
        setHeight(window.innerWidth);
    }
});