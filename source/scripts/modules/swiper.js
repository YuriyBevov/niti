import Swiper, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, Pagination, Navigation, EffectFade ]);
console.log(EffectFade)

const sliderDelay = 3000;

let iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {
    const introSwiper = new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
    
        autoplay: {
          delay: sliderDelay,
          disableOnInteraction: false
        },
    });

    introSwiper.on('click', function()  {
      introSwiper.slideNext()
    })
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
        }
    });
}

