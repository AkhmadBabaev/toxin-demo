import CardSlider from '../card-slider/CardSlider';

class Card {
  constructor(element) {
    this._init(element);
  }

  _init(element) {
    const cardSliderElement = element.querySelector('.js-card__slider');
    new CardSlider(cardSliderElement.firstElementChild);
  }
}

export default Card;
