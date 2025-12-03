import "./Card-Estatico-Parceiros-Shopping-DS.scss";
import { Swiper, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export default class CardEstaticoParceirosShoppingDS {
  maxCashback: string;

  cardsContainer = <HTMLDivElement>(
    document.querySelector(".card-estatico-parceiros-shopping__cards-slider")
  );
  cards = "";
  searchInput = <HTMLInputElement>(
    document.getElementById("input-card-parceiros-shopping-search")
  );
  searchButton = <HTMLButtonElement>(
    document.getElementById("button-card-parceiros-shopping-search")
  );
  seeMoreButton = <HTMLButtonElement>(
    document.querySelector(`[data-js=button-card-parceiros-shopping-ver-mais]`)
  );
  textsContentHtml = <HTMLElement>(
    document.querySelector(".card-estatico-parceiros-shopping__text-content")
  );
  actionsHtml = <HTMLElement>(
    document.querySelector(".card-estatico-parceiros-shopping__actions")
  );
  endPoint = <HTMLInputElement>(
    document.querySelector(`[data-js=endpoint-path]`)
  );

  itemsPerPage = 8;
  page = 0;
  nameSearch = this.searchInput?.value || "";

  totalPages = 0;
  totalItensRest = 0;

  constructor() {
    if (window.innerWidth < 1024) {
      this.initSliderMobile();
    }

    this.searchActions();
    this.getMaxCashback();
    this.getParceiros(this.page, this.itemsPerPage, this.nameSearch);
  }

  initSliderMobile() {
    const carrosselCardsSwiperMobile: any = new Swiper(
      ".card-estatico-parceiros-shopping__cards-swiper",
      {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: false,
        centeredSlides: true,
        modules: [Pagination],
        pagination: {
          el: ".card-estatico-parceiros-shopping__cards-pagination",
          type: "bullets",
          dynamicBullets: true,
          dynamicMainBullets: 4,
        },
      }
    );

    carrosselCardsSwiperMobile.on("reachEnd", () => {
      if (this.page < this.totalPages - 1) {
        this.page++;

        if (this.itemsPerPage < this.totalItensRest) {
          this.itemsPerPage = this.totalItensRest;
        }

        this.getParceiros(this.page, this.itemsPerPage, this.nameSearch);
      }
    });

    this.searchButton?.addEventListener("click", (e) => {
      e.preventDefault();
      carrosselCardsSwiperMobile.slideTo(0);
    });
  }

  cleanFields() {
    this.cardsContainer.innerHTML = "";
    this.cards = "";
    this.totalItensRest = 0;
    this.totalPages = 0;
    this.page = 0;
    this.itemsPerPage = 8;
  }

  searchActions() {
    this.seeMoreButton?.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.seeMoreButton.classList.contains("lastPage")) {
        this.seeMoreButton.classList.remove("lastPage");
        this.seeMoreButton.querySelector(".mahoe-button__label").textContent =
          "Ver mais";
        this.cleanFields();
        this.getParceiros(this.page, this.itemsPerPage, this.nameSearch);
      } else {
        if (this.page < this.totalPages - 1) {
          this.page++;

          if (this.itemsPerPage < this.totalItensRest) {
            this.itemsPerPage = this.totalItensRest;
          }

          if (this.page == this.totalPages - 2) {
            this.seeMoreButton.querySelector(
              ".mahoe-button__label"
            ).textContent = "Ver menos";
            this.seeMoreButton.classList.add("lastPage");
          }

          this.getParceiros(this.page, this.itemsPerPage, this.nameSearch);
        }
      }
    });

    this.searchButton?.addEventListener("click", (e) => {
      e.preventDefault();
      this.cleanFields();
      if (!this.searchButton.classList.contains("buscado")) {
        this.getParceiros(this.page, this.itemsPerPage, this.searchInput.value);
        this.searchButton.querySelector(".mahoe-button__label").textContent =
          "Limpar pesquisa";
        this.searchButton.classList.add("buscado");
      } else {
        this.cleanFields();
        this.getParceiros(this.page, this.itemsPerPage, "");
        this.searchInput.value = "";
        this.searchButton.classList.remove("buscado");
        this.searchButton.querySelector(".mahoe-button__label").textContent =
          "Buscar";
        this.searchButton.disabled = true;
      }
    });

    this.searchInput?.addEventListener("keyup", () => {
      if (this.searchInput.value.length >= 3) {
        this.searchButton.disabled = false;
        return;
      }
      this.searchButton.disabled = true;
    });
  }

  async getMaxCashback() {
    const apiMaxCashback = await fetch(
      `${this.endPoint.value}lojas-parceiras?
      linkDefined=true&status=APPROVED&page=0&size=1&sort=CASHBACK_RATE&order=DESC`
    );

    if (!apiMaxCashback.ok || apiMaxCashback.status === 500) {
      this.showErrorMessage(
        "Ops, não conseguimos carregar nossas lojas, acesse o site em instantes"
      );
      //! Remover textos e inputs somente quando a API não retornar!
      this.textsContentHtml.remove();
      this.actionsHtml.remove();
      throw new Error(
        `HTTP ERROR ** API LOJAS-PARCEIRAS - MAX CASHBACK ONLY **: ${apiMaxCashback.status}`
      );
    }

    const dataApiMaxCashback = await apiMaxCashback.json();

    this.maxCashback =
      parseInt(dataApiMaxCashback.lojas[0].cashback).toString() + "%";

    document.querySelector(
      ".card-estatico-parceiros-shopping__cashback-value"
    ).textContent = this.maxCashback;
  }

  async getParceiros(page: number, itemsPerPage: number, nameSearch: string) {
    const apiParceiros = await fetch(
      `${
        this.endPoint.value
      }lojas-parceiras?linkDefined=true&status=APPROVED&page=${page}&size=${itemsPerPage}&sort=ORDER_INDEX&order=ASC${
        nameSearch.length > 0 ? "&name=" + nameSearch : ""
      }`
    );

    if (!apiParceiros.ok || apiParceiros.status === 500) {
      this.showErrorMessage(
        "Ops, não conseguimos carregar nossas lojas, acesse o site em instantes"
      );
      //! Remover textos e inputs somente quando a API não retornar!
      this.textsContentHtml.remove();
      this.actionsHtml.remove();
      throw new Error(
        `HTTP ERROR ** API LOJAS-PARCEIRAS - TODOS PARCEIROS **: ${apiParceiros.status}`
      );
    }

    const dataParceiros = await apiParceiros.json();

    if (!dataParceiros.lojas && nameSearch.length > 0) {
      this.showErrorMessage(
        "Ops, a loja que está procurando não é uma parceira do Shopping"
      );
    }

    dataParceiros.lojas.forEach((loja) => {
      this.cards += `
                      <a href="https://bancopan.go.link/?
                      adj_t=f17iqfk&adj_label=site-organico&adj_deeplink=br.com.bancopan.cartoes%
                      3A%2F%2F%3Fmodule%3DLojaPan%26action%3DHomeMosaico" 
                      title="Link para cashback parceiro" 
                      class="swiper-slide card-estatico-parceiros-shopping__card pt-4" data-track="Shopping/${
                        loja.nomeLoja
                      }/${loja.cashback.replace(".0", "")}" target="_blank">
                            <img class="card-estatico-parceiros-shopping__card-image 
                            image-default d-block mx-auto mb-3" src='${
                              loja.logoUrl
                            }' alt="Imagem de parceiro Banco PAN" loading="lazy" width="112px" height="112px">
                            <div class="card-estatico-parceiros-shopping__card-flag 
                            d-flex align-items-center justify-content-center py-3">
                                <p class="m-0">${loja.cashback.replace(
                                  ".0",
                                  ""
                                )}% de cashback</p>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.60938 10.5H20.1808" stroke="white" stroke-width="1.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.1807 15.5L20.1807 10.5L15.1807 5.5" stroke="white" stroke-width="1.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </a>
                      `;

      this.cardsContainer.innerHTML = this.cards;
    });

    this.totalPages = Math.ceil(
      dataParceiros.totalItens / dataParceiros.itensPagina
    );
    this.totalItensRest = dataParceiros.totalItens % dataParceiros.itensPagina;

    this.seeMoreButton.style.display = "block";

    if (dataParceiros.totalItens <= this.itemsPerPage) {
      this.seeMoreButton.style.display = "none";
    }
  }

  showErrorMessage(text) {
    const htmlError = `
            <div class="row d-flex align-items-center justify-content-center 
            card-estatico-parceiros-shopping__error-api">
                <div class="col-9 col-lg-3">
                    <img class="card-estatico-parceiros-shopping__error-img mb-3" 
                    src="/assets/img/error.svg" alt="ícone de erro">
                    <p class="card-estatico-parceiros-shopping__text-error typography-large">${text}</p>
                </div>
            </div>
        `;

    this.seeMoreButton.style.display = "none";
    this.cardsContainer.innerHTML = htmlError;
  }
}
