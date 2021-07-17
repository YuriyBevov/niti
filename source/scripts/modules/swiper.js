import gsap from "gsap";
import Swiper, { Autoplay, /*Pagination,*/ Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, /*Pagination,*/ Navigation, EffectFade ]);
console.log(EffectFade)

const sliderDelay = 5000;

let iSlider = document.querySelector('.intro-swiper-container');

if(iSlider) {
    const introSwiper = new Swiper('.intro-swiper-container', {
        slidesPerView: 1,
        speed: 2000,
        loop: true,
        // spaceBetween: 10,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
    });


    introSwiper.on('click', function()  {
      introSwiper.slideNext()
    })

    introSwiper.on('slideChange', function () {
      gsap.fromTo(".intro-swiper-container .swiper-slide-next p", {scale: 0.5}, {scale: 1, duration: 1});
      gsap.fromTo(".intro-swiper-container .swiper-slide-next .intro-swiper-content", {yPercent: 50}, {yPercent: 0, duration: 1.5});
      gsap.fromTo(".intro-swiper-container .swiper-slide-next h2", {yPercent: 50}, {yPercent: 0, duration: 1});
      gsap.fromTo(".intro-swiper-container .swiper-slide-next a", {yPercent: 250}, {yPercent: 0, duration: 2});
      
      gsap.fromTo(".intro-swiper-container .swiper-slide-prev p", {scale: 0.5}, {scale: 1, duration: 1});
      gsap.fromTo(".intro-swiper-container .swiper-slide-prev .intro-swiper-content", {yPercent: 50}, {yPercent: 0, duration: 1.5});
      gsap.fromTo(".intro-swiper-container .swiper-slide-prev h2", {yPercent: 50}, {yPercent: 0, duration: 1});
      gsap.fromTo(".intro-swiper-container .swiper-slide-prev a", {yPercent: 250}, {yPercent: 0, duration: 1});
    });
}

let sSlider = document.querySelector('.sale-swiper-container');

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

          434: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        },

        /* pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          position: 'bottom'
        }, */

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
    });
}

