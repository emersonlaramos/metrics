const mockCardsDireita = `
<div class="col-12 col-md-6 d-flex flex-column justify-content-center imagem-cards-direita__content">
                    <h2 class="typography-title-4">Palavra de destaque</h2>
                    <h1 class="typography-big-text-2 d-none d-md-flex">Exemplo de título com no máximo 3 linhas aqui!</h1>
                    <h1 class="typography-big-text-2 d-md-none">Título com 1 linha aqui!</h1>
        
                    <div class="swiper swiper-cards-direita m-0 swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <div class="swiper-wrapper" style="cursor: grab;">
                            
                                
                            
                                
                                    
                                        <div class="swiper-slide swiper-slide-active" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Como fazer o dinheiro render mais? 💸</p>
                                            </div>
                                        </div>
                                    
                                        <div class="swiper-slide swiper-slide-next" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Como fazer o dinheiro render mais? 💸</p>
                                            </div>
                                        </div>
                                    
                                        <div class="swiper-slide" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Como fazer o dinheiro render mais? 💸</p>
                                            </div>
                                        </div>
                                    
                                        <div class="swiper-slide" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Lorem ipsum dolor sit</p>
                                            </div>
                                        </div>
                                    
                                        <div class="swiper-slide" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Lorem ipsum dolor sit</p>
                                            </div>
                                        </div>
                                    
                                        <div class="swiper-slide" style="width: 228px; margin-right: 24px;">
                                            <div class="imagem-cards-direita__card d-flex">
                                                <p class="typography-body-1 m-auto">Lorem ipsum dolor sit</p>
                                            </div>
                                        </div>
                                    
                                
                            
                        </div>
                    </div>

                    <div class="button-navigation d-none d-md-flex">
                        <div class="swiper-button-prev swiper-button-disabled">
                            <svg class="swiper-button-icon" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.714355 6H19.2858" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.2859 11L19.2859 6L14.2859 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
    
                        <div class="swiper-button-next">
                            <svg class="swiper-button-icon" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.714355 6H19.2858" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.2859 11L19.2859 6L14.2859 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="imagem-cards-direita__swiper--pagination d-flex d-md-none justify-content-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div>

                <div>
`;

describe("Inner HTML Mock for tests", () => {
    beforeEach(() => {
        document.body.innerHTML = mockCardsDireita;
        require('./Card-Carrossel-Imagem-CardsDireita');
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
