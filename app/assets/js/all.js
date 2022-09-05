$(function() {
  console.log('Hello Bootstrap5');
});


// --section 8 Swiper--//
// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// --section 4 Swiper--//

const swiper2 = new Swiper('.swiper2', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 1500,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  speed: 1500,
  loop: true,
  spaceBetween: 9,
  slidesPerView: 9,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 4
      },
      992: {
          slidesPerView: 6
      }
  }
  

 });


