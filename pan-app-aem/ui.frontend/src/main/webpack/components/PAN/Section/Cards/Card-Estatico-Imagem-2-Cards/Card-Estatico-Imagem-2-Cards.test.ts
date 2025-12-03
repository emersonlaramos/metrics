import Imagem2Cards from "./Card-Estatico-Imagem-2-Cards";

const mockCardEstatico2Cards = `
<div class="swiper d-flex swiper-imagem-2-cards swiper-initialized swiper-horizontal swiper-backface-hidden">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-active" style="margin-right: 24px;">
            <mahoe-card data-js="cards" id="card-01" data-track="#" mode="dark" href="https://bancopan.com.br" target="_self" class="mahoe-card mahoe-card__filled mahoe-card__normal hydrated" size="medium"><!----><div class="mahoe-card__content">
                <p class="typography-body-1">
                    Acesse o site ou app Kinoplex e pague usando o seu Cartão PAN. Acesse o site ou app Kinoplex e pague usando o seu
                </p>
            </div><div class="mahoe-card__link"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8H16.5" stroke="#07A5EC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 15L16.5 8L9.5 1" stroke="#07A5EC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="mahoe-ripple"></div></mahoe-card>
        </div>
        <div class="swiper-slide swiper-slide-next" style="margin-right: 24px;">
            <mahoe-card data-js="cards" id="card-02" mode="dark" href="#id_section" target="_self" class="mahoe-card mahoe-card__filled mahoe-card__normal hydrated" size="medium"><!----><div class="mahoe-card__content">
                <p class="typography-body-1">
                    Compre com o seu Cartão PAN nas bilheterias Kinoplex e peça pelo desconto.
                </p>
            </div><div class="mahoe-card__link"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8H16.5" stroke="#07A5EC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 15L16.5 8L9.5 1" stroke="#07A5EC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="mahoe-ripple"></div></mahoe-card>
        </div>
    </div>
</div>
`;
const fsCardEstaticoImagem2 = require("fs");
const originalHtmlfsCardEstaticoImagem2 = fsCardEstaticoImagem2
    .readFileSync(
        "../ui.apps/src/main/content/jcr_root/apps/webapp--adobe-experience-ds/components/PAN/Section/Cards/Card-Estatico-Imagem-2-Cards/Card-Estatico-Imagem-2-Cards.html"
    )
    .toString();
    

describe("Event tests", () => {
    beforeEach(() => {
        document.body.innerHTML = originalHtmlfsCardEstaticoImagem2;
        window.innerWidth = 992;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("mouseover on Cards", () => {
        const images = document.querySelectorAll(
            `[data-js=images]`
        ) as NodeListOf<Element>;
        if (window.innerWidth >= 992) {
            Imagem2Cards.replaceClass(images, 0);
            expect(images[0].classList).toContain("d-inherit");
        }
    });
});

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardEstatico2Cards;
        require('./Card-Estatico-Imagem-2-Cards');
    });

    test("validate loop", () => {
        const swiperContainer = document.getElementsByClassName('swiper') as HTMLCollection;
        const validate = swiperContainer[0].hasAttribute('loop');
        expect(validate).toBe(false);
    });

    test("validade spaceBetween", () => {
        const swiperslide = document.getElementsByClassName('swiper-slide') as HTMLCollection;
        const validate = getComputedStyle(swiperslide[0]);
        expect(validate.marginRight).toBe('24px');
    });

    test("validade pagination", () => {
        const pagination = document.getElementsByClassName('swiper--pagination') as HTMLCollection;
        const validate = document.body.contains(pagination[0]);
        expect(validate).toBe(false);
    });

    test("validade navigation", () => {
        const navigation = document.getElementsByClassName('swiper-button-prev') as HTMLCollection;
        const validate = document.body.contains(navigation[0]);
        expect(validate).toBe(false);
    });
});
