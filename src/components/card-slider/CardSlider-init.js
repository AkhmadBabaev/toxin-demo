import CardSlider from './CardSlider';

const cardSlidersList = document.querySelectorAll('.js-card-slider');

cardSlidersList.forEach((_, index) => new CardSlider(cardSlidersList[index]));
