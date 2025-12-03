export class NpsAquisicaoSlider {
  public $npsSlides: HTMLElement[];
  public $currentIndex: number;

  constructor() {
    this.$npsSlides = Array.from(
      document.querySelectorAll(`[data-js=nps-aquisicao-slides]`)
    );
    this.$currentIndex = 0;
    setTimeout(() => {
      this.setupEventListeners();
    }, 1000);
  }

  private setupEventListeners() {
    this.$npsSlides.forEach((slide, index) => {
      const nextButton = slide.querySelector(`[data-next=nps-aquisicao-next]`);
      const prevButton = slide.querySelector(`[data-prev=nps-aquisicao-prev]`);

      if (nextButton) {
        nextButton.addEventListener("click", () => this.showSlide(index + 1));
      }

      if (prevButton) {
        prevButton.addEventListener("click", () => this.showSlide(index - 1));
      }
    });
  }

  public showSlide(index: number) {
    const totalSlides = this.$npsSlides.length;

    if (index < 0 || index >= totalSlides) {
      return;
    }

    const currentSlide = this.$npsSlides[this.$currentIndex];
    const nextSlide = this.$npsSlides[index];

    currentSlide.style.transform = `translateX(-${100 * index}%)`;
    nextSlide.style.transform = `translateX(-${100 * index}%)`;

    this.$currentIndex = index;
  }
}
