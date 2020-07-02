import Swiper from 'swiper';

class CardSlider {
  constructor(element) {
    this._init(element);
  }

  _init(element) {
    new Swiper(element, {
      loop: true,
      lazy: {
        elementClass: 'card-slider__slide-img',
      },
      pagination: {
        el: '.card-slider__pagination',
        bulletClass: 'card-slider__pagination-bullet',
        bulletActiveClass: 'card-slider__pagination-bullet_activated',
      },
      navigation: {
        prevEl: '.card-slider__button_side_prev',
        nextEl: '.card-slider__button_side_next',
      },
    });
  }
}

export default CardSlider;
