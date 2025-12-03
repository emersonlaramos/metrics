const mockCardComparativoCatoes = `
<div class="card-comprativocartoes-cardinfo bg-preto">
    <div class="container card-comprativocartoes-cardinfo__content">
        <div class="row">
            <div class="col-12">
                <div class="swiper swiper-comparativocartoes-cardinfo swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div class="swiper-wrapper" style="cursor: grab;">
                        <div class="swiper-slide swiper-slide-active" style="width: 373.333px; margin-right: 16px;">
                            <mahoe-card class="card-comprativocartoes-cardinfo__mahoe-card mahoe-card mahoe-card__filled mahoe-card__normal hydrated" mode="properties.colorVariant == 'bg-azul' ? 'blue' : properties.colorVariant == 'bg-preto' &amp;&amp; 'dark'" size="large">
                                <div class="mahoe-card__content">
                                    <img width="" height="" alt="#">

                                    <p class="typography-title-2 card-comprativocartoes-cardinfo__mahoe-card__text">Nome aqui!</p>
                                    <p class="typography-body-1 card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <p class="typography-large contrast card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <div>
                                        <mahoe-button href="#" icon-position="left" size="sm" target="_self" mode="dark" variant="secondary" data-track="#" title="#" class="hydrated">
                                            <button type="button" class="mahoe-button mahoe-button__secondary">
                                                <span class="mahoe-button__container">
                                                    <span class="mahoe-button__label">
                                                        button1
                                                    </span>
                                                </span>
                                                <div class="mahoe-ripple"></div>
                                            </button>
                                        </mahoe-button>
                                    </div>

                                    <a class="card-comprativocartoes-cardinfo__link mt-4 d-block" href="#id_section" target="_self">Ver mais</a>
                                </div>
                            </mahoe-card>
                        </div>

                        <div class="swiper-slide swiper-slide-next" style="width: 373.333px; margin-right: 16px;">
                            <mahoe-card class="card-comprativocartoes-cardinfo__mahoe-card mahoe-card mahoe-card__filled mahoe-card__normal hydrated" mode="properties.colorVariant == 'bg-azul' ? 'blue' : properties.colorVariant == 'bg-preto' &amp;&amp; 'dark'" size="large">
                                <div class="mahoe-card__content">
                                    <img width="" height="" alt="#">

                                    <p class="typography-title-2 card-comprativocartoes-cardinfo__mahoe-card__text">Nome aqui!</p>
                                    <p class="typography-body-1 card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <p class="typography-large contrast card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <div>
                                        <mahoe-button href="#" icon-position="left" size="sm" target="_self" mode="dark" variant="secondary" data-track="#" title="#" class="hydrated">
                                            <button type="button" class="mahoe-button mahoe-button__secondary">
                                                <span class="mahoe-button__container">
                                                    <span class="mahoe-button__label">
                                                        button2
                                                    </span>
                                                </span>
                                                <div class="mahoe-ripple"></div>
                                            </button>
                                        </mahoe-button>
                                    </div>

                                    <a class="card-comprativocartoes-cardinfo__link mt-4 d-block" href="#id_section" target="_self">Ver mais</a>
                                </div>
                            </mahoe-card>
                        </div>

                        <div class="swiper-slide" style="width: 373.333px; margin-right: 16px;">
                            <mahoe-card class="card-comprativocartoes-cardinfo__mahoe-card mahoe-card mahoe-card__filled mahoe-card__normal hydrated" mode="properties.colorVariant == 'bg-azul' ? 'blue' : properties.colorVariant == 'bg-preto' &amp;&amp; 'dark'" size="large">
                                <div class="mahoe-card__content">
                                    <img width="" height="" alt="#">

                                    <p class="typography-title-2 card-comprativocartoes-cardinfo__mahoe-card__text">Nome aqui!</p>
                                    <p class="typography-body-1 card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <p class="typography-large contrast card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>
                                    <p class="typography-large card-comprativocartoes-cardinfo__mahoe-card__text">Lorem ipsum dolor sit amet</p>

                                    <div>
                                        <mahoe-button href="#" icon-position="left" size="sm" target="_self" mode="dark" variant="secondary" data-track="#" title="#" class="hydrated">
                                            <button type="button" class="mahoe-button mahoe-button__secondary">
                                                <span class="mahoe-button__container">
                                                    <span class="mahoe-button__label">
                                                        button3
                                                    </span>
                                                </span>
                                                <div class="mahoe-ripple"></div>
                                            </button>
                                        </mahoe-button>
                                    </div>

                                    <a class="card-comprativocartoes-cardinfo__link mt-4 d-block" href="#id_section" target="_self">Ver mais</a>
                                </div>
                            </mahoe-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-lg-none">
            <!-- navigation mobile -->
            <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic swiper-pagination-lock" style="width: 40px;"><span class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" style="left: 0px;"></span></div>
        </div>
    </div>
</div>
`;

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardComparativoCatoes;
        require('./Card-ComparativoCartoes-CardInfo');
    });

    test("validate loop", () => {
        const swiperContainer = document.getElementsByClassName('swiper') as HTMLCollection;
        const validate = swiperContainer[0].hasAttribute('loop');
        expect(validate).toBe(false);
    });

    test("validade spaceBetween", () => {
        const swiperslide = document.getElementsByClassName('swiper-slide') as HTMLCollection;
        const validate = getComputedStyle(swiperslide[0]);
        expect(validate.marginRight).toBe('16px');
    });

    test("validade grabCursor", () => {
        const grabCursor = document.getElementsByClassName('swiper-wrapper') as HTMLCollection;
        const validate = getComputedStyle(grabCursor[0]);
        expect(validate.cursor).toBe('grab');
    });

    test("validade pagination", () => {
        const pagination = document.getElementsByClassName('swiper-pagination') as HTMLCollection;
        const validate = document.body.contains(pagination[0]);
        expect(validate).toBe(true);
    });
});