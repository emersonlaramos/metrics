export class NpsAtendimentoUrlParams {
   cpfParam: string;
   protocolParam: string;
  private $wrapperMainStream: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-principal]`
  );
  private $wrapperErroFlow: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-erro]`
  );
  private $flowAlreadyAnswered: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-erro-respondida]`
  );
  private $expiredLinkFlow: HTMLElement = document.querySelector(
    `[data-js=nps-atendimento-fluxo-erro-link-expirado]`
  );

  constructor() {
    const { cpfParam, protocolParam } = this.getUrlParams();

    if (!cpfParam || !protocolParam) {
      this.$wrapperMainStream.classList.remove("d-flex");
      this.$wrapperMainStream.classList.add("d-none");
      this.$wrapperErroFlow.classList.remove("d-none");
      this.$wrapperErroFlow.classList.add("d-flex");
      this.$expiredLinkFlow.classList.remove("d-none");
      return;
    }

    this.cpfParam = cpfParam;
    this.protocolParam = protocolParam;

    if (this.protocolParam === localStorage.getItem("p")) {
      this.$wrapperMainStream.classList.remove("d-flex");
      this.$wrapperMainStream.classList.add("d-none");
      this.$wrapperErroFlow.classList.remove("d-none");
      this.$wrapperErroFlow.classList.add("d-flex");
      this.$flowAlreadyAnswered.classList.remove("d-none");
    } else {
      this.protocolParam = localStorage.getItem("p");
      this.protocolParam = protocolParam;
      this.$wrapperErroFlow.classList.add("d-none");
      this.$wrapperMainStream.classList.remove("d-none");
      this.$wrapperMainStream.classList.add("d-flex");
    }
  }

  private getUrlParams(): { cpfParam: string; protocolParam: string } {
    const searchParams = new URLSearchParams(window.location.search);
    const cpfParam = searchParams.get("c");
    const protocolParam = searchParams.get("p");
    return { cpfParam, protocolParam };
  }

  public storeParamsLocally() {
    if (this.cpfParam && this.protocolParam) {
      localStorage.setItem("c", this.cpfParam);
      localStorage.setItem("p", this.protocolParam);
    }
  }
}
