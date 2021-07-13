'use strict'

import swiper from './modules/swiper.js'
//import { adaptiveIntroBlock } from './utils/adaptiveIntroBlock.js'
import mapOverlay from './modules/mapOverlay.js'
//import stickyHeader from './modules/stickyHeader.js'




let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`);


//adaptiveIntroBlock()

//const onWindowResizeHandler = () => adaptiveIntroBlock()
// window.addEventListener('resize', onWindowResizeHandler)

window.addEventListener('resize', () => {
    console.log(document.documentElement)
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})