import { NpsAquisicaoUrlParams } from "./Nps-Aquisicao-Url-Paramns";
import { load } from "recaptcha-v3";

export class NpsAquisicaoSendData {
  isCaptchaValid: boolean;
  recaptchaResponse = "";
  $npsAquisicaoEndPoint = document.querySelector(
    `[data-js=nps-endpoint-input]`
  ) as HTMLInputElement;
  private urlParamsCpf = new URLSearchParams(window.location.search);
  private urlParamsProduct = new URLSearchParams(window.location.search);
  private npsAquisicaoUrlParamns: NpsAquisicaoUrlParams;
  // Wrappers
  private $npsTestimonyValue = document.querySelector(
    `[data-js=nps-aquisicao-depoimento]`
  );
  private $wrapperOptions: HTMLElement[];
  $wrapperErroFlow: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-erro]`
  );
  $wrapperMainStream: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-principal]`
  );
  $wrapperLastStep: HTMLElement = document.querySelector(
    ".nps-aquisicao__wrapper-last-step"
  );
  $wrapperSuccess: HTMLElement = document.querySelector(
    ".nps-aquisicao__wrapper-success"
  );
  $flowErrorResquest: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-erro-manutencao]`
  );
  // Inputs
  private $optionsCheckboxInput: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(`[data-js=nps-aquisicao-options-input]`);
  private $optionsOtherInput: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(`[data-js=nps-aquisicao-options-other-input]`);
  //   Buttons
  private $nextStep1Button = document.querySelector(
    `[data-js=nps-aquisicao-button-step-1]`
  );
  private $nextStep2Button = document.querySelector(
    `[data-js=nps-aquisicao-button-step-2]`
  );
  private $nextStep3Button = document.querySelector(
    `[data-js=nps-aquisicao-button-step-3]`
  );
  private $nextStep4Button = document.querySelector(
    `[data-js=nps-aquisicao-button-step-4]`
  );
  private $nextStep5Button = document.querySelector(
    `[data-js=nps-aquisicao-button-step-5]`
  );
  private $otherOptionButton: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(`[data-js=nps-aquisicao-other-option-btn]`);
  private $finishQuizButton = document.querySelector(
    `[data-submit=nps-aquisicao-button-submit]`
  ) as HTMLButtonElement;
  private nextStep1Tracker: string;
  private nextStep2Tracker: string;
  private nextStep3Tracker: string;
  private nextStep4Tracker: string;
  private nextStep5Tracker: string;
  private nextStep6Tracker: string;
  private $npsScoreButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(
      ".nps-aquisicao__score-list > .nps-aquisicao__score-list-item > button"
    );
  private $npsScoreButtons2: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(
      ".nps-aquisicao__score-list--2 > .nps-aquisicao__score-list-item > button"
    );
  // Data to be send
  private selectedOptionsValuesArray: string[] = [];
  private selectedTextInputValuesArray: string[] = [];
  private data: any = {
    CPF: this.urlParamsCpf.get("c"),
    PRODUTO: this.urlParamsProduct.get("pr"),
    NOTA: "",
    COMENTARIO: "",
    CONCORRENCIA: "",
    MOTIVACAO: "",
    FACILIDADE: "",
    ONDE_CONHECEU: "",
    ORIGEM: this.urlParamsProduct.get("utm_source"),
    CONCORRENCIA_OUTROS: "",
    MOTIVACAO_OUTROS: "",
    ORIGEM_OUTROS: "",
  };
  private currentIndex: number;
  private $npsScore: any;
  private $npsScore2: any;
  private $npsTestimony: string;
  private $npsConcorrencia = "";
  private $npsMotivacao = "";
  private $npsOndeConheceu = "";
  private $npsConcorrenciaOutros = "";
  private $npsMotivacaoOutros = "";
  private $npsOndeConheceuOutros = "";
  $formLeadVersion = document.querySelector(
    `[data-js=nps-captcha-version]`
  ) as HTMLInputElement;
  $formLeadSiteKey = document.querySelector(
    `[data-js=nps-captcha-siteKey]`
  ) as HTMLInputElement;

  constructor() {
    this.npsAquisicaoUrlParamns = new NpsAquisicaoUrlParams();
    this.$wrapperOptions = Array.from(
      document.querySelectorAll(`[data-js=nps-aquisicao-options-container]`)
    );
    setTimeout(() => {
      this.getCaptchaToken();
      this.initFormEvent();
    }, 1000);
  }

  async getCaptchaToken() {
    const recaptcha = await load(this.$formLeadSiteKey?.value, {
      useEnterprise: true,
    });
    const token = await recaptcha.execute("SIGNUP");
    this.recaptchaResponse = token;
    if (token) {
      this.isCaptchaValid = true;
    }
  }

  initFormEvent() {
    this.currentIndex = 0;
    this.nextStep1Tracker = this.$nextStep1Button.getAttribute("data-track");
    this.nextStep2Tracker = this.$nextStep2Button.getAttribute("data-track");
    this.nextStep3Tracker = this.$nextStep3Button.getAttribute("data-track");
    this.nextStep4Tracker = this.$nextStep4Button.getAttribute("data-track");
    this.nextStep5Tracker = this.$nextStep5Button.getAttribute("data-track");
    this.nextStep6Tracker = this.$nextStep5Button.getAttribute("data-track");

    this.$finishQuizButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.$npsTestimonyValue
      .querySelector("textarea")
      .addEventListener("blur", () => {
        this.getTestimonyValue();
      });

    this.$nextStep2Button.addEventListener("click", () => {
      this.$nextStep2Button.setAttribute(
        "data-track",
        this.nextStep2Tracker +
          (this.$npsTestimonyValue.querySelector("textarea").value
            ? "ComTexto"
            : "SemTexto")
      );
    });

    this.choiceScore();
    this.choiceScore2();
    this.showOtherOptionInput();
    this.addActiveClassOptionButton();
  }

  handleSubmit = () => {
    if (this.isCaptchaValid) {
      this.$finishQuizButton.querySelector("button").innerText = "Enviando...";
      this.sendFormData();
    }
  };

  private addActiveClassOptionButton = () => {
    this.$wrapperOptions.forEach((wrapper, index) => {
      const $nextButton: any = document.querySelector(
        `[data-js=nps-aquisicao-button-step-${index + 4}]`
      );
      wrapper
        .querySelectorAll("[data-js=nps-aquisicao-options-input]")
        .forEach((optionCheckbox: HTMLInputElement) => {
          optionCheckbox.addEventListener("change", () => {
            optionCheckbox.parentElement.classList.toggle("active");

            this.selectedOptionsValuesArray = [];

            wrapper
              .querySelectorAll("[data-js=nps-aquisicao-options-input]")
              .forEach((inputCheckbox: HTMLInputElement) => {
                if (inputCheckbox.checked) {
                  this.selectedOptionsValuesArray.push(inputCheckbox.value);
                }
              });

            switch (index) {
              case 0:
                this.data.CONCORRENCIA =
                  this.selectedOptionsValuesArray.join(" ");
                this.$nextStep4Button.setAttribute(
                  "data-track",
                  this.nextStep4Tracker +
                    `${this.selectedOptionsValuesArray
                      .join("/")
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")}`
                );
                break;
              case 1:
                this.data.MOTIVACAO = this.selectedOptionsValuesArray.join(" ");
                this.$nextStep5Button.setAttribute(
                  "data-track",
                  (this.nextStep5Tracker += `${this.selectedOptionsValuesArray
                    .join("/")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}`)
                );
                break;
              case 2:
                this.data.ONDE_CONHECEU = this.selectedOptionsValuesArray.join(" ");
                break;
            }

            enableOrDisableButton(
              $nextButton,
              this.selectedOptionsValuesArray,
              this.selectedTextInputValuesArray
            );
          });
        });

      wrapper
        .querySelectorAll("[data-js=nps-aquisicao-options-other-input]")
        .forEach((input: HTMLElement) => {
          input.querySelector("input").addEventListener("input", () => {
            const otherInputValue = input.querySelector("input").value.trim();

            if (otherInputValue) {
              this.selectedTextInputValuesArray = [otherInputValue];
            } else {
              this.selectedTextInputValuesArray = [];
            }

            switch (index) {
              case 0:
                if(!this.data.CONCORRENCIA.includes("Outros")) {
                  this.data.CONCORRENCIA += " Outros"
                }
                this.data.CONCORRENCIA_OUTROS = otherInputValue;
                this.$nextStep4Button.setAttribute(
                  "data-track",
                  this.nextStep4Tracker + "Outros"
                );
                break;
              case 1:
                if(!this.data.MOTIVACAO.includes("Outros")) {
                  this.data.MOTIVACAO += " Outros"
                }
                this.data.MOTIVACAO_OUTROS = otherInputValue;
                this.$nextStep5Button.setAttribute(
                  "data-track",
                  this.nextStep5Tracker + "Outros"
                );
                break;
              case 2:
                if(!this.data.ONDE_CONHECEU.includes("Outros")) {
                  this.data.ONDE_CONHECEU += " Outros"
                }
                this.data.ORIGEM_OUTROS = otherInputValue;
                break;
            }

            enableOrDisableButton(
              $nextButton,
              this.selectedOptionsValuesArray,
              this.selectedTextInputValuesArray
            );
          });
        });

      const enableOrDisableButton = (
        button: any,
        selectedOptions: string[],
        selectedTextInputs: string[]
      ) => {
        if (selectedOptions.length === 0 && selectedTextInputs.length === 0) {
          button.setAttribute("disabled", "true");
        } else {
          button.removeAttribute("disabled");
        }
      };
    });
  };

  private showOtherOptionInput = () => {
    this.$otherOptionButton.forEach((otherButton) => {
      otherButton.addEventListener("click", () => {
        otherButton.parentElement.classList.toggle("active");
        otherButton.classList.toggle("active");
      });
    });
  };

  

  private choiceScore = () => {
    this.$npsScoreButtons.forEach((scoreButton) => {
      scoreButton.addEventListener("click", () => {
        this.$npsScoreButtons.forEach((button) => {
          button.classList.remove("active");
        });
        this.$npsScore = scoreButton.value;
        this.$nextStep1Button.setAttribute(
          "data-track",
          this.nextStep1Tracker + this.$npsScore
        );
        this.data.NOTA = this.$npsScore;
        this.$nextStep1Button.setAttribute("disabled", "false");
        scoreButton.classList.add("active");
      });
    });
  };

  private choiceScore2 = () => {
    this.$npsScoreButtons2.forEach((scoreButton2) => {
      scoreButton2.addEventListener("click", () => {
        this.$npsScoreButtons2.forEach((button) => {
          button.classList.remove("active");
        });
        this.$npsScore2 = scoreButton2.value;
        this.$nextStep3Button.setAttribute(
          "data-track",
          this.nextStep1Tracker + this.$npsScore2
        );
        this.data.FACILIDADE = this.$npsScore2;
        this.$nextStep3Button.setAttribute("disabled", "false");
        scoreButton2.classList.add("active");
      });
    });
  };

  private getTestimonyValue = () => {
    this.data.COMENTARIO =
      this.$npsTestimonyValue.querySelector("textarea").value;
  };

  sendFormData() {
    const API_URL = this.$npsAquisicaoEndPoint.value;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization-Captcha": this.recaptchaResponse,
        "SiteKey": this.$formLeadSiteKey?.value
      },
      body: JSON.stringify(this.data),
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
      });
  }

  handleSuccess() {
    this.$wrapperSuccess.classList.add("nps-aquisicao__success");
    this.npsAquisicaoUrlParamns.storeParamsLocally();
  }

  handleError() {
    this.$wrapperMainStream.classList.add("d-none");
    this.$wrapperErroFlow.classList.remove("d-none");
    this.$flowErrorResquest.classList.remove("d-none");
  }
}
