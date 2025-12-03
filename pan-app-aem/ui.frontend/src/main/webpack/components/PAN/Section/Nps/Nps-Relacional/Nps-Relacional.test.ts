import NpsRelacional from "./Nps-Relacional";

const fixture = `
<section data-cmp-is="Nps-Relacional">
    <div class="nps-relacional d-grid" data-js="nps-relacional-fluxo-principal">

        <img class="nps-relacional__picture d-none d-lg-flex" loading="lazy" alt="#" width="1440" height="688" src="/content/dam/webapp--aem-institucional/blog_limite_pix_desktop.webp">

        <div class="container nps-relacional__frame d-md-flex flex-column justify-content-center">
            <div class="row justify-content-evenly">
                <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center p-0">
                    <div class="nps-relacional__texts d-flex flex-column">
                        <h2 class="typography-title-4 m-0">
                            Sua opinião importa</h2>
                        <h1 class="typography-big-text-2 m-0 d-flex">
                            Queremos saber como foi sua experiência&nbsp;</h1>
                        <p class="typography-body-1 m-0">Para nos ajudar, basta nos contar em apenas dois passos, como foi a sua experiência com seu último atendimento no Banco PAN.</p>
                    </div>
                </div>
                <div class="col-12 col-md-5 p-0 d-flex justify-content-end">
                    <div class="nps-relacional__form-container" id="form">
                        <div class="nps-relacional__wrapper-form d-flex flex-column">
                            <input type="hidden" data-js="nps-endpoint-input" value="https://ap-gateway-web-hml.bancopan.com.br/leads/campanhas/api/formulario/nps">
                            <input type="hidden" data-js="nps-captcha-version" value="v3">
                            <h2 class="typography-title-4 text-center">
                                Numa escala de 0 a 10, o quanto você recomendaria o PAN a um amigo ou parente?
                            </h2>
                            <div class="nps-relacional__score">
                                <ul class="nps-relacional__score-list">
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="0">
                                            0
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="1">
                                            1
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="2">
                                            2
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="3">
                                            3
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="4">
                                            4
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="5">
                                            5
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="6">
                                            6
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="7">
                                            7
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="8">
                                            8
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="9">
                                            9
                                        </button>
                                    </li>
                                    <li class="nps-relacional__score-list-item">
                                        <button type="button" class="nps-relacional__score-list-item-button typography-body-2" value="10">
                                            10
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="nps-relacional__recomendation d-none d-lg-flex justify-content-lg-between">
                                <span class="nps-relacional__recomendation-text">Não recomendaria</span>
                                <span class="nps-relacional__recomendation-text">Recomendaria</span>
                            </div>
                            <h2 class="typography-body-2 text-space">
                                Nos conte o motivo de sua nota:
                            </h2>
                            <div class="nps-relacional__text-area">
                                <div class="col-12 nps-relacional__testimony">
                                    <form class="nps-relacional__testimony-form" data-js="nps-relacional-form">
                                        <mahoe-textarea data-js="nps-relacional-depoimento" placeholder="Queremos te ouvir..." class="hydrated">
                                    
                                <label class="mahoe-textarea"><span class="mahoe-textarea__label typography-small"></span><textarea placeholder="Queremos te ouvir..."></textarea></label></mahoe-textarea></form></div>
                            </div>
                            
                                <input type="hidden" data-js="nps-captcha-siteKey" value="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
                            
                            
                            <div class="nps-relacional__finish-button">
                                <mahoe-button class="nps-relacional__navigation-button-submit hydrated" data-track="#" type="button" disabled="" data-js="nps-relacional-button-submit" size="md" variant="primary"><!----><button type="button" disabled="" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><span class="mahoe-button__label">
                                    hfghgfhfgc b
                                </span></span></button></mahoe-button>
                            </div>
                        </div>
                        <div class="nps-relacional__wrapper-success d-none flex-column">
                            <h1 class="typography-title-1 title">Obrigado!</h1>
                            <div class="typography-body-1">É muito bom saber que podemos contar com você! O seu feedback é muito importante para nós.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nps-relacional nps-relacional--error d-none b-sizing" data-js="nps-relacional-fluxo-erro">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="nps-relacional__flag-error">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9992 38.5725C30.2559 38.5725 38.5706 30.2578 38.5706 20.0011C38.5706 9.7444 30.2559 1.42969 19.9992 1.42969C9.74245 1.42969 1.42773 9.7444 1.42773 20.0011C1.42773 30.2578 9.74245 38.5725 19.9992 38.5725Z" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20 10V18.5714" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M19.9989 28.572C20.7879 28.572 21.4275 27.9324 21.4275 27.1434C21.4275 26.3544 20.7879 25.7148 19.9989 25.7148C19.2099 25.7148 18.5703 26.3544 18.5703 27.1434C18.5703 27.9324 19.2099 28.572 19.9989 28.572Z" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div class="nps-relacional__text-error d-none" data-js="nps-relacional-fluxo-erro-respondida">
                        <h2 class="typography-big-text-2">
                            Pesquisa já respondida ou ela não está mais
                            disponível
                        </h2>
                    </div>
                    <div class="nps-relacional__text-error d-none" data-js="nps-relacional-fluxo-erro-link-expirado">
                        <h2 class="typography-big-text-2">
                            O link para esta pesquisa está inválido ou expirado
                        </h2>
                    </div>
                    <div class="nps-relacional__text-error d-none" data-js="nps-relacional-fluxo-erro-manutencao">
                        <h2 class="typography-big-text-2">
                            No momento não conseguimos abrir a página solicitada
                        </h2>
                        <p class="typography-large">
                            Tente novamente mais tarde.
                        </p>
                    </div>
                    <div class="nps-relacional__button-error d-flex">
                        <mahoe-button size="md" variant="primary" title="Ir para o site do PAN!" href="https://www.bancopan.com.br/" class="hydrated"><!----><button type="button" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><span class="mahoe-button__label">
                            Ir para o site do PAN
                        </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

describe("Inner HTML Mock & Class Object testing", () => {
    

    beforeEach(() => {
        document.body.innerHTML = fixture;
        jest.clearAllMocks();
        jest.useFakeTimers();
    });
  
    afterEach(() => {
        jest.useRealTimers();
    });
  
    test("check if cpf parameter was stored locally", () => {
        const npsRelacional = new NpsRelacional();
        npsRelacional.cpfParam = "01234567890";
        npsRelacional.protocolParam = "09876543210";
        npsRelacional.storeParamsLocally();
        const cParam = localStorage.getItem("c");
        expect(cParam).toBe("01234567890");
    });  

    test("check if protocol parameter was stored locally", () => {
        const npsRelacional = new NpsRelacional();
        npsRelacional.cpfParam = "01234567890";
        npsRelacional.protocolParam = "09876543210";
        npsRelacional.storeParamsLocally();
        const cParam = localStorage.getItem("p");
        expect(cParam).toBe("09876543210");
    });
    
    test("validate recaptcha callback", () => {
        const npsRelacional = new NpsRelacional();
        const response = "";
        npsRelacional.recaptchaCallbackNpsRelacional(response);
        npsRelacional.recaptchaResponse = response;
        npsRelacional.isCaptchaValid = true;
        expect(npsRelacional.isCaptchaValid).toBe(true);
    });
  
    test("handle success", () => {
        const npsRelacional = new NpsRelacional();
        npsRelacional.handleSuccess();
        const formSuccessActive =
            npsRelacional.$wrapperForm.classList.contains("d-none") &&
            npsRelacional.$wrapperSuccess.classList.contains("d-flex");
        expect(formSuccessActive).toBe(true);
    });
    
    test("handle error", () => {
        const npsRelacional = new NpsRelacional();
        npsRelacional.handleError();
        const formErrorActive =
            npsRelacional.$wrapperMainStream.classList.contains("d-none") &&
            !npsRelacional.$wrapperErroFlow.classList.contains("d-none") &&
            !npsRelacional.$flowErrorResquest.classList.contains("d-none");
        expect(formErrorActive).toBe(true);
    });
});
