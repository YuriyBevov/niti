'use strict'

import swiper from './modules/swiper.js'
import { adaptiveIntroBlock } from './utils/adaptiveIntroBlock.js'
import mapOverlay from './modules/mapOverlay.js'







adaptiveIntroBlock()

const onWindowResizeHandler = () => adaptiveIntroBlock()
window.addEventListener('resize', onWindowResizeHandler)