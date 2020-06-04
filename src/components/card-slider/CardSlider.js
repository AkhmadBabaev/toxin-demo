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
        nextEl: '.card-slider__button-next',
        prevEl: '.card-slider__button-prev',
      },
    });
  }
}

export default CardSlider;
