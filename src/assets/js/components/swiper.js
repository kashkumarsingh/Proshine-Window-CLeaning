// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

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
})();
