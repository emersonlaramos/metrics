import "./Card-Estatico-ComparativoCartoes-CardVitrine.scss";

import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export class CardVitrineDS {
    cards = document.querySelectorAll(`[data-js=cards]`) as NodeListOf<Element>;
    linksVerMais = document.querySelectorAll(`[data-js=frontNames]`) as NodeListOf<HTMLLinkElement>;
    linksVoltar = document.querySelectorAll(`[data-js=backNames]`) as NodeListOf<HTMLLinkElement>;

    constructor() {
        if(window.innerWidth <= 1166) {
            new Swiper('.swiper-card-vitrine-ds', {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                loop: false,
                grabCursor: true,
                keyboard: true,
                centeredSlides: false,
                watchOverflow: true,
                pagination: {
                    el: '.swiper-pagination-card-vitrine-ds',
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                modules: [Pagination]
            });
        }
        this.turnCards();
    }

    turnCards() {
        this.linksVerMais.forEach((link, linkID) => {
            link.addEventListener('click', () => {
                this.cards[linkID].classList.add("transform");
            });
        });
        this.linksVoltar.forEach((link, linkID) => {
            link.addEventListener('click', () => {
                this.cards[linkID].classList.remove("transform");
            });
        });
    }
}

new CardVitrineDS();
