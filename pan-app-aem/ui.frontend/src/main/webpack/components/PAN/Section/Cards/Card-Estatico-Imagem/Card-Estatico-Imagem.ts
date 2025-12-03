import "./Card-Estatico-Imagem.scss"
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

(function () {
    document.querySelectorAll('[data-js=card-estatico-imagem]').forEach((swiperCardEstaticoImagem, index) => {
        swiperCardEstaticoImagem.querySelector('.swiper').classList.add(`swiper-card-estatico-imagem-${index}`);
        swiperCardEstaticoImagem.querySelector('.swiper-pagination').classList.add(`swiper-card-estatico-imagem-pagination-${index}`);

        if (window.innerWidth < 768) {
            new Swiper(`.swiper-card-estatico-imagem-${index}`, {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 24,
                grabCursor: true,
                centeredSlides: true,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: `.swiper-card-estatico-imagem-pagination-${index}`,
                    type: "bullets",
                },
                modules: [Pagination],
            });
        } else {
            swiperCardEstaticoImagem.querySelector(`.swiper-wrapper-card-estatico-imagem`).classList.add(`row`);
        }
    });
})();
