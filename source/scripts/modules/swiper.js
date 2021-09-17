import Swiper, { Autoplay, Thumbs, Zoom} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom]);

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

const pSlider = document.querySelector('.product-card-swiper-container');

if(pSlider) {
    let swiper = new Swiper(".product-card-slider-thumbs", {
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      direction: "vertical",

      breakpoints: {
        768: {
          direction: "vertical",
          spaceBetween: 0,
        },

        534: {
          spaceBetween: 10,
          direction: "vertical",
        },
      }
      
    });

    let swiperThumbs = new Swiper(".product-card-slider", {
      zoom: true,
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },
    });
}

