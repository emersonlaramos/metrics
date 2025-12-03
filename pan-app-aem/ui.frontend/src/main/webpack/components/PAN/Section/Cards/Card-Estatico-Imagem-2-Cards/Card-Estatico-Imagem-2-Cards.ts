import "./Card-Estatico-Imagem-2-Cards.scss";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class Imagem2Cards {
    constructor() {
		if (window.matchMedia("only screen and (max-width: 992px)").matches) {
			// chama o swiper
			new Swiper('.swiper-imagem-2-cards', {
				slidesPerView: 2,
				spaceBetween: 24,
				loop: false,
				grabCursor: true,
				preventClicks: true,
				keyboard: true,
				centeredSlides: false,
				breakpoints: {
					0: {
					  slidesPerView: 'auto',
					},
					768: {
					  slidesPerView: 2,
					},
				},
			});
		} else {
			// chama a lógica de visibilidade das imagens por hover do card
			const cards = document.querySelectorAll(
				`[data-js=cards]`
			) as NodeListOf<Element>;
			const images = document.querySelectorAll(
				`[data-js=images]`
			) as NodeListOf<Element>;
			
			cards.forEach((card, indexCard) => {
				card.addEventListener("mouseover", () => Imagem2Cards.replaceClass(images, indexCard));
			});
			
			module.exports = Imagem2Cards.replaceClass;
		}
    }
	static replaceClass = (elementsArray, indexParent) => {
		elementsArray[indexParent].classList.replace("d-none", "d-inherit");
		elementsArray.forEach((element, i) => {
			if (indexParent !== i) {
				element.classList.replace("d-inherit", "d-none");
			}
		});
	};
}
