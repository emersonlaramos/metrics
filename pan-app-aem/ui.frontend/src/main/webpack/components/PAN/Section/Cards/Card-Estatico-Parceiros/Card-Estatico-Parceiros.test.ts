const mockCardParceiros = `
<section data-cmp-is="Card-Estatico-Parceiros">
    <div class="card-estatico-parceiros pt-4 pb-4 pb-md-5 bg-branco">
        <div class="card-estatico-parceiros__content">
            <div class="swiper swiper-cardParceiros mb-3 swiper-initialized swiper-horizontal swiper-android">
                <div class="swiper-wrapper c-right1">
                    <div
                        class="swiper-slide card-estatico-parceiros__card swiper-slide-active"
                        data-swiper-slide-index="0"
                        style="margin-right: 16px"
                    >
                        <mahoe-card
                            mode="properties.colorVariant == 'bg-azul' ? 'blue' : properties.colorVariant == 'bg-preto' &amp;&amp; 'dark'"
                            size="small"
                            class="mahoe-card mahoe-card__filled mahoe-card__normal hydrated"
                        >
                        <div class="mahoe-card__content">
                            <img class="parceiro" width="" height="" alt="#primeiro" />
                        </div>
                        </mahoe-card>
                    </div>
                </div>
            </div>

            <div class="swiper swiper-cardParceiros swiper-initialized swiper-horizontal swiper-android">
                <div class="swiper-wrapper c-right2">
                    <div
                        class="swiper-slide card-estatico-parceiros__card swiper-slide-active"
                        data-swiper-slide-index="0"
                        style="margin-right: 16px"
                    >
                        <mahoe-card
                            mode="properties.colorVariant == 'bg-azul' ? 'blue' : properties.colorVariant == 'bg-preto' &amp;&amp; 'dark'"
                            size="small"
                            class="mahoe-card mahoe-card__filled mahoe-card__normal hydrated"
                        >
                            <div class="mahoe-card__content">
                                <img class="parceiro" width="" height="" alt="#primeiro" />
                            </div>
                        </mahoe-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardParceiros;
        require('./Card-Estatico-Parceiros');
    });

    test("validade spaceBetween", () => {
        const swiperslide = document.getElementsByClassName('swiper-slide') as HTMLCollection;
        const validate = getComputedStyle(swiperslide[0]);
        expect(validate.marginRight).toBe('16px');
    });
});