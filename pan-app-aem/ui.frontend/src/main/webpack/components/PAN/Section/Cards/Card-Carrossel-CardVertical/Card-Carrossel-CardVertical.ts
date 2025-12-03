import "./Card-Carrossel-CardVertical.scss";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

(function () {
    document.querySelectorAll('[data-js=swiper-card-vertical]').forEach((swiperCardVertical, index) => {
        swiperCardVertical.querySelector('.swiper').classList.add(`swiper-card-vertical-id-${index}`);
        swiperCardVertical.querySelector('.swiper-pagination').classList.add(`carrossel-cardVertical__swiper--pagination-${index}`);
        swiperCardVertical.querySelector('.swiper-button-prev').classList.add(`card-carrossel-cardVertical__swiper-button--prev-${index}`);
        swiperCardVertical.querySelector('.swiper-button-next').classList.add(`card-carrossel-cardVertical__swiper-button--next-${index}`);

        new Swiper(`.swiper-card-vertical-id-${index}`, {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 24,
            grabCursor: true,
            keyboard: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: `.carrossel-cardVertical__swiper--pagination-${index}`,
                type: "bullets"
            },
            navigation: {
                prevEl: `.card-carrossel-cardVertical__swiper-button--prev-${index}`,
                nextEl: `.card-carrossel-cardVertical__swiper-button--next-${index}`
            },
            modules: [Navigation, Pagination]
        });
    });
})();
