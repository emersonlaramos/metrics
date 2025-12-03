import { NpsAquisicaoUrlParams } from "./Nps-Aquisicao-Url-Paramns";
import { NpsAquisicaoSendData } from "./Nps-Aquisicao-Send-Data";
import { NpsAquisicaoSlider } from "./Nps-Aquisicao-Slider";

const fixture = `
<section style="overflow: hidden" data-cmp-is="Nps-Aquisicao">
    <div class="nps-aquisicao d-flex b-sizing" data-js="nps-aquisicao-fluxo-principal">
        <input type="hidden" data-js="nps-endpoint-input" value="https://ap-gateway-web-hml.bancopan.com.br/leads/campanhas/api/formulario/nps">
        <input type="hidden" data-js="nps-captcha-version" value="v3">
        
            <input type="hidden" data-js="nps-captcha-siteKey" value="6LfBpYkfAAAAAE3llrrAHo8OiCoxpQvX1pFq0YVi">
        
        <div class="nps-aquisicao__slide b-sizing d-flex" data-js="nps-aquisicao-slides">
            <div class="nps-aquisicao__wrapper-content b-sizing d-flex flex-column justify-content-md-center">
                <div class="nps-aquisicao__content b-sizing">
                    <h2 class="typography-title-4 text-space">
                        Palavra Destaque
                    </h2>
                    <h2 class="typography-title-1 text-space">
                        Titulo
                    </h2>
                    <div class="typography-body-1 text-space">
                        Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;Parágrafo&nbsp;
                    </div>
                    <div class="nps-aquisicao__presentation-button">
                        <mahoe-button variant="primary" icon-position="right" icon="/content/dam/webapp--adobe-experience-ds/arrow-right-white-button.svg" class="nps-aquisicao__button-start hydrated" title="Title botão" data-next="nps-aquisicao-next" size="md"><!----><button type="button" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-right-white-button.svg" class="icon__right" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                            Texto botão
                        </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                    </div>
                </div>
            </div>
            <div class="nps-aquisicao__image">
                <picture class="nps-aquisicao__picture">
                    <source class="image-default" media="(min-width: 768px)" srcset="/content/dam/webapp--aem-institucional/710x688.webp" width="568" height="688">
                    <img class="image-default" alt="#" width="303" height="335" src="/content/dam/webapp--aem-institucional/710x688.webp">
                </picture>
            </div>
        </div>
        <div class="nps-aquisicao__slide b-sizing d-flex" data-js="nps-aquisicao-slides">
            <div class="nps-aquisicao__wrapper-content b-sizing d-flex flex-column justify-content-md-center">
                <div class="nps-aquisicao__content b-sizing">
                    <div class="nps-aquisicao__flag">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.42773 7.85826L6.18488 9.26397C6.23207 9.30284 6.28733 9.33069 6.34663 9.34552C6.40594 9.36035 6.46781 9.36177 6.52773 9.34969C6.58823 9.33834 6.64558 9.31409 6.69587 9.27859C6.74616 9.2431 6.78821 9.19718 6.81916 9.14397L9.57059 4.42969" stroke="#E8E8F0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.99916 12.5725C10.0762 12.5725 12.5706 10.0781 12.5706 7.00112C12.5706 3.9241 10.0762 1.42969 6.99916 1.42969C3.92215 1.42969 1.42773 3.9241 1.42773 7.00112C1.42773 10.0781 3.92215 12.5725 6.99916 12.5725Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="typography-small d-block">
                            Etapa 1 de 3
                        </span>
                    </div>
                    <h2 class="typography-title-4 text-space">
                        Palavra Destaque pergunta 1
                    </h2>
                    <h2 class="typography-title-1 text-space">
                        Titulo pergunta 1
                    </h2>
                    <div class="nps-aquisicao__resolved">
                        <div class="nps-aquisicao__resolved-button space-bottom">
                            <mahoe-button data-js="nps-aquisicao-botao-sim" variant="secondary" size="md" class="hydrated"><!----><button type="button" class="mahoe-button mahoe-button__secondary"><span class="mahoe-button__container"><span class="mahoe-button__label">Sim</span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                        <div class="nps-aquisicao__resolved-button">
                            <mahoe-button data-js="nps-aquisicao-botao-nao" variant="secondary" size="md" class="hydrated"><!----><button type="button" class="mahoe-button mahoe-button__secondary"><span class="mahoe-button__container"><span class="mahoe-button__label">Não</span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                    </div>
                    <div class="nps-aquisicao__navigation d-flex justify-content-between">
                        <div class="nps-aquisicao__navigation-left">
                            <mahoe-button variant="ghost" icon-position="left" type="button" icon="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="nps-aquisicao__navigation-button--prev hydrated" data-prev="nps-aquisicao-prev" size="md"><!----><button type="button" class="mahoe-button mahoe-button__ghost"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="icon__left" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                voltar
                            </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                        <div class="nps-aquisicao__navigation-right">
                            <mahoe-button variant="secondary" disabled="" type="button" icon-position="right" icon="/content/dam/webapp--adobe-experience-ds/arrow-right-blue-button.svg" class="nps-aquisicao__navigation-button--next hydrated" data-next="nps-aquisicao-next" data-js="nps-aquisicao-button-step-1" size="md"><!----><button type="button" disabled="" class="mahoe-button mahoe-button__secondary"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-right-blue-button.svg" class="icon__right" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                próximo
                            </span></span></button></mahoe-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nps-aquisicao__image">
                <picture class="nps-aquisicao__picture">
                    <source class="image-default" media="(min-width: 768px)" srcset="
                            /content/dam/webapp--aem-institucional/710x688.webp
                        " width="568" height="688">
                    <img class="image-default" alt="#" width="303" height="335" src="/content/dam/webapp--aem-institucional/710x688.webp">
                </picture>
            </div>
        </div>
        <div class="nps-aquisicao__slide b-sizing d-flex" data-js="nps-aquisicao-slides">
            <div class="nps-aquisicao__wrapper-content b-sizing d-flex flex-column justify-content-md-center">
                <div class="nps-aquisicao__content b-sizing">
                    <div class="nps-aquisicao__flag">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.42773 7.85826L6.18488 9.26397C6.23207 9.30284 6.28733 9.33069 6.34663 9.34552C6.40594 9.36035 6.46781 9.36177 6.52773 9.34969C6.58823 9.33834 6.64558 9.31409 6.69587 9.27859C6.74616 9.2431 6.78821 9.19718 6.81916 9.14397L9.57059 4.42969" stroke="#E8E8F0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.99916 12.5725C10.0762 12.5725 12.5706 10.0781 12.5706 7.00112C12.5706 3.9241 10.0762 1.42969 6.99916 1.42969C3.92215 1.42969 1.42773 3.9241 1.42773 7.00112C1.42773 10.0781 3.92215 12.5725 6.99916 12.5725Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="typography-small d-block">
                            Etapa 2 de 3
                        </span>
                    </div>
                    <h2 class="typography-title-4 text-space">
                        Palavra Destaque pergunta 2
                    </h2>
                    <h2 class="typography-title-1 text-space">
                        Titulo pergunta 2
                    </h2>
                    <div class="nps-aquisicao__score">
                        <ul class="nps-aquisicao__score-list">
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="0">
                                    0
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="1">
                                    1
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="2">
                                    2
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="3">
                                    3
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="4">
                                    4
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="5">
                                    5
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="6">
                                    6
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="7">
                                    7
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="8">
                                    8
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="9">
                                    9
                                </button>
                            </li>
                            <li class="nps-aquisicao__score-list-item">
                                <button type="button" class="nps-aquisicao__score-list-item-button typography-body-2" value="10">
                                    10
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="nps-aquisicao__recomendation d-none d-lg-flex justify-content-lg-between">
                        <span class="nps-aquisicao__recomendation-text">Não recomendaria</span>
                        <span class="nps-aquisicao__recomendation-text">Recomendaria</span>
                    </div>
                    <div class="nps-aquisicao__navigation d-flex justify-content-between">
                        <div class="nps-aquisicao__navigation-left">
                            <mahoe-button variant="ghost" icon-position="left" type="button" icon="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="nps-aquisicao__navigation-button--prev hydrated" data-prev="nps-aquisicao-prev" size="md"><!----><button type="button" class="mahoe-button mahoe-button__ghost"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="icon__left" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                voltar
                            </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                        <div class="nps-aquisicao__navigation-right">
                            <mahoe-button variant="secondary" disabled="" type="button" icon-position="right" icon="/content/dam/webapp--adobe-experience-ds/arrow-right-blue-button.svg" class="nps-aquisicao__navigation-button--next hydrated" data-next="nps-aquisicao-next" data-js="nps-aquisicao-button-step-2" size="md"><!----><button type="button" disabled="" class="mahoe-button mahoe-button__secondary"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-right-blue-button.svg" class="icon__right" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                próximo
                            </span></span></button></mahoe-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nps-aquisicao__image">
                <picture class="nps-aquisicao__picture">
                    <source class="image-default" media="(min-width: 768px)" srcset="
                            /content/dam/webapp--aem-institucional/710x688.webp
                        " width="568" height="688">
                    <img class="image-default" alt="#" width="303" height="335" src="/content/dam/webapp--aem-institucional/710x688.webp">
                </picture>
            </div>
        </div>
        <div class="nps-aquisicao__slide nps-aquisicao__wrapper-testimony b-sizing d-flex" data-js="nps-aquisicao-slides">
            <div class="nps-aquisicao__wrapper-content b-sizing d-flex flex-column justify-content-md-center">
                <div class="nps-aquisicao__content b-sizing">
                    <div class="nps-aquisicao__flag">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.42773 7.85826L6.18488 9.26397C6.23207 9.30284 6.28733 9.33069 6.34663 9.34552C6.40594 9.36035 6.46781 9.36177 6.52773 9.34969C6.58823 9.33834 6.64558 9.31409 6.69587 9.27859C6.74616 9.2431 6.78821 9.19718 6.81916 9.14397L9.57059 4.42969" stroke="#E8E8F0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.99916 12.5725C10.0762 12.5725 12.5706 10.0781 12.5706 7.00112C12.5706 3.9241 10.0762 1.42969 6.99916 1.42969C3.92215 1.42969 1.42773 3.9241 1.42773 7.00112C1.42773 10.0781 3.92215 12.5725 6.99916 12.5725Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="typography-small d-block">
                            Etapa 3 de 3
                        </span>
                    </div>
                    <h2 class="typography-title-4 text-space">
                        Palavra Destaque pergunta 3
                    </h2>
                    <h2 class="typography-title-1 text-space">
                        Titulo pergunta 3
                    </h2>
                    <div class="typography-large text-space">
                        arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;arágrafo pergunta 3&nbsp;
                    </div>

                    <div class="nps-aquisicao__text-area">
                        <div class="col-12 nps-aquisicao__testimony">
                            <form class="nps-aquisicao__testimony-form" data-js="nps-aquisicao-form">
                                <mahoe-textarea data-js="nps-aquisicao-depoimento" placeholder="Queremos te ouvir..." class="hydrated">
                            
                        <label class="mahoe-textarea"><span class="mahoe-textarea__label typography-small"></span><textarea placeholder="Queremos te ouvir..."></textarea></label></mahoe-textarea></form></div>
                    </div>
                    <div class="nps-aquisicao__navigation d-flex justify-content-between">
                        <div class="nps-aquisicao__navigation-left">
                            <mahoe-button variant="ghost" icon-position="left" type="button" icon="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="nps-aquisicao__navigation-button--prev hydrated" data-prev="nps-aquisicao-prev" size="md"><!----><button type="button" class="mahoe-button mahoe-button__ghost"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/arrow-left-button.svg" class="icon__left" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                voltar
                            </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                        <div class="nps-aquisicao__navigation-right">
                            <mahoe-button variant="secondary" class="nps-aquisicao__navigation-button-submit hydrated" data-js="nps-aquisicao-button-submit" type="submit" data-teste="botao-teste" size="md"><!----><button type="submit" class="mahoe-button mahoe-button__secondary"><span class="mahoe-button__container"><span class="mahoe-button__label">
                                Finalizar
                            </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nps-aquisicao__image">
                <picture class="nps-aquisicao__picture">
                    <source class="image-default" media="(min-width: 768px)" srcset="
                            /content/dam/webapp--aem-institucional/710x688.webp
                        " width="568" height="688">
                    <img class="image-default" alt="#" width="303" height="335" src="/content/dam/webapp--aem-institucional/710x688.webp">
                </picture>
            </div>
        </div>
        <div class="nps-aquisicao__slide nps-aquisicao__wrapper-success b-sizing d-flex " data-js="nps-aquisicao-slides">
            <div class="nps-aquisicao__wrapper-content b-sizing d-flex flex-column justify-content-md-center">
                <div class="nps-aquisicao__content b-sizing">
                    <div class="nps-aquisicao__flag nps-aquisicao__flag--finish">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42006 1.9324L8.78292 4.68383C8.81392 4.75367 8.86268 4.81416 8.92434 4.85928C8.986 4.90439 9.05841 4.93256 9.13435 4.94097L12.1429 5.38669C12.23 5.39789 12.3122 5.43364 12.3797 5.48977C12.4473 5.54589 12.4975 5.62008 12.5244 5.70367C12.5514 5.78726 12.554 5.87679 12.532 5.96182C12.51 6.04684 12.4642 6.12384 12.4001 6.18383L10.2315 8.33526C10.1761 8.38697 10.1346 8.4517 10.1107 8.52355C10.0867 8.59541 10.0811 8.67211 10.0943 8.74669L10.6172 11.7724C10.6323 11.8593 10.6228 11.9488 10.5896 12.0306C10.5564 12.1123 10.5009 12.1831 10.4295 12.2349C10.358 12.2867 10.2735 12.3175 10.1854 12.3236C10.0974 12.3297 10.0094 12.311 9.93149 12.2695L7.22292 10.8381C7.15356 10.8041 7.07733 10.7864 7.00006 10.7864C6.9228 10.7864 6.84656 10.8041 6.77721 10.8381L4.06863 12.2695C3.99071 12.311 3.90272 12.3297 3.81469 12.3236C3.72665 12.3175 3.6421 12.2867 3.57065 12.2349C3.4992 12.1831 3.44373 12.1123 3.41054 12.0306C3.37735 11.9488 3.36778 11.8593 3.38292 11.7724L3.90578 8.7124C3.91903 8.63783 3.91342 8.56112 3.88947 8.48927C3.86552 8.41741 3.82398 8.35268 3.76863 8.30098L1.57435 6.18383C1.50943 6.1222 1.46378 6.04307 1.44292 5.95602C1.42206 5.86897 1.42689 5.77773 1.45682 5.69337C1.48676 5.60901 1.54051 5.53514 1.61158 5.48071C1.68264 5.42628 1.76796 5.39362 1.85721 5.38669L4.86578 4.94097C4.94172 4.93256 5.01413 4.90439 5.07579 4.85928C5.13745 4.81416 5.18621 4.75367 5.21721 4.68383L6.58006 1.9324C6.61718 1.85227 6.67644 1.78442 6.75086 1.73687C6.82528 1.68933 6.91175 1.66406 7.00006 1.66406C7.08838 1.66406 7.17485 1.68933 7.24927 1.73687C7.32369 1.78442 7.38295 1.85227 7.42006 1.9324V1.9324Z" stroke="#E8E8F0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="typography-small d-block">
                            Finalizado
                        </span>
                    </div>
                    <h2 class="typography-title-4 text-space">
                        Palavra Destaque tela final
                    </h2>
                    <h2 class="typography-title-1 text-space">
                        Titulo tela final
                    </h2>
                    <div class="typography-large text-space">
                        Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;Parágrafo tela final&nbsp;
                    </div>
                    <div class="nps-aquisicao__finish-button">
                                <mahoe-button icon="/content/dam/webapp--adobe-experience-ds/Icons - cópia.svg" icon-position="left" target="_self" class="d-none d-md-flex hydrated" size="md"><!----><button type="button" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/Icons - cópia.svg" class="icon__left" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                    Concluir Desktop
                                </span></span><div class="mahoe-ripple"></div></button></mahoe-button>

                                <mahoe-button icon="/content/dam/webapp--adobe-experience-ds/Icons - cópia.svg" icon-position="right" target="_self" class="d-flex d-md-none hydrated" size="md"><!----><button type="button" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><img alt="Ícone" src="/content/dam/webapp--adobe-experience-ds/Icons - cópia.svg" class="icon__right" aria-hidden="true" width="20" height="20"><span class="mahoe-button__label">
                                    Concluir Mobile
                                </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
                    </div>
                </div>
            </div>
            <div class="nps-aquisicao__image">
                <picture class="nps-aquisicao__picture">
                    <source class="image-default" media="(min-width: 768px)" srcset="
                            /content/dam/webapp--aem-institucional/710x688.webp
                        " width="568" height="688">
                    <img class="image-default" alt="#" width="303" height="335" src="/content/dam/webapp--aem-institucional/710x688.webp">
                </picture>
            </div>
        </div>
    </div>
    <div class="nps-aquisicao nps-aquisicao--error d-none b-sizing" data-js="nps-aquisicao-fluxo-erro">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="nps-aquisicao__flag-error">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9992 38.5725C30.2559 38.5725 38.5706 30.2578 38.5706 20.0011C38.5706 9.7444 30.2559 1.42969 19.9992 1.42969C9.74245 1.42969 1.42773 9.7444 1.42773 20.0011C1.42773 30.2578 9.74245 38.5725 19.9992 38.5725Z" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20 10V18.5714" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M19.9989 28.572C20.7879 28.572 21.4275 27.9324 21.4275 27.1434C21.4275 26.3544 20.7879 25.7148 19.9989 25.7148C19.2099 25.7148 18.5703 26.3544 18.5703 27.1434C18.5703 27.9324 19.2099 28.572 19.9989 28.572Z" stroke="#F3F4F9" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div class="nps-aquisicao__text-error d-none" data-js="nps-aquisicao-fluxo-erro-respondida">
                        <h2 class="typography-big-text-2">
                            Pesquisa já respondida ou ela não está mais
                            disponível
                        </h2>
                    </div>
                    <div class="nps-aquisicao__text-error d-none" data-js="nps-aquisicao-fluxo-erro-link-expirado">
                        <h2 class="typography-big-text-2">
                            O link para esta pesquisa está inválido ou expirado
                        </h2>
                    </div>
                    <div class="nps-aquisicao__text-error d-none" data-js="nps-aquisicao-fluxo-erro-manutencao">
                        <h2 class="typography-big-text-2">
                            No momento não conseguimos abrir a página solicitada
                        </h2>
                        <p class="typography-large">
                            Tente novamente mais tarde.
                        </p>
                    </div>
                    <div class="nps-aquisicao__button-error">
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

  test("check if slider index value increased", () => {
    const npsSlider = new NpsAquisicaoSlider();
    npsSlider.showSlide(1);
    expect(npsSlider.$currentIndex).toBe(1);
  });

  test("check if slider index value decreased", () => {
    const npsSlider = new NpsAquisicaoSlider();
    npsSlider.$currentIndex = 4;
    npsSlider.showSlide(npsSlider.$currentIndex - 1);
    expect(npsSlider.$currentIndex).toBe(3);
  });

  test("check if cpf parameter was stored locally", () => {
    const urlParams = new NpsAquisicaoUrlParams();
    urlParams.cpfParam = "01234567890";
    urlParams.productParam = "09876543210";
    urlParams.storeParamsLocally();
    const cParam = localStorage.getItem("c");
    expect(cParam).toBe("01234567890");
  });

  test("check if product parameter was stored locally", () => {
    const urlParams = new NpsAquisicaoUrlParams();
    urlParams.cpfParam = "01234567890";
    urlParams.productParam = "CARTOES";
    urlParams.storeParamsLocally();
    const cParam = localStorage.getItem("pr");
    expect(cParam).toBe("CARTOES");
  });

  test("validate recaptcha callback", () => {
    const formNPS = new NpsAquisicaoSendData();
    const response = "";
    formNPS.recaptchaResponse = response;
    formNPS.isCaptchaValid = true;
    expect(formNPS.isCaptchaValid).toBe(true);
  });

  test("handle success", () => {
    const formNPS = new NpsAquisicaoSendData();
    formNPS.handleSuccess();
    const formSuccessActive =
      formNPS.$wrapperSuccess.classList.contains("nps-aquisicao__success");
    expect(formSuccessActive).toBe(true);
  });

  test("handle error", () => {
    const formNPS = new NpsAquisicaoSendData();
    formNPS.handleError();
    const formErrorActive =
      !formNPS.$wrapperMainStream.classList.contains("d-none") &&
      formNPS.$wrapperErroFlow.classList.contains("d-none") &&
      formNPS.$flowErrorResquest.classList.contains("d-none");
    expect(formErrorActive).toBe(false);
  });
});
