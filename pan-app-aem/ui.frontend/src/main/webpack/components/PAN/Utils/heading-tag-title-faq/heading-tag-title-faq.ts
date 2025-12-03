export class headingTagTitleFaq {
  accordionWrapper: NodeListOf<any>;
  accordionTitle: NodeListOf<any>;
  constructor() {
    this.accordionWrapper = document.querySelectorAll(
      `[data-faq=faq-heading-tag-title]`
    );
    this.createH2TagTitle();
  }

  createH2TagTitle() {
    this.accordionWrapper.forEach((accordion) => {
      const buttonTitle: HTMLButtonElement =
        accordion.querySelector(".header__button");
      if (buttonTitle) {
        const existingH2TitleFaq = buttonTitle.querySelector("h2");
        if (existingH2TitleFaq) {
          return;
        }
        const buttonTextTitle: string = Array.from(buttonTitle.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .map((node) => node.textContent?.trim() || "")
          .join("");

        const titleH2: HTMLHeadElement = document.createElement("h2");
        titleH2.style.cssText = `font-size: 18px; font-weight: 700; margin-bottom: 0px;`;
        titleH2.textContent = buttonTextTitle;
        Array.from(buttonTitle.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .forEach((node) => buttonTitle.removeChild(node));

        buttonTitle.insertBefore(titleH2, buttonTitle.firstChild);
      }
    });
  }
}
