// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination,Autoplay } from "swiper";
Swiper.use([Navigation, Pagination,Autoplay]);

(function () {
  //get all swipers on the page
  const swipers = document.querySelectorAll("[data-swiper]");
  swipers.forEach((swiper) => {
    let options = swiper.dataset.swiper
      ? JSON.parse(swiper.dataset.swiper)
      : {};
    new Swiper(swiper, options);
  });
  //development purpose
  console.log(swipers);

  const swiper = new Swiper('.services__content', {
    autoplay: {
      delay: 3000,
      reverseDirection:false
    },
    loop:true,
    pagination: {
      el: '.services-swiper-pagination',
      type: 'bullets',
      clickable:true
    },
    
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 15,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 840px
      840: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })
})();
