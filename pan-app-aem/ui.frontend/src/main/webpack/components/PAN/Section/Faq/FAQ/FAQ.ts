import "./FAQ.scss";
import { checkExistingTagTitleFaq } from "../../../Utils/heading-tag-title-faq/check-existing-tag-title-faq";

class FaqViewMore {
  accordion: HTMLElement;
  button: HTMLElement;
  buttonPlus: NodeListOf<any>;
  buttonDiv: HTMLElement;

  questionElements: NodeListOf<HTMLElement>;
  TotalQuestionElement: HTMLDivElement;
  DivQuestions: HTMLDivElement;

  totalHeight = 0;

  constructor() {
    this.init();
    setTimeout(() => {
      new checkExistingTagTitleFaq();
    }, 1000);
  }

  init() {
    setTimeout(() => {
      this.button = document.querySelector("[data-js=view-more]");

      if (this.button) {
        this.accordion = document.querySelector("[data-js=content-questions]");
        this.buttonDiv = document.querySelector("[data-js=buttonDivContent]");
        this.buttonPlus = document.querySelectorAll(".header__button");

        this.questionElements = document.querySelectorAll(
          "[data-js=mahoe-accordion]"
        );
        this.TotalQuestionElement = document.querySelector(
          "[data-js=content-questions]"
        );
        this.DivQuestions = document.querySelector("[data-js=div-questions]");

        this.adjustQuestionHeights();
        this.validateQuestionsLength();
        this.openAnswerWithButton();
      }
    }, 500);
  }

  validateQuestionsLength() {
    if (this.questionElements.length <= 5) {
      this.buttonDiv.classList.add("d-none");
      this.openAnswerWithoutButton();
    } else {
      this.button.addEventListener("click", this.openMoreQuestions.bind(this));
    }
  }

  adjustQuestionHeights() {
    const size = Math.min(this.questionElements.length, 5);
    for (let index = 0; index < size; index++) {
      const questionElement = this.questionElements[index]
        .lastChild as HTMLElement;

      this.totalHeight += questionElement.offsetHeight;
    }
    this.TotalQuestionElement.style.maxHeight = this.totalHeight + "px";
  }

  openAnswerWithButton() {
    this.buttonPlus.forEach((element) => {
      element.addEventListener("click", () => {
        const span = element.closest("span");
        const answer = span.nextElementSibling;

        if (!this.buttonDiv.classList.contains("d-none")) {
          if (answer.hasAttribute("hidden")) {
            setTimeout(() => {
              const answerElement = answer.offsetHeight + 56;

              this.totalHeight += answerElement;
              this.TotalQuestionElement.style.maxHeight =
                this.totalHeight + "px";
            }, 50);
          } else {
            const answerElement = answer.offsetHeight + 56;

            this.totalHeight -= answerElement;
            this.TotalQuestionElement.style.maxHeight = this.totalHeight + "px";
          }
        }
      });
    });
  }

  openAnswerWithoutButton() {
    this.buttonPlus.forEach((element) => {
      element.addEventListener("click", () => {
        const span = element.closest("span");
        const accordion = element.closest("mahoe-accordion");
        const answer = span.nextElementSibling;

        if (answer.hasAttribute("hidden")) {
          const questionElement = accordion.offsetHeight;

          this.totalHeight += questionElement;
          this.TotalQuestionElement.style.maxHeight = this.totalHeight + "px";
        } else {
          const questionElement = accordion.offsetHeight;

          this.totalHeight -= questionElement;
          this.TotalQuestionElement.style.maxHeight = this.totalHeight + "px";
        }
      });
    });
  }

  openMoreQuestions() {
    this.accordion.classList.add("accordion--open");
    this.buttonDiv.classList.add("d-none");

    this.accordion.style.maxHeight = "100%";
  }
}

new FaqViewMore();
