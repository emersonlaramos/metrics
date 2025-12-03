import "./Card-Estatico-Parceiros.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class CardCarrosselParceiros {
    constructor() {
        const swiperCardParceiros = new Swiper('.swiper-cardParceiros', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 16,
            loop: true,
            centeredSlides: false
        });

    }
}


