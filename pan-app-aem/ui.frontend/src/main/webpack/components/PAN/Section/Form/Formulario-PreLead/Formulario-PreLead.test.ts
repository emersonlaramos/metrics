import { FormPreLead } from "./Formulario-PreLead";
import { validateEmail } from "@helpers/validators/email/email";

const fixture = `
<form class="pre-lead-form" data-js="pre-lead-form" data-gtm-form-interact-id="0">
  <input type="hidden" data-js="form-lead__endpoint" value="API - Endpoint">
  <input type="hidden" data-js="form-lead__version" value="v2">
  <input type="hidden" data-js="form-lead__lead-origin" value="Origem do lead">
  <div class="col-lg-10">
      <h2 class="typography-title-1">
          Título com 2 linhas aqui!</h2>
  </div>
  <div class="form-row col-lg-10">
    <div class="form-group --required-input">
        <mahoe-input data-js="pre-lead-email-input" label="E-mail" placeholder="nome@email.com" type="text" variant="boxed" class="hydrated" support-message=""><label class="mahoe-input"><span class="mahoe-input__label typography-small">E-mail</span><span class="mahoe-input__input"><input autocomplete="off" type="text" inputmode="text" placeholder="nome@email.com" data-gtm-form-interact-field-id="0"></span></label></mahoe-input>
    </div>
  </div>
  <div class="col-lg-10 g-recaptcha-wrapper d-flex justify-content-center">
      <div class="g-recaptcha" data-expired-callback="recaptchaCallbackFormPreLeadError" data-error-callback="recaptchaCallbackFormPreLeadError" data-callback="recaptchaCallbackFormPreLead" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-widget-id="0"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-ezxooevphkh2" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI&amp;co=aHR0cDovL2xvY2FsaG9zdDo0NTAy&amp;hl=pt-BR&amp;v=TqxSU0dsOd2Q9IbI7CpFnJLD&amp;size=normal&amp;cb=4f49kxul2ajw"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
  </div>
  <div class="form-row col-lg-10">
      <div class="pre-lead-form__button-wrapper">
          <mahoe-button class="pre-lead-form__button hydrated" data-track="#" type="submit" disabled="" data-js="pre-lead-submit-button" size="md" variant="primary" data-track-event-name="Click:Body:"><!----><button type="submit" class="mahoe-button mahoe-button__primary" disabled="">Enviando...</button></mahoe-button>
      </div>
  </div>
  <div class="form-row col-lg-10">
      <span class="error-message typography-small mt-2 active" data-js="pre-lead-form-error" aria-live="polite">
          Não foi possível enviar seus dados. <br> Tente novamente.
      </span>
  </div>
  <div class="form-row col-lg-10">
      <div class="d-flex justify-content-center pre-lead-form__link">
          <mahoe-link class="pre-lead-form__link-text hydrated" href="#" data-track="#" target="_blank" size="md"><!----><a class="mahoe-link typography-body-2" href="#" target="_blank">
              Política de privacidade
          </a></mahoe-link>
      </div>
  </div>
</form>
<div class="form-sucesso-qr-code-img" data-js="pre-lead-form-sucesso-qr-code">
    <h2 class="typography-title-1">Título com 2 linhas aqui!</h2>
    <p class="typography-large">Texto de apoio feedback aqui!</p>
    <div class="qr-code-wrap d-none d-lg-flex">
        <p class="typography-body-1 mb-0">Baixe o nosso app na Google Play e App Store</p>
        <img class="qr-code-img" alt="Imagem QR Code" width="100" height="100" src="/content/dam/webapp--adobe-experience-ds/qr_code%201.svg">
    </div>
    <div class="d-lg-none">
        <mahoe-button href="#id_section" size="md" variant="primary" icon-position="left" data-track="#,_self" target="#,_self" class="hydrated"><!----><button type="button" class="mahoe-button mahoe-button__primary"><span class="mahoe-button__container"><span class="mahoe-button__label">
        </span></span><div class="mahoe-ripple"></div></button></mahoe-button>
    </div>
</div>
`;

describe("Inner HTML Mock for tests", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;

    jest.clearAllMocks();

  });

  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");

  test("validate recaptcha callback", () => {
    const formPreLead = new FormPreLead();
    const response = "";
    formPreLead.recaptchaResponse = response;
    formPreLead.isCaptchaValid = true;

    expect(formPreLead.isCaptchaValid).toBe(true);
  });

  test("calls initFormEvent in a constructor() after 1 second", () => {
    new FormPreLead();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    jest.runAllTimers();
  });

  test("invalid email input value", () => {
    const formPreLead = new FormPreLead();
    formPreLead.isEmailValid = validateEmail("teste.com");
    formPreLead.changeEmailState();
    const emailInput = document
      .querySelector(`[data-js=pre-lead-email-input]`)
      .getAttribute("support-message");
    expect(emailInput).toBe("Favor inserir um e-mail válido.");
  });

  test("valid email input value", () => {
    const formPreLead = new FormPreLead();
    formPreLead.isEmailValid = validateEmail("teste@teste.com");
    formPreLead.changeEmailState();
    const emailInput = document
      .querySelector(`[data-js=pre-lead-email-input]`)
      .getAttribute("support-message");
    expect(emailInput).toBe("");
  });

  test("validate all fields true", () => {
    const formPreLead = new FormPreLead();
    formPreLead.isEmailValid = true;
    formPreLead.isCaptchaValid = true;
    formPreLead.validateAllFields();
    const submitButtonDisabled = formPreLead.$submitButton.disabled;
    const formErrorActive = formPreLead.$formError.classList.contains("active");
    expect(submitButtonDisabled).toBe(false);
    expect(formErrorActive).toBe(false);
  });

  test("validate all fields false", () => {
    const formPreLead = new FormPreLead();
    formPreLead.isEmailValid = true;
    formPreLead.isCaptchaValid = false;
    formPreLead.validateAllFields();
    const submitButtonDisabled =
      formPreLead.$submitButton.querySelector("button").disabled;
    expect(submitButtonDisabled).toBe(true);
  });

  test("handle success", () => {
    const formPreLead = new FormPreLead();
    formPreLead.handleSuccess();
    const form = formPreLead.$formPreLead.classList.contains("disabled");
    const qrCode =
      formPreLead.$formPreLeadSucessQRCode.classList.contains("active");
    expect(form).toBe(true);
    expect(qrCode).toBe(true);
  });

  test("handle error", () => {
    const formPreLead = new FormPreLead();
    formPreLead.handleError();
    const formErrorActive = formPreLead.$formError.classList.contains("active");
    expect(formErrorActive).toBe(true);
  });

  test("clear all fields", () => {
    const formPreLead = new FormPreLead();
    formPreLead.clearFields();
    const emailWrapper = document.querySelector(
      `[data-js=pre-lead-email-input] input`
    ) as HTMLInputElement;
    const submitButton = document.querySelector("button");
    expect(formPreLead.isEmailValid).toBe(false);
    expect(formPreLead.isCaptchaValid).toBe(false);
    expect(emailWrapper.value).toBe("");
    expect(submitButton.disabled).toBe(true);
  });
});
