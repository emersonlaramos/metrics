import "./Card-ComparativoCartoes-CardInfo.scss";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class CardComparativoCartoesCardInfo {
    constructor() {
        new Swiper('.swiper-ds-cardinfo', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            loop: false,
            grabCursor: true,
            keyboard: true,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination-ds-cardinfo',
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            modules: [Navigation, Pagination]
        });
    }
}

