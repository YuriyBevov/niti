'use strict'

import swiper from './modules/swiper.js'
// import { adaptiveIntroBlock } from './utils/adaptiveIntroBlock.js'
import mapOverlay from './modules/mapOverlay.js'
import menu from './modules/menu.js'
import smoothScroll from './modules/smoothScroll.js'
// import stickyHeader from './modules/stickyHeader.js'



// adaptiveIntroBlock()

// window.addEventListener('resize', () => adaptiveIntroBlock())

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', '${window.innerHeight}px')
}

window.addEventListener('resize', appHeight)
appHeight()


const slides = document.querySelectorAll('.intro-swiper-container .swiper-slide')

console.log(slides)




