import "./Formulario-PreLead.scss";

import { validateEmail } from "@helpers/validators/email/email";
import { load } from 'recaptcha-v3';

export class FormPreLead {
  isEmailValid: boolean;
  isCaptchaValid: boolean;
  recaptchaResponse = "";
  $formPreLead = document.querySelector(`[data-js=pre-lead-form]`);
  $formPreLeadEndPoint = document.querySelector(
    `[data-js=form-lead__endpoint]`
  ) as HTMLInputElement;
  $formPreLeadOrigin = document.querySelector(
    `[data-js=form-lead__lead-origin]`
  ) as HTMLInputElement;
  $emailWrapper = document.querySelector(`[data-js=pre-lead-email-input]`);
  $submitButton = document.querySelector(
    `[data-js=pre-lead-submit-button]`
  ) as HTMLButtonElement;
  $formPreLeadSucessQRCode = document.querySelector(
    `[data-js=pre-lead-form-sucesso-qr-code]`
  );
  $formError = document.querySelector(
    `[data-js=pre-lead-form-error]`
  ) as HTMLSpanElement;
  $formLeadVersion = document.querySelector(
    `[data-js=form-lead__version]`
  ) as HTMLInputElement;
  $formLeadSiteKey = document.querySelector(
    `[data-js=pre-lead-siteKey]`
  ) as HTMLInputElement;

  constructor() {
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
    this.$emailWrapper.querySelector("input").addEventListener("blur", (e) => {
      this.isEmailValid = validateEmail(
        (e.target as HTMLInputElement).value
      );
      this.changeEmailState();
      this.validateAllFields();
    });

    this.$submitButton
      .querySelector("button")
      .addEventListener("click", this.handleSubmit);
  }

  changeEmailState = () => {
    if (!this.isEmailValid) {
      this.$emailWrapper.setAttribute("invalid", "true");
      this.$emailWrapper.setAttribute(
        "support-message",
        "Favor inserir um e-mail válido."
      );
      return;
    }
    this.$emailWrapper.removeAttribute("invalid");
    this.$emailWrapper.setAttribute("support-message", "");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isEmailValid && this.isCaptchaValid) {
      this.$submitButton.querySelector("button").innerText = "Enviando...";
      this.sendFormData();
    }
  };

  validateAllFields() {
    if (this.isEmailValid && this.isCaptchaValid) {
      this.$submitButton.disabled = false;
      this.$formError.classList.remove("active");
    } else {
      this.$submitButton.disabled = true;
    }
  }

  sendFormData() {
    const API_URL = this.$formPreLeadEndPoint.value;
    const data = {
      EMAIL: this.$emailWrapper.querySelector("input").value,
      HOME: this.$formPreLeadOrigin,
      ORIGEM_MIDIA: false,
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
      .catch((error) => {
        console.error(error);
        this.handleError();
      });
  }

  handleSuccess() {
    this.$formPreLead.classList.add("disabled");
    this.$formPreLeadSucessQRCode.classList.add("active");
    this.clearFields();
  }

  handleError() {
    this.$formError.classList.add("active");
    this.clearFields();
  }

  clearFields() {
    this.isEmailValid = false;
    this.isCaptchaValid = false;
    this.$emailWrapper.querySelector("input").value = "";
    this.$submitButton.disabled = true;
  }
}

new FormPreLead();
