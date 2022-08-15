const newsSlider = new Swiper('.news-slider__container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.news-slider__pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.news-slider__button-next',
    prevEl: '.news-slider__button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});
// watchSlidesProgress

const bestDeals = new Swiper('.best-deals__slider', {
  slidesPerView: 3,
  spaceBetween: 30,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  breakpoints: {
    // when window width is >= 640px

    300: {
      slidesPerView: 1.5,
    },

    600: {
      slidesPerView: 2.5,
    },

    1000: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.5,
    },
    1400: {
      slidesPerView: 5.5,
    },
    1800: {
      slidesPerView: 6.5,
    }
  }

});


const sliderMc = new Swiper('.slider-mc', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-mc__button-next',
    prevEl: '.slider-mc__button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});
