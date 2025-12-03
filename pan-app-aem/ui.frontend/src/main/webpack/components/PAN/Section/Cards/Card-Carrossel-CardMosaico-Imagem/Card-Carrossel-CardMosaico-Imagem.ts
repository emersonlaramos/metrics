import "./Card-Carrossel-CardMosaico-Imagem.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export default class CardCarrosselCardMosaicoImagem {
  constructor() {
    new Swiper(".swiper-cardMosaico", {
      loop: false,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 24,
      keyboard: true,
      pagination: {
        el: ".card-carrossel-cardMosaico-imagem__slider-pagination .swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: ".card-carrossel-cardMosaico-imagem__swiper-button--next",
        prevEl: ".card-carrossel-cardMosaico-imagem__swiper-button--prev",
      },
      modules: [Navigation, Pagination],
    });
  }
}
