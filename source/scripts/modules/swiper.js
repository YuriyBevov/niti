import gsap from "gsap";
import Swiper, { Autoplay, /*Pagination,*/ Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, /*Pagination,*/ Navigation, EffectFade ]);

const sliderDelay = 5000;
const iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {

    const introSwiper = new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
    
        autoplay: {
          delay: sliderDelay,
          disableOnInteraction: false
        },

        breakpoints: {
          768: {
            speed: 1500,
          },
        },
    });
}

const sSlider = document.querySelector('.sale-swiper-container');

if(sSlider) {
    const saleSwiper = new Swiper('.sale-swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        loop: true,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },

          534: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          
          868: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        },
    });
}

