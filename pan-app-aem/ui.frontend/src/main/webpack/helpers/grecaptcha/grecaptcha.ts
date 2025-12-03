type undefinedCaptcha = {
  ready: (cb: () => void) => void;
};

interface CustomWindow {
  grecaptcha: ReCaptchaV2.ReCaptcha | undefinedCaptcha;
  CaptchaCallback: () => void;
}

function isReCaptcha(
  captcha: ReCaptchaV2.ReCaptcha | undefinedCaptcha
): captcha is ReCaptchaV2.ReCaptcha {
  return (captcha as ReCaptchaV2.ReCaptcha)?.render !== undefined;
}

declare let window: CustomWindow;

/**
 * This helpers represent a instance of recaptcha, with allows the user to work with a bot checker
 * For more information check: {@link https://developers.google.com/recaptcha/docs/display?hl=pt-br|reCAPTCHA v2}
 * @constructor
 * @param {string} idSelector - The unique name that will be used to look for captcha after it is loaded in page.
 * @param {number} captchaWidget - An unique ID that is automatic set on all captchas of the page.
 */
export class CaptchaController {
  private recaptchaURL = "";
  private idSelector: string;
  private isLoaded: boolean;
  private siteKey: string;
  private gVersion: string;
  captchaWidget: number;

  constructor(idSelector, gVersion = "v2", siteKey = "") {
    this.idSelector = idSelector;
    this.siteKey = siteKey;
    this.gVersion = gVersion;
    this.init();
  }

  init() {
    window.CaptchaCallback = this.CaptchaCallback;
    this.getCaptchaVersionUrl();
  }

  getCaptchaVersionUrl() {
    const urlArr = this.gVersion == "v2" ? ["api.js",  "explicit"] : ["enterprise.js", `${this.siteKey}`];
    const jsFile = `https://www.google.com/recaptcha/${urlArr[0]}`;
    this.recaptchaURL = `${jsFile}?onload=CaptchaCallback&render=${urlArr[1]}`;
    this.loadCaptchaScript(`[src*="${jsFile}"]`);
  }

  loadCaptchaScript(selector) {
    if (document.querySelectorAll(selector).length === 0) {
      const script = document.createElement("script");
      script.setAttribute("src", this.recaptchaURL);
      script.setAttribute("id", "reCaptcha");
      document.body.appendChild(script);
    }

    this.grecaptchaLoad();
  }

  grecaptchaLoad() {
    if (typeof window.grecaptcha === "undefined") {
      window.grecaptcha = {
        ready: function (cb) {
          if (!isReCaptcha(window.grecaptcha)) {
            const c = "___grecaptcha_cfg";
            window[c] = window[c] || {};
            (window[c]["fns"] = window[c]["fns"] || []).push(cb);
          } else {
            cb();
          }
        },
      };
    }

    window.grecaptcha.ready(() => {
      this.isLoaded = true;
      if (this.gVersion == "v2") {
        this.loadWidgetID();
      }
    });
  }

  loadWidgetID() {
    const widget = document.querySelector(`[data-callback="${this.idSelector}"]`).getAttribute("data-widget-id");
    this.captchaWidget = parseInt(widget);
    this.captchaWidget = this.captchaWidget ? this.captchaWidget : 0;
  }

  //V2 - chamar quando for v2
  getWidgetID() {
    if (this.captchaWidget >= 0) {
      return this.captchaWidget;
    } else {
      throw new Error("grecaptcha widgetID is Undefined");
    }
  }

  getGrecaptcha() {
    if (isReCaptcha(window.grecaptcha)) {
      return window.grecaptcha;
    } else {
      throw new Error("grecaptcha is Undefined");
    }
  }

  //V3 - chamar quando for v3
  executeGrecaptcha(): Promise<any> {
    if (this.isLoaded) {
      try {
        if (!this.siteKey) {
          throw new Error("SITE KEY NOT SET");
        }
        const token: any = grecaptcha.enterprise.ready(
          async () => await grecaptcha.enterprise.execute(this.siteKey, {action: 'SIGNUP'})
        );
        return token;
      } catch (e) {
        throw new Error("Failed in run grecaptcha execute " + e);
      }
    } else {
      throw new Error("grecaptcha is not loaded yet");
    }
  }

  CaptchaCallback() {
    document.querySelectorAll<HTMLElement>(".g-recaptcha").forEach((el) => {
      if (isReCaptcha(window.grecaptcha)) {
        const widgetId = window.grecaptcha
          .render(el, {
            sitekey: el?.getAttribute("data-sitekey"),
          })
          .toString();
        el.setAttribute("data-widget-id", widgetId);
      }
    });
  }
}
