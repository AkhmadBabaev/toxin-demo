import CardSlider from '../card-slider/CardSlider';

class Card {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const cardSliderElement = this.element.querySelector('.js-card__images-gallery');
    this.cardSlider = new CardSlider(cardSliderElement.firstElementChild);
  }
}

export default Card;
