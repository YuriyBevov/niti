'use strict'

import swiper from './modules/swiper.js'
// import { adaptiveIntroBlock } from './utils/adaptiveIntroBlock.js'
import mapOverlay from './modules/mapOverlay.js'
// import stickyHeader from './modules/stickyHeader.js'

/*let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`);


adaptiveIntroBlock()

//window.addEventListener('resize', () => adaptiveIntroBlock())

/*window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    adaptiveIntroBlock();
})*/

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', '${window.innerHeight}px')
}

window.addEventListener('resize', appHeight)
appHeight()

const headerHeight = document.querySelector('header').offsetHeight;
const introBlock = document.querySelector('.intro');

introBlock.style.minHeight = 'calc(100vh - ' + (headerHeight) +  'px)';

document.querySelector('main').style.marginTop = headerHeight + 'px';