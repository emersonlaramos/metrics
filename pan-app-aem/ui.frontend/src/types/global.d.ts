declare global {

  interface undefinedCaptcha {
    ready: (cb: () => void) => void;
  }
  interface Window {
    grecaptcha: ReCaptchaV2.ReCaptcha | undefinedCaptcha;
    CaptchaCallback: () => void;
  }
}

export {};
