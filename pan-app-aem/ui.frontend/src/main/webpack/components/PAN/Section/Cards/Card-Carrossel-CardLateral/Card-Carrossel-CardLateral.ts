import "./Card-Carrossel-CardLateral.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

(function() {
  document.querySelectorAll('[data-js=swiper-group-lateral]').forEach((swiperWrappLateral, index) => {
    swiperWrappLateral.querySelector('.swiper').classList.add(`swiper-lateral-id-${index}`);
    swiperWrappLateral.querySelector('.swiper-pagination').classList.add(`swiper-lateral-pagination-${index}`);
    swiperWrappLateral.querySelector('.swiper-button-prev').classList.add(`swiper-lateral-btn-prev-${index}`);
    swiperWrappLateral.querySelector('.swiper-button-next').classList.add(`swiper-lateral-btn-next-${index}`);
    
    new Swiper(`.swiper-lateral-id-${index}`, { 
      loop: false,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 24,
      grabCursor: true,
      keyboard: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: `.swiper-lateral-pagination-${index}`,
        type: "bullets"
      },
      navigation: {
        prevEl: `.swiper-lateral-btn-prev-${index}`,
        nextEl: `.swiper-lateral-btn-next-${index}`
      },
      modules: [Navigation, Pagination]
    });
  });
})();