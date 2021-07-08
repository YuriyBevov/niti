import Swiper from 'swiper'

const sliderDelay = 3000;

let iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {
    new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
    
        autoplay: {
          delay: sliderDelay,
        }
    });
}