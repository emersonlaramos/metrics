import "./Carousel-PAN.scss";
import Swiper, { Navigation, Pagination, SwiperOptions, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

type SwiperNewConfig = {
  delay?: string
  autoplay?: object | string
}

export default class CarouselPan {

  swiperConfig: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    grabCursor: true,
    keyboard: true,
    centeredSlides: false,
    pagination: {
      el: ".carousel-pan-swiper__pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".carousel-pan-swiper__button-next",
      prevEl: ".carousel-pan-swiper__button-prev",
      enabled: true
    },
    modules: [Navigation, Pagination, Autoplay],
  };

  NS = "data-swiper-pan"
  regexNS = new RegExp(this.NS, 'm')

  el = document.querySelector('[data-cmp-is="Carousel-PAN"]')
  selectors = [].filter.call(this.el.attributes, at => this.regexNS.test(at.name));

  constructor() {
    this.getConfig();
  }

  captilizeFromSecondWord = (param: string) => {
    const words = param.split(' ')
    const captilized = []

    words.slice(1).forEach((word: string) => {
      const firstLetterCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

      captilized.push(firstLetterCapitalized);
      
    })

    return words[0]+captilized.join("");

  }

  correctValues = (value: string) => {
    const myBool = (value === "true")
    const myNum = Number(value)
    let correctedValues

    if(myBool || !myBool) correctedValues = myBool
    if(!Number.isNaN(myNum) && !myBool) correctedValues = myNum

    return correctedValues
  }

  initSwiper(config: SwiperOptions) {
    this.swiperConfig = config
    new Swiper(".carousel-pan-swiper", this.swiperConfig);
  }

  getConfig() {
    let newConfig: SwiperNewConfig = {}

    this.selectors.forEach(selector => {

      const selectorName = selector.name
      const selectorValue = selector.value

      const swiperConfig = selectorName.replace(this.NS+"-", "").replace(/-/g, " ")

      newConfig[this.captilizeFromSecondWord(swiperConfig)] = this.correctValues(selectorValue)

    });
      
    if(newConfig.autoplay) {
      newConfig = {...newConfig, autoplay: {
        delay: (parseInt(newConfig?.delay)*1000)
      }}
      delete newConfig["delay"]
    }
    else if(!newConfig.autoplay) {
      delete newConfig.autoplay
    }
    
    const swiperConfigUpdated = Object.assign({}, this.swiperConfig, newConfig)

    this.initSwiper(swiperConfigUpdated)
  }

}
