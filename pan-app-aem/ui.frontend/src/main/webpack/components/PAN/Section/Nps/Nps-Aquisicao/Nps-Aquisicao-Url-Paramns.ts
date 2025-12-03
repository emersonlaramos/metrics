export class NpsAquisicaoUrlParams {
  cpfParam: string;
  productParam: string;
  private $wrapperMainStream: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-principal]`
  );
  private $wrapperErroFlow: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-erro]`
  );
  private $flowAlreadyAnswered: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-erro-respondida]`
  );
  private $expiredLinkFlow: HTMLElement = document.querySelector(
    `[data-js=nps-aquisicao-fluxo-erro-link-expirado]`
  );

  constructor() {
    const { cpfParam, productParam } = this.getUrlParams();

    if (!cpfParam || !productParam) {
      this.$wrapperMainStream.classList.remove("d-flex");
      this.$wrapperMainStream.classList.add("d-none");
      this.$wrapperErroFlow.classList.remove("d-none");
      this.$wrapperErroFlow.classList.add("d-flex");
      this.$expiredLinkFlow.classList.remove("d-none");
      return;
    }

    this.cpfParam = cpfParam;
    this.productParam = productParam;

    if (this.productParam === localStorage.getItem("pr")) {
      this.$wrapperMainStream.classList.remove("d-flex");
      this.$wrapperMainStream.classList.add("d-none");
      this.$wrapperErroFlow.classList.remove("d-none");
      this.$wrapperErroFlow.classList.add("d-flex");
      this.$flowAlreadyAnswered.classList.remove("d-none");
    } else {
      this.productParam = localStorage.getItem("pr");
      this.productParam = productParam;
      this.$wrapperErroFlow.classList.add("d-none");
      this.$wrapperMainStream.classList.remove("d-none");
      this.$wrapperMainStream.classList.add("d-flex");
    }
  }

  private getUrlParams(): { cpfParam: string; productParam: string } {
    const searchParams = new URLSearchParams(window.location.search);
    const cpfParam = searchParams.get("c");
    const productParam = searchParams.get("pr");
    return { cpfParam, productParam };
  }

  public storeParamsLocally() {
    if (this.cpfParam && this.productParam) {
      localStorage.setItem("c", this.cpfParam);
      localStorage.setItem("pr", this.productParam);
    }
  }
}
