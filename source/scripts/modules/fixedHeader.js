const header = document.querySelector('.header');
const main = document.querySelector('main');
const intro = document.querySelector('.intro');



// header.style.position = 'fixed';

/* let headerInitHeight = header.offsetHeight;

console.log(headerInitHeight)

main.style.marginTop = `${headerInitHeight}px`;

console.log(intro.offsetHeight) */

// intro.style.height = `${intro.offsetHeight - headerInitHeight}px`

// let initialHeight = window.innerHeight;

//intro.style.height = `${intro.offsetHeight - headerInitHeight}px`


/* window.addEventListener('resize', () => {
    if(headerInitHeight !== header.offsetHeight) {
        main.style.marginTop = `${header.offsetHeight - 1}px`;
        //intro.style.height = `${window.innerHeight - header.offsetHeight}px`
    }
});*/


//if(intro) {
    // intro.style.height = `${window.innerHeight - headerInitHeight}px`;
    /*const setHeight = (height) => {
        intro.style.height = `${height - headerInitHeight}px`;
    }*/

    /*const setIntroBlockHeight = () => {
        console.log('resize')
        if(headerInitHeight !== header.offsetHeight) {
            headerInitHeight = header.offsetHeight
            main.style.marginTop = `${header.offsetHeight - 1}px`;
        }*/

        /*if(window.innerWidth > 1440) {
            setHeight(window.innerHeight);
        }*/
    //}

    // setIntroBlockHeight()

    //window.addEventListener('resize', setIntroBlockHeight);

    /*const setIntroBlockHeight = () => {
        const height = window.innerHeight;
        const width = window.innerWidth;

        const checkHeaderHeightChange = () => {
            if(headerInitHeight !== header.offsetHeight) {
                headerInitHeight = header.offsetHeight
                main.style.marginTop = `${header.offsetHeight}px`;
            }
        }

        checkHeaderHeightChange();

        if( height < 534 && width < 1140) {
            checkHeaderHeightChange();
            setHeight(534);
        } 
        
        else if (height < 661 && width > 1140) {
            checkHeaderHeightChange();
            setHeight(700);
        }

        else if (height > 1640) {
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
        if(window.screen.orientation.type === 'portrait-primary') {
            setHeight(window.innerWidth);
        }
    });*/
//}