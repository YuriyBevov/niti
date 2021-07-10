import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';
Swiper.use([Autoplay, Pagination, Navigation]);

const sliderDelay = 5000;

let iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {
    const introSwiper = new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
    
        autoplay: {
          delay: sliderDelay,
        },
    });
}

let sSlider = document.querySelector('.sale-swiper-container');

if(sSlider) {
    const saleSwiper = new Swiper('.sale-swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 1000,
        loop: true,

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          position: 'bottom'
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        autoplay: {
          delay: 1000,
        }
    });
}

