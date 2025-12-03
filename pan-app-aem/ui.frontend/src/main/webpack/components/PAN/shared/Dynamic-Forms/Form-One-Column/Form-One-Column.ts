import "./Form-One-Column.scss";

import { validateName } from "@helpers/validators/name/name";
import { validateEmail } from "@helpers/validators/email/email";
import { validatePhone } from "@helpers/validators/phone/phone";
import { createPhoneMask } from "@helpers/masks/phone/phone";
import { validateCPForCNPJ } from "@helpers/validators/cpfAndCnpj/cpfAndCnpj";
import { createCpfOrCnpjMask } from "@helpers/masks/cpfAndCnpj/cpfAndCnpj";
import { load } from "recaptcha-v3";

export class FormularioDinamicoImagemInteiraLead {
  isCaptchaValid: boolean;
  recaptchaResponse = "";
  private isNomeValid: boolean;
  private isEmailValid: boolean;
  private isCelularValid: boolean;
  private isCPFValid: boolean;
  private isCNPJValid: boolean;
  private isCpfOrCnpjValid: boolean;
  private nomeInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-nome]`
  );
  private emailInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-email]`
  );
  private phoneInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-telefone]`
  );
  private cpfInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-cpf]`
  );
  private cnpjInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-cnpj]`
  );
  private cpfOrCnpjInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-cpf-cnpj]`
  );
  private currencyInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-currency]`
  );
  private dateOfBirthInput: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-date-of-birth]`
  );
  private checkboxInputWrapper: HTMLFieldSetElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-input-data-checkbox]`
  );
  private allRequiredInputs: NodeListOf<HTMLElement> =
    document.querySelectorAll(`[required=true]`);
  private allValidInputs = Array.from(this.allRequiredInputs).every(
    (div) => div.getAttribute("data-valid") === "true"
  );
  private formDinamicoOneColumn: HTMLFormElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-form]`
  );
  private formDinamicoOneColumnFeedback: HTMLElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-feedback]`
  );
  private formDinamicoOneColumnEndPoint: HTMLInputElement =
    document.querySelector(`[data-js=dynamic-forms-one-column-endpoint]`);
  private formDinamicoOneColumnOriginURL: any =
    window.location.origin + window.location.pathname;
  private formDinamicoOneColumnGroup: HTMLInputElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-group]`
  );
  private formDinamicoOneColumnSiteKey: HTMLInputElement =
    document.querySelector(`[data-js=lead__captcha-siteKey]`);
  private formDinamicoOneColumnFormError: HTMLSpanElement =
    document.querySelector(`[data-js=dynamic-forms-one-column-form-error]`);
  private data: any = {};
  private submitButton: HTMLButtonElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-submit-button]`
  );
  private wrapperCheckbox: HTMLElement = document.querySelector(
    `[data-js=dynamic-forms-one-column-wrapper-data-checkbox]`
  );

  constructor() {
    setTimeout(() => {
      this.addOriginAndGroupData();
      this.initFormEventNome();
      this.initFormEventEmail();
      this.initFormEventTelefone();
      this.initFormEventCpf();
      this.initFormEventCnpj();
      this.initFormEventCpfOrCnpj();
      this.initFormEventCurrency();
      this.initFormEventBirthDay();
      this.initFormEventCheckbox();
      this.submitButton.addEventListener("click", this.handleSubmit);
      this.getCaptchaToken();
    }, 1000);
  }

  async getCaptchaToken() {
    const recaptcha = await load(this.formDinamicoOneColumnSiteKey?.value, {
      useEnterprise: true,
    });
    const token = await recaptcha.execute("SIGNUP");
    this.recaptchaResponse = token;
    if (token) {
      this.isCaptchaValid = true;
    }
  }

  // Start fields events

  initFormEventNome() {
    if (this.nomeInput) {
      this.nomeInput.querySelector("input").addEventListener("blur", (e) => {
        this.validateName();
        this.checkFormValidity();
      });
    }
  }

  initFormEventCurrency() {
    if (this.currencyInput) {
      this.currencyInput
        .querySelector("input")
        .addEventListener("blur", (e) => {
          this.checkFormValidity();
          this.validateCurrency();
        });
    }
  }

  initFormEventBirthDay() {
    if (this.dateOfBirthInput) {
      this.dateOfBirthInput
        .querySelector("input")
        .addEventListener("blur", (e) => {
          this.checkFormValidity();
          this.validateBirthDay();
        });
    }
  }

  initFormEventEmail() {
    if (this.emailInput) {
      this.emailInput.querySelector("input").addEventListener("blur", (e) => {
        this.isEmailValid = validateEmail((e.target as HTMLInputElement).value);
        this.emailInput.setAttribute(
          "data-valid",
          validateEmail((e.target as HTMLInputElement).value).toString()
        );
        this.changeEmailState();
        this.checkFormValidity();
      });
    }
  }

  initFormEventTelefone() {
    if (this.phoneInput) {
      this.phoneInput.querySelector("input").addEventListener("blur", (e) => {
        this.isCelularValid = validatePhone(
          (e.target as HTMLInputElement).value
        );
        this.phoneInput.setAttribute(
          "data-valid",
          validatePhone((e.target as HTMLInputElement).value).toString()
        );
        this.validateCelular();
        this.checkFormValidity();
      });
      this.usePhoneMask();
    }
  }

  initFormEventCpf() {
    if (this.cpfInput) {
      this.cpfInput.querySelector("input").addEventListener("blur", (e) => {
        this.validateCpf(e);
        this.checkFormValidity();
      });
      this.useCpfMask();
    }
  }

  initFormEventCnpj() {
    if (this.cnpjInput) {
      this.cnpjInput.querySelector("input").addEventListener("blur", (e) => {
        this.validateCnpj(e);
        this.checkFormValidity();
      });
      this.useCnpjMask();
    }
  }

  initFormEventCpfOrCnpj() {
    if (this.cpfOrCnpjInput) {
      this.cpfOrCnpjInput
        .querySelector("input")
        .addEventListener("blur", (e) => {
          this.validateCpfOrCnpj(e);
          this.checkFormValidity();
        });
      this.useCpfOrCnpjMask();
    }
  }

  initFormEventCheckbox() {
    if (this.wrapperCheckbox) {
      this.wrapperCheckbox
        .querySelector("input")
        .addEventListener("click", (e) => {
          this.validateCheckbox();
          this.checkFormValidity();
        });
    }
  }

  // Validating fields

  validateCheckbox() {
    const checkboxInput = this.checkboxInputWrapper.querySelector("input");
    if (this.wrapperCheckbox.getAttribute("required") === "true") {
      if (checkboxInput.checked) {
        this.wrapperCheckbox.classList.remove("error");
        this.wrapperCheckbox.setAttribute("data-valid", "true");
      } else {
        this.wrapperCheckbox.classList.add("error");
        this.wrapperCheckbox.setAttribute("data-valid", "false");
      }
    }
    this.data[checkboxInput.name] = checkboxInput.checked;
  }

  validateName() {
    this.isNomeValid = validateName(
      this.nomeInput.querySelector("input").value
    );
    if (this.nomeInput.getAttribute("required") === "true") {
      if (!this.isNomeValid) {
        this.nomeInput.setAttribute("invalid", "true");
        this.nomeInput.setAttribute(
          "support-message",
          "Por favor informe seu nome completo."
        );
        this.nomeInput.setAttribute("data-valid", "false");
        return;
      }
      this.nomeInput.removeAttribute("invalid");
      this.nomeInput.setAttribute("support-message", "");
      this.nomeInput.setAttribute("data-valid", "true");
    }
    const dataName = this.nomeInput.getAttribute("data-name");
    this.nomeInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.nomeInput.querySelector("input").value;
  }

  changeEmailState() {
    if (!this.isEmailValid) {
      this.emailInput.setAttribute("invalid", "true");
      this.emailInput.setAttribute(
        "support-message",
        "Por favor informe um e-mail válido."
      );
      this.emailInput.setAttribute("data-valid", "false");
      return;
    }
    this.emailInput.removeAttribute("invalid");
    this.emailInput.setAttribute("support-message", "");
    this.emailInput.setAttribute("data-valid", "true");

    const dataName = this.emailInput.getAttribute("data-name");
    this.emailInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.emailInput.querySelector("input").value;
  }

  validateCurrency() {
    if (this.currencyInput.getAttribute("required") === "true") {
      if (this.currencyInput.querySelector("input").value == "") {
        this.currencyInput.setAttribute("data-valid", "false");
        this.currencyInput.setAttribute("invalid", "true");
        this.currencyInput.setAttribute(
          "support-message",
          "Por favor informe um valor."
        );
        return;
      }
      this.currencyInput.setAttribute("data-valid", "true");
      this.currencyInput.removeAttribute("invalid");
      this.currencyInput.setAttribute("support-message", "");
    }
    const dataName = this.currencyInput.getAttribute("data-name");
    this.currencyInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.currencyInput.querySelector("input").value;
  }

  validateBirthDay() {
    if (this.dateOfBirthInput.getAttribute("required") === "true") {
      if (this.dateOfBirthInput.querySelector("input").value == "") {
        this.dateOfBirthInput.setAttribute("data-valid", "false");
        this.dateOfBirthInput.setAttribute("invalid", "true");
        this.dateOfBirthInput.setAttribute(
          "support-message",
          "Por favor informe sua data de nascimento."
        );
        return;
      }
      this.dateOfBirthInput.setAttribute("data-valid", "true");
      this.dateOfBirthInput.removeAttribute("invalid");
      this.dateOfBirthInput.setAttribute("support-message", "");
    }
    const dataName = this.dateOfBirthInput.getAttribute("data-name");
    this.dateOfBirthInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.dateOfBirthInput.querySelector("input").value;
  }

  validateCelular() {
    this.isCelularValid = validatePhone(
      this.phoneInput.querySelector("input").value
    );
    if (!this.isCelularValid) {
      this.phoneInput.setAttribute("invalid", "true");
      this.phoneInput.setAttribute(
        "support-message",
        "Por favor informe um telefone válido."
      );
      return;
    }
    this.phoneInput.removeAttribute("invalid");
    this.phoneInput.setAttribute("support-message", "");
    const dataName = this.phoneInput.getAttribute("data-name");
    this.phoneInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.phoneInput
      .querySelector("input")
      .value.replace(/[\(\)\.\s-]+/g, "");
  }

  validateCpf = (e) => {
    this.isCPFValid = validateCPForCNPJ(
      this.cpfInput.querySelector("input").value
    );
    this.cpfInput.setAttribute(
      "data-valid",
      validateCPForCNPJ((e.target as HTMLInputElement).value).toString()
    );
    if (!this.isCPFValid) {
      this.cpfInput.setAttribute("invalid", "true");
      this.cpfInput.setAttribute(
        "support-message",
        "Por favor informe um CPF válido."
      );
      return;
    }
    this.cpfInput.removeAttribute("invalid");
    this.cpfInput.setAttribute("support-message", "");
    const dataName = this.cpfInput.getAttribute("data-name");
    this.cpfInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.cpfInput.querySelector("input").value;
  };

  validateCnpj = (e) => {
    this.isCNPJValid = validateCPForCNPJ(
      this.cnpjInput.querySelector("input").value
    );
    this.cnpjInput.setAttribute(
      "data-valid",
      validateCPForCNPJ((e.target as HTMLInputElement).value).toString()
    );
    if (!this.isCNPJValid) {
      this.cnpjInput.setAttribute("invalid", "true");
      this.cnpjInput.setAttribute(
        "support-message",
        "Por favor informe um CNPJ válido."
      );
      return;
    }
    this.cnpjInput.removeAttribute("invalid");
    this.cnpjInput.setAttribute("support-message", "");
    const dataName = this.cnpjInput.getAttribute("data-name");
    this.cnpjInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.cnpjInput.querySelector("input").value;
  };

  validateCpfOrCnpj = (e) => {
    this.isCpfOrCnpjValid = validateCPForCNPJ(
      this.cpfOrCnpjInput.querySelector("input").value
    );
    this.cpfOrCnpjInput.setAttribute(
      "data-valid",
      validateCPForCNPJ((e.target as HTMLInputElement).value).toString()
    );
    if (!this.isCpfOrCnpjValid) {
      this.cpfOrCnpjInput.setAttribute("invalid", "true");
      this.cpfOrCnpjInput.setAttribute(
        "support-message",
        "Por favor informe um CPF ou um CNPJ válido."
      );
      return;
    }
    this.cpfOrCnpjInput.removeAttribute("invalid");
    this.cpfOrCnpjInput.setAttribute("support-message", "");
    const dataName = this.cpfOrCnpjInput.getAttribute("data-name");
    this.cpfOrCnpjInput.querySelector("input").dataset.name = dataName;
    this.data[dataName] = this.cpfOrCnpjInput.querySelector("input").value;
  };

  // Apllying masks

  usePhoneMask() {
    this.phoneInput.addEventListener("input", (e: any) => {
      e.target.setAttribute("maxlength", "15");
      e.target.value = createPhoneMask(e);
    });
  }

  useCpfMask() {
    this.cpfInput.addEventListener("input", (e: any) => {
      e.target.setAttribute("maxlength", "14");
      e.target.value = createCpfOrCnpjMask(e);
    });
  }

  useCnpjMask() {
    this.cnpjInput.addEventListener("input", (e: any) => {
      e.target.setAttribute("maxlength", "18");
      e.target.value = createCpfOrCnpjMask(e);
    });
  }

  useCpfOrCnpjMask() {
    this.cpfOrCnpjInput.addEventListener("input", (e: any) => {
      e.target.setAttribute("maxlength", "18");
      e.target.value = createCpfOrCnpjMask(e);
    });
  }

  addOriginAndGroupData() {
    this.data.URL = this.formDinamicoOneColumnOriginURL;
    this.data.GRUPO = this.formDinamicoOneColumnGroup.value;
  }

  // Checking if all fields are valid or not

  checkFormValidity() {
    const allRequiredInputs: NodeListOf<HTMLElement> =
      document.querySelectorAll(`[required=true]`);
    this.allValidInputs = Array.from(allRequiredInputs).every(
      (div) => div.getAttribute("data-valid") === "true"
    );
    if (this.isCaptchaValid) {
      this.submitButton.disabled = !this.allValidInputs;
    }
  }

  // Submit functions

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendFormData();
  };

  sendFormData() {
    const API_URL = this.formDinamicoOneColumnEndPoint.value;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization-Captcha": this.recaptchaResponse,
        "SiteKey": this.formDinamicoOneColumnSiteKey?.value
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

  // Success and Error functions

  handleSuccess() {
    this.formDinamicoOneColumn.classList.add("d-none");
    this.formDinamicoOneColumnFeedback.classList.add("d-block");
    this.clearFields();
  }

  handleError() {
    this.formDinamicoOneColumnFormError.classList.add("d-block");
    this.clearFields();
  }

  // Cleared all fields after sending data

  clearFields() {
    const allFieldsText: NodeListOf<HTMLElement> = document.querySelectorAll(
      `[data-all-inputs=dynamic-forms-one-column-input-text]`
    );

    const allFieldsTcheckbox: NodeListOf<HTMLElement> =
      document.querySelectorAll(
        `[data-all-inputs=dynamic-forms-one-column-input-checkbox]`
      );

    allFieldsText.forEach((clearedInput) => {
      clearedInput.querySelector("input").value = "";
    });

    allFieldsTcheckbox.forEach((clearedCheckbox) => {
      clearedCheckbox.querySelector("input").checked = false;
    });

    this.isNomeValid = false;
    this.isEmailValid = false;
    this.isCelularValid = false;
    this.isCPFValid = false;
    this.isCNPJValid = false;
    this.isCpfOrCnpjValid = false;
    this.isCaptchaValid = false;
    this.submitButton.disabled = true;
  }
}

new FormularioDinamicoImagemInteiraLead();
