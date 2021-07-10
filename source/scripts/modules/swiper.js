import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);

const sliderDelay = 3000;

let iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {
    const swiper = new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
    
        autoplay: {
          delay: sliderDelay,
        },
    });
}