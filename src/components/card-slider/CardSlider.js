import Swiper from 'swiper';

class CardSlider {
  constructor(element) {
    this._init(element);
  }

  _init(element) {
    new Swiper(element, {
      loop: true,
      lazy: true,
      pagination: {
        el: '.card-slider__pagination',
      },
      navigation: {
        nextEl: '.card-slider__button-next',
        prevEl: '.card-slider__button-prev',
      },
    });
  }
}

export default CardSlider;
