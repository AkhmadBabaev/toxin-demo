import Swiper from 'swiper';

class CardSlider {
  constructor() {
    this.setSlider();
  }

  setSlider() {
    this.slider = new Swiper('.js-card-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.card-slider__button-next',
        prevEl: '.card-slider__button-prev',
      },
    });
  }
}

export default CardSlider;
