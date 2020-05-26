import CardSlider from '../card-slider/CardSlider';
import CardInfo from '../card-info/CardInfo';

class Card {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const cardSliderElement = this.element.querySelector('.js-card__images-gallery');
    const cardInfoElement = this.element.querySelector('.js-card__info');

    this.cardSlider = new CardSlider(cardSliderElement.firstElementChild);
    this.cardInfo = new CardInfo(cardInfoElement.firstElementChild);
  }
}

export default Card;
