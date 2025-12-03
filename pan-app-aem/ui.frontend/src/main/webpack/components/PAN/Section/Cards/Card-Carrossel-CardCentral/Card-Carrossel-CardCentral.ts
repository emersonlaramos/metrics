import "./Card-Carrossel-CardCentral.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

(function() {
  document.querySelectorAll('[data-js=swiper-group-central]').forEach((swiperWrappCentral, index) => {
    swiperWrappCentral.querySelector('.swiper').classList.add(`swiper-central-id-${index}`);
    swiperWrappCentral.querySelector('.swiper-pagination').classList.add(`swiper-central-pagination-${index}`);
    swiperWrappCentral.querySelector('.swiper-button-prev').classList.add(`swiper-central-btn-prev-${index}`);
    swiperWrappCentral.querySelector('.swiper-button-next').classList.add(`swiper-central-btn-next-${index}`);
    
    new Swiper(`.swiper-central-id-${index}`, { 
      loop: false,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 24,
      grabCursor: true,
      keyboard: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: `.swiper-central-pagination-${index}`,
        type: "bullets"
      },
      navigation: {
        prevEl: `.swiper-central-btn-prev-${index}`,
        nextEl: `.swiper-central-btn-next-${index}`
      },
      modules: [Navigation, Pagination]
    });
  });
})();