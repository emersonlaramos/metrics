import { CaptchaController } from "./grecaptcha";

const fixture = `
<div
  class="g-recaptcha"
  data-callback="recaptchaCallbackForm"
  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  data-widget-id="2"
></div>
`;

describe("Inner HTML Mock for tests", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
    jest.clearAllMocks();

    const grecaptchaMock = {
      render: function (options) {
        return 0;
      },
      ready: function (cb) {
        cb();
      },
      reset: function (id) {
        return;
      },
      getResponse: function (id) {
        return "";
      },
    };

    (window as any).grecaptcha = grecaptchaMock;
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("valid captcha is rendering", () => {
    const captchaController = new CaptchaController("recaptchaCallbackForm");

    jest.runAllTimers();

    expect(captchaController.getWidgetID()).toBe(2);
  });
});
