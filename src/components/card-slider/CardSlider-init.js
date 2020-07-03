import CardSlider from './CardSlider';

window.addEventListener('load', () => {
  const cardSlidersList = document.querySelectorAll('.js-card-slider');

  cardSlidersList.forEach((_, index) => new CardSlider(cardSlidersList[index]));
});
