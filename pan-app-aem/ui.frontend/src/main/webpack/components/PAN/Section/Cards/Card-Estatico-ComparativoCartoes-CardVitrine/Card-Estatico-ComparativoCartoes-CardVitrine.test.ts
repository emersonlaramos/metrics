import {CardVitrineDS} from "./Card-Estatico-ComparativoCartoes-CardVitrine";

const mockCardVitrine = `
<div class="button-navigation col-lg-1 d-lg-flex d-none">
    <div class="swiper-button-prev swiper-button-disabled">
        <svg class="swiper-button-icon" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.714355 6H19.2858" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.2859 11L19.2859 6L14.2859 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
</div>
<div class="col p-0">
    <div class="swiper d-flex swiper-card-vitrine swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div class="swiper-wrapper" style="cursor: grab;">
            <div class="swiper-slide swiper-slide-active">
                <div class="flip-card">
                    <div class="flip-card-inner transform" data-js="cards">
                        <mahoe-card size="small" class="custom-card flip-card-front mahoe-card mahoe-card__filled mahoe-card__normal hydrated"><!----><div class="mahoe-card__content">
                            <div class="custom-card__content d-flex flex-column justify-content-between">
                                <div class="d-flex flex-column align-items-center">
                                    <a class="custom-card__link mt-3 d-block" target="#" data-js="frontNames">
                                        Ver Mais
                                    </a>
                                </div>
                            </div>
                        </div></mahoe-card>
                        <mahoe-card size="small" class="custom-card flip-card-back mahoe-card mahoe-card__filled mahoe-card__normal hydrated"><!----><div class="mahoe-card__content">
                            <div class="custom-card__content d-flex flex-column justify-content-between">
                                <div class="d-flex flex-column align-items-center">
                                    <a class="custom-card__link m-3 d-block" target="#" data-js="backNames">
                                        Voltar
                                    </a>
                                </div>
                            </div>
                        </div></mahoe-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="button-navigation col-lg-1 d-lg-flex d-none">
    <div class="swiper-button-next">
        <svg class="swiper-button-icon" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.714355 6H19.2858" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.2859 11L19.2859 6L14.2859 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
</div>
`;

describe("Class manipulation tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardVitrine;
    });
    test("assert class was sucessfully added", () => {
        const minhaInstancia = new CardVitrineDS();
        minhaInstancia.linksVerMais[0].click();
        expect(minhaInstancia.cards[0].classList.contains('transform')).toBe(true);
    });
    test("assert class was sucessfully removed", () => {
        const minhaInstancia = new CardVitrineDS();
        minhaInstancia.linksVoltar[0].click();
        expect(minhaInstancia.cards[0].classList.contains('transform')).toBe(false);
    });
});

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardVitrine;
        require('./Card-Estatico-ComparativoCartoes-CardVitrine');
    });

    test("validate loop", () => {
        const swiperContainer = document.getElementsByClassName('swiper') as HTMLCollection;
        const validate = swiperContainer[0].hasAttribute('loop');
        expect(validate).toBe(false);
    });

    test("validade grabCursor", () => {
        const grabCursor = document.getElementsByClassName('swiper-wrapper') as HTMLCollection;
        const validate = getComputedStyle(grabCursor[0]);
        expect(validate.cursor).toBe('grab');
    });

    test("validade pagination", () => {
        const pagination = document.getElementsByClassName('swiper--pagination') as HTMLCollection;
        const validate = document.body.contains(pagination[0]);
        expect(validate).toBe(false);
    });

    test("validade navigation", () => {
        const navigation = document.getElementsByClassName('swiper-button-prev') as HTMLCollection;
        const validate = document.body.contains(navigation[0]);
        expect(validate).toBe(true);
    });

});
