import { NpsAtendimentoUrlParams } from "./Nps-Atendimento-Url-Paramns";
import { load } from 'recaptcha-v3';

export class NpsAtendimentoSendData {
  isCaptchaValid: boolean;
  recaptchaResponse = "";
  $npsAtendimentoEndPoint = document.querySelector(
    `[data-js=nps-endpoint-input]`
  ) as HTMLInputElement;
  private urlParamsCpf = new URLSearchParams(window.location.search);
  private urlParamsProtocol = new URLSearchParams(window.location.search);
  private urlParamansUtmSource = new URLSearchParams(window.location.search)
  private origemPesquisa = window.location.origin + window.location.pathname as any;
  private npsAtendimentoUrlParamns: NpsAtendimentoUrlParams;
  // Wrappers
  private $npsTestimonyValue = document.querySelector(
    `[data-js=nps-atendimento-depoimento]`
  );
  $wrapperErroFlow: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-erro]`
  );
  $wrapperMainStream: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-principal]`
  );
  $wrapperTestimony: HTMLElement = document.querySelector(
    ".nps-atendimento__wrapper-testimony"
  );  
  $wrapperSuccess: HTMLElement = document.querySelector(
    ".nps-atendimento__wrapper-success"
  );
  $flowErrorResquest: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-erro-manutencao]`
  );
  //   Buttons
  private $nextStep1Button = document.querySelector(
    `[data-js=nps-atendimento-button-step-1]`
  );
  private $nextStep2Button = document.querySelector(
    `[data-js=nps-atendimento-button-step-2]`
  );
  private $finishQuizButton = document.querySelector(
    `[data-js=nps-atendimento-button-submit]`
  ) as HTMLButtonElement;
  private nextStep1Tracker : string;
  private nextStep2Tracker : string;
  private nextStep3Tracker : string;
  private $botaoSim = document.querySelector(
    `[data-js=nps-atendimento-botao-sim]`
  ) as HTMLButtonElement;
  private $botaoNao = document.querySelector(
    `[data-js=nps-atendimento-botao-nao]`
  ) as HTMLButtonElement;
  private $npsScoreButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(
      ".nps-atendimento__score-list > .nps-atendimento__score-list-item > button"
    );
  // Data to be send
  private $yesOrNoQuestion: boolean;
  private $npsScore: any;
  private $npsTestimony: string;
  $formLeadVersion = document.querySelector(
    `[data-js=nps-captcha-version]`
  ) as HTMLInputElement;
  $formLeadSiteKey = document.querySelector(
    `[data-js=nps-captcha-siteKey]`
  ) as HTMLInputElement;

  constructor() {
    this.npsAtendimentoUrlParamns = new NpsAtendimentoUrlParams();
    setTimeout(() => {
      this.getCaptchaToken();
      this.initFormEvent();
    }, 1000);
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
    this.nextStep1Tracker = this.$nextStep1Button.getAttribute("data-track");
    this.nextStep2Tracker = this.$nextStep2Button.getAttribute("data-track");
    this.nextStep3Tracker = this.$finishQuizButton.getAttribute("data-track");

    this.$botaoSim.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      this.changeBotaoBoleanoState(true, this.$botaoSim, this.$botaoNao);
    });

    this.$botaoNao.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      this.changeBotaoBoleanoState(false, this.$botaoNao, this.$botaoSim);
    });

    this.$finishQuizButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.$npsTestimonyValue
      .querySelector("textarea")
      .addEventListener("blur", () => {
        this.getTestimonyValue();
      });

    this.choiceScore();
  }

  handleSubmit = () => {
    this.$finishQuizButton.setAttribute("data-track", (
      this.nextStep3Tracker + (this.$npsTestimony ? "ComTexto" : "SemTexto")
    ));
    if (this.isCaptchaValid) {
      this.$finishQuizButton.querySelector("button").innerText = "Enviando...";
      this.sendFormData();
    }
  };

  private choiceScore = () => {
    this.$npsScoreButtons.forEach((scoreButton) => {
      scoreButton.addEventListener("click", () => {
        this.$npsScoreButtons.forEach((button) => {
          button.classList.remove("active");
        });
        this.$npsScore = scoreButton.value;
        this.$nextStep2Button.setAttribute("data-track", (this.nextStep2Tracker + this.$npsScore));
        this.$nextStep2Button.setAttribute("disabled", "false");
        scoreButton.classList.add("active");
      });
    });
  };
  
  private changeBotaoBoleanoState = (value, chosenBtn, remainedBtn) => {
    this.$yesOrNoQuestion = value;
    this.$nextStep1Button.setAttribute("data-track", (
      this.nextStep1Tracker + (this.$yesOrNoQuestion == true ? "Sim" : "Nao")
      ));
      chosenBtn.setAttribute("variant", "primary");
      remainedBtn.setAttribute("variant", "secondary");
      this.$nextStep1Button.setAttribute("disabled", "false");
    };
    
  private getTestimonyValue = () => {
    this.$npsTestimony = this.$npsTestimonyValue.querySelector("textarea").value;
  };

  sendFormData() {
    const API_URL = this.$npsAtendimentoEndPoint.value;
    const utmSource = this.urlParamansUtmSource.get("utm_source") ? this.urlParamansUtmSource.get("utm_source") : "sem utm source"
    const data = { 
      CPF: this.urlParamsCpf.get("c"),
      COMENTARIO: this.$npsTestimony, 
      NOTA: this.$npsScore,
      SOLIC_RESOLVIDA: this.$yesOrNoQuestion,
      PROTOCOLO: this.urlParamsProtocol.get("p"),
      URL_ORIGEM: this.origemPesquisa,
      ORIGEM: utmSource
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
    this.$wrapperSuccess.classList.add("nps-atendimento__success");
    this.$wrapperTestimony.classList.add("nps-atendimento__success");
    this.npsAtendimentoUrlParamns.storeParamsLocally();
  }

  handleError() {
    this.$wrapperMainStream.classList.add("d-none");
    this.$wrapperErroFlow.classList.remove("d-none");
    this.$flowErrorResquest.classList.remove("d-none");
  }
}
