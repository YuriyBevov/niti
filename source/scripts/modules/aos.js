import AOS from 'aos';
import {changeLastItemWidth} from '../utils/utils'

const galItems = document.querySelectorAll('.gallery__item');
const isGalleryPage = document.querySelector('.main-catalog');

changeLastItemWidth(galItems)

if(!isGalleryPage && galItems) {
    galItems.forEach((item, i) => {
        i === 3 || i === 5 ? item.setAttribute('data-aos', 'fade-left') :
        i === 4 || i === 7 ? item.setAttribute('data-aos', 'fade-right') :

        item.setAttribute('data-aos', 'fade-up')

        let delay = i === 2 || i === 4 ? 300 : i === 3 || i === 5 ? 400 : i === 7 ? 350 : 150

        item.setAttribute('data-aos-delay', delay)
    })
} else if (isGalleryPage && galItems) {
    galItems.forEach((item, i) => {
        item.setAttribute('data-aos', 'fade-up')

        let delay = i < 6 ? 150 * (i + 1) : 25 * i

        item.setAttribute('data-aos-delay', delay)
    })
}

AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 150,
    disable: 'phone'
});

