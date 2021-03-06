"use strict"

//Section - pricing-options
const swiper2 = new Swiper('#pricing-options .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      
      1100: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
      900: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        allowSlideNext: true,
        allowSlidePrev: true,
      },
  }

});


//Section - costumers-saying
const swiper = new Swiper('#costumers-saying .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        allowSlideNext: true,
        allowSlidePrev: true,
      },
  }

});


