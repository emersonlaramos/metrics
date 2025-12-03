import "./Nps-Relacional.scss";
import { load } from 'recaptcha-v3';

export default class NpsRelacional {
    isCaptchaValid: boolean;
    recaptchaResponse = "";
    $npsRelacionalEndPoint = document.querySelector(
        `[data-js=nps-endpoint-input]`
    ) as HTMLInputElement;
    private urlParamsCpf = new URLSearchParams(window.location.search);
    private urlParamsProtocol = new URLSearchParams(window.location.search);
    private origemPesquisa = window.location.origin + window.location.pathname as any;
    //  Wrappers
    private $npsTestimonyValue = document.querySelector(
        `[data-js=nps-relacional-depoimento]`
    );
    $wrapperMainStream: HTMLElement = document.querySelector(
        `[data-js=nps-relacional-fluxo-principal]`
    );
    $wrapperForm: HTMLElement = document.querySelector(
        ".nps-relacional__wrapper-form"
    );  
    $wrapperSuccess: HTMLElement = document.querySelector(
        ".nps-relacional__wrapper-success"
    );
    $wrapperErroFlow: HTMLElement = document.querySelector(
        `[data-js=nps-relacional-fluxo-erro]`
    );
    $flowErrorResquest: HTMLElement = document.querySelector(
        `[data-js=nps-relacional-fluxo-erro-manutencao]`
    );
    private $flowAlreadyAnswered: HTMLElement = document.querySelector(
        `[data-js=nps-relacional-fluxo-erro-respondida]`
    );
    private $expiredLinkFlow: HTMLElement = document.querySelector(
        `[data-js=nps-relacional-fluxo-erro-link-expirado]`
    );
    //  Buttons
    private $finishQuizButton = document.querySelector(
        `[data-js=nps-relacional-button-submit]`
    ) as HTMLButtonElement;
    private $npsScoreButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
        ".nps-relacional__score-list > .nps-relacional__score-list-item > button"
    );
    //  Url Params
    cpfParam: string;
    protocolParam: string;
    //  Data to be sent
    private $npsScore: any;
    private $npsTestimony: string;
    $formLeadVersion = document.querySelector(
        `[data-js=nps-captcha-version]`
    ) as HTMLInputElement;
    $formLeadSiteKey = document.querySelector(
        `[data-js=nps-captcha-siteKey]`
    ) as HTMLInputElement;

    constructor() {  
        setTimeout(() => {
            this.getCaptchaToken();
            this.initFormEvent();
        }, 1000);

        const { cpfParam, protocolParam } = this.getUrlParams();

        if (!cpfParam || !protocolParam) {
            this.$wrapperMainStream.classList.remove("d-grid");
            this.$wrapperMainStream.classList.add("d-none");
            this.$wrapperErroFlow.classList.remove("d-none");
            this.$wrapperErroFlow.classList.add("d-flex");
            this.$expiredLinkFlow.classList.remove("d-none");
            return;
        }
    
        this.cpfParam = cpfParam;
        this.protocolParam = protocolParam;
    
        if (this.protocolParam === localStorage.getItem("p")) {
            this.$wrapperMainStream.classList.remove("d-grid");
            this.$wrapperMainStream.classList.add("d-none");
            this.$wrapperErroFlow.classList.remove("d-none");
            this.$wrapperErroFlow.classList.add("d-flex");
            this.$flowAlreadyAnswered.classList.remove("d-none");
        } else {
            this.protocolParam = localStorage.getItem("p");
            this.protocolParam = protocolParam;
            this.$wrapperErroFlow.classList.add("d-none");
            this.$wrapperMainStream.classList.remove("d-none");
            this.$wrapperMainStream.classList.add("d-grid");
        }
    }

    async getCaptchaToken() {
        const recaptcha = await load(this.$formLeadSiteKey?.value, { useEnterprise: true })
        const token = await recaptcha.execute('SIGNUP')
        this.recaptchaResponse = token
        if (token) {
          this.isCaptchaValid = true
        }
      }
    

    initFormEvent() {
        this.$finishQuizButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    
        this.$npsTestimonyValue
            .querySelector("textarea")
            .addEventListener("blur", () => {
                this.getTestimonyValue();
            })
        ;
    
        this.choiceScore();
    }

    recaptchaCallbackNpsRelacional = (response: any) => {
        this.recaptchaResponse = response;
        this.isCaptchaValid = true;
        this.validateCaptcha();
    };


    private getUrlParams(): { cpfParam: string; protocolParam: string } {
        const searchParams = new URLSearchParams(window.location.search);
        const cpfParam = searchParams.get("c");
        const protocolParam = searchParams.get("p");
        return { cpfParam, protocolParam };
    }
    
    public storeParamsLocally() {
        if (this.cpfParam && this.protocolParam) {
            localStorage.setItem("c", this.cpfParam);
            localStorage.setItem("p", this.protocolParam);
        }
    }

    private choiceScore = () => {
        this.$npsScoreButtons.forEach((scoreButton) => {
            scoreButton.addEventListener("click", () => {
                this.$npsScoreButtons.forEach((button) => {
                    button.classList.remove("active");
                });
                this.$npsScore = scoreButton.value;
                scoreButton.classList.add("active");
                this.validateCaptcha();
            });
        });
    };

    private getTestimonyValue = () => {
        this.$npsTestimony =
            this.$npsTestimonyValue.querySelector("textarea").value;
    };

    validateCaptcha = () => {
        if (this.isCaptchaValid) {
            this.$finishQuizButton.disabled = false;
        }
    };

    handleSubmit = () => {
        this.$finishQuizButton.querySelector("button").innerText = "Enviando...";
        this.sendFormData();
    };

    sendFormData() {
        const API_URL = this.$npsRelacionalEndPoint.value;
        const data = { 
            CPF: this.urlParamsCpf.get("c"),
            COMENTARIO: this.$npsTestimony, 
            NOTA: this.$npsScore,
            SOLIC_RESOLVIDA: false,
            PROTOCOLO: this.urlParamsProtocol.get("p"),
            ORIGEM: this.origemPesquisa
        };
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization-Captcha": this.recaptchaResponse,
                "SiteKey": this.$formLeadSiteKey?.value
            },
            body: JSON.stringify(data),
        };
        fetch(API_URL, options)
            .then((response) => {
            if (response.status >= 200 && response.status < 400) {
                this.handleSuccess();
            } else {
                this.handleError();
            }
            })
            .catch(() => {
                this.handleError();
            })
        ;
    }

    handleSuccess() {
        this.$wrapperForm.classList.add("d-none");
        this.$wrapperSuccess.classList.remove("d-none");
        this.$wrapperSuccess.classList.add("d-flex");
        this.storeParamsLocally();
    }

    handleError() {
        this.$wrapperMainStream.classList.add("d-none");
        this.$wrapperErroFlow.classList.remove("d-none");
        this.$flowErrorResquest.classList.remove("d-none");
    }
}
