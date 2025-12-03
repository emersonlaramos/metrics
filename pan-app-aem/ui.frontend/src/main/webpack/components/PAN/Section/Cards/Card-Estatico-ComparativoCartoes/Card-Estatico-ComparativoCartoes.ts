import "./Card-Estatico-ComparativoCartoes.scss";
import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class CardComparativoCartoes {
    constructor() {
        if (window.matchMedia("only screen and (max-width: 1166px)").matches) {
            new Swiper('.swiper-comparativocartoes', {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                loop: false,
                grabCursor: true,
                keyboard: true,
                centeredSlides: false,
                pagination: {
                    el: ".card-estatico-comparativocartoes__swiper--pagination",
                    type: "bullets",
                    clickable: true
                },
                modules: [Pagination],
            });
        }
    }
}
