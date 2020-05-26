import Card from './Card';

window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.js-card');
  Object.keys(cards).forEach((_, index) => new Card(cards[index]));
});
