import "./Card-Carrossel-Imagem-CardsDireita.scss";
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class CardsDireita {
    constructor() {
        new Swiper('.swiper-cards-direita', {
            spaceBetween: 24,
            loop: false,
            grabCursor: true,
            keyboard: true,
            centeredSlides: false,
            watchOverflow: true,
            breakpoints: {
                320: {
                  slidesPerView: 'auto',
                  slidesPerGroup: 1
                },
                576: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                }
            },
            pagination: {
                el: ".imagem-cards-direita__swiper--pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            modules: [Navigation, Pagination],
        });
    }
}
