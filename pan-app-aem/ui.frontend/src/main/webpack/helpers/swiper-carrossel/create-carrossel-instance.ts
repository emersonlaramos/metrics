import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export const createCarrosselInstance = (e: any) => {
    const target: any = e;
    setTimeout(() => {
        target.forEach((swiperWrapp, index) => {
            swiperWrapp.querySelector('.swiper').classList.add(`swiper-id-${index}`);
            swiperWrapp.querySelector('.swiper-pagination').classList.add(`swiper-pagination-${index}`);
            swiperWrapp.querySelector('.swiper-button-prev').classList.add(`swiper-btn-prev-${index}`);
            swiperWrapp.querySelector('.swiper-button-next').classList.add(`swiper-btn-next-${index}`);
            
            new Swiper(`.swiper-id-${index}`, { 
                loop: false,
                slidesPerView: "auto",
                slidesPerGroup: 1,
                spaceBetween: 24,
                grabCursor: true,
                keyboard: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: `.swiper-pagination-${index}`,
                    type: "bullets"
                },
                navigation: {
                    prevEl: `.swiper-btn-prev-${index}`,
                    nextEl: `.swiper-btn-next-${index}`
                },
                modules: [Navigation, Pagination]
            });
            
        });
    }, 1000)
}
