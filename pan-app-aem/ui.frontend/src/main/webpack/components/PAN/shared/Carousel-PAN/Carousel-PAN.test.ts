import CarouselPan from './Carousel-PAN'
import { Autoplay, Navigation, Pagination } from 'swiper';

const mockIntroCarrossel = `
<div data-sly-use.carousel="com.adobe.cq.wcm.core.components.models.Carousel"
    data-panelcontainer="" id="" data-cmp-is="Carousel-PAN"
    data-placeholder-text=""
    data-swiper-pan-autoplay="true"
    data-swiper-pan-delay="4"
    data-swiper-pan-loop="true"
    class="cmp-carousel carousel-pan">
    <section id=">
        <div data-sly-test="" class="cmp-carousel__content swiper carousel-pan-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-atomic="false">
            <div class="swiper-wrapper" style="cursor: grab; transform: translate3d(0px, 0px, 0px);">
                <div data-sly-repeat.item="" data-sly-resource=""
                    class="swiper-slide swiper-slide-next" id="id-tabpanel">
                    <div>
                        <p>Slide Test</p>
                    </div>
                </div>
                <div data-sly-repeat.item="" data-sly-resource=""
                    class="swiper-slide swiper-slide-active" id="id-tabpanel">
                    <div>
                        <p>Slide Test</p>
                    </div>
                </div>
            </div>
            <div class="carousel-pan-swiper__pagination justify-content-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
            <div class="carousel-pan-swiper__navigation ">
                <div class="carousel-pan-swiper__button carousel-pan-swiper__button-prev"></div>
                <div class="carousel-pan-swiper__button carousel-pan-swiper__button-next"></div>
            </div>
        </div>
    </section>
</div>
`;

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockIntroCarrossel;
    });

    test("Validate loop", () => {
        const swiperContainer = document.getElementsByClassName('swiper') as HTMLCollection;
        const validate = swiperContainer[0].hasAttribute('loop');
        expect(validate).toBe(false);
    });

    test("Validate grabCursor", () => {
        const grabCursor = document.getElementsByClassName('swiper-wrapper') as HTMLCollection;
        const validate = getComputedStyle(grabCursor[0]);
        expect(validate.cursor).toBe('grab');
    });

    test("Validate pagination", () => {
        const pagination = document.getElementsByClassName('carousel-pan-swiper__pagination') as HTMLCollection;
        const validate = document.body.contains(pagination[0]);
        expect(validate).toBe(true);
    });

    test("Validate função getConfig", () => {
        const carouselPan = new CarouselPan()

        carouselPan.getConfig()

        expect(carouselPan.swiperConfig).toStrictEqual({
            autoplay: {
                delay: 4000
            },
            loop: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            grabCursor: true,
            keyboard: true,
            centeredSlides: false,
            pagination: {
                el: ".carousel-pan-swiper__pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".carousel-pan-swiper__button-next",
                prevEl: ".carousel-pan-swiper__button-prev",
                enabled: true
            },
            modules: [Navigation, Pagination, Autoplay],
        })
    })

    test("Validate função captilizeFromSecondWord", () => {
        const carouselPan = new CarouselPan()

        const sentence = "slides per view"
        const sentenceCapitalized = carouselPan.captilizeFromSecondWord(sentence)

        expect(sentenceCapitalized).toStrictEqual("slidesPerView")
    })

    test("Validate função correctValues", () => {
        const carouselPan = new CarouselPan()

        const valueBooleanTrueInString = "true"
        const valueBooleanFalseInString = "false"
        const valueNumberInString = "1"

        const valueTrue = carouselPan.correctValues(valueBooleanTrueInString)
        const valueFalse = carouselPan.correctValues(valueBooleanFalseInString)
        const valueNumber = carouselPan.correctValues(valueNumberInString)

        expect(valueTrue).toBeTruthy()
        expect(valueFalse).toBeFalsy()
        expect(valueNumber).toEqual(1)

    })

});
