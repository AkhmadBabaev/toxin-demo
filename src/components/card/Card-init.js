import Card from './Card';

window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.js-card');
  cards.forEach((_, index) => new Card(cards[index]));
});
