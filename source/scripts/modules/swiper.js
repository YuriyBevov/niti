import Swiper, { Autoplay, Thumbs, Zoom, EffectFade, Navigation} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom, EffectFade, Navigation]);

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

// Страница товара

const thumbsSliderMain = document.querySelector('.thumbs-swiper');

let zoomed = document.querySelectorAll('.zoomist');

let zoomedArray = [];

if(zoomed) {
   zoomed.forEach(element => {
      let zoomer = new Zoomist(element, {
         slider: true,
         zoomer: true,
         maxRatio: 4,
         bounds: true,
         fill: 'fill',
         height: 520,
         zoomRatio: 0.2,
      });

      zoomedArray.push(zoomer);

      let btns = document.querySelectorAll('.thumbs-swiper-button');

      btns.forEach(btn => {
         btn.addEventListener('click', function() {
            zoomer.reset();
         })
      })
   });
}

if(thumbsSliderMain) {
   let sliderThumbs = new Swiper(thumbsSliderMain, {
      slidesPerView: 4,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 0,
      direction: 'horizontal',

      breakpoints: {
         961: {
           spaceBetween: 5,
           slidesPerView: 3,
           direction: "vertical",
         },

         769: {
            slidesPerView: 4,
            direction: "horizontal"
         },

         555: {
            slidesPerView: 3,
            direction: "vertical"
         }
      },
   });

   let slider = new Swiper(".thumbs-swiper-main", {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      allowTouchMove: false,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },

      thumbs: {
         swiper: sliderThumbs
      },

      on: {
         slideChange: function() {
            zoomedArray.forEach(el => {
               el.reset();
            })
         }
      },
   });
}