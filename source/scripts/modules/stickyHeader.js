console.log('stickyHeader')

import {getPosY} from '../utils/functions.js';
import {getElCurHeight} from '../utils/functions.js';

export const stickyHeader = function () {
  const header = document.querySelector('.header');
  const headerInitialHeight = getElCurHeight(header);

  const onScrollHandler = () => {
    if(window.pageYOffset > headerInitialHeight) {
      header.classList.add('header-sticky');
    } else if (window.pageYOffset < headerInitialHeight && header.classList.contains('header-sticky')) {
      header.classList.remove('header-sticky');
    }
  }

  if(header) {
    document.addEventListener('scroll', onScrollHandler);
  }
}();