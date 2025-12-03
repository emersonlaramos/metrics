import { headingTagTitleFaq } from "./heading-tag-title-faq";

export class checkExistingTagTitleFaq {
  constructor() {
    if (!window["accordionRender"]) {
      new headingTagTitleFaq();
      window["accordionRender"] = true;
    }
  }
}
