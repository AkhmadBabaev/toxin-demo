class CardInfo {
  constructor(element) {
    this.element = element;
    this.handleStarClick = this.handleStarClick.bind(this);
    this.addHandlers = this.addHandlers.bind(this);

    this.defineStarElements();
    this.addHandlers();
  }

  foundStarElements() {
    const starsElement = this.element.querySelector('.js-card-info__stars');
    return Array.from(starsElement.querySelectorAll('.js-card-info__star'));
  }

  defineStarElements() {
    this.starsList = this.foundStarElements();
  }

  handleStarClick(event) {
    const { target } = event;
    if (!target.classList.contains('js-card-info__star')) return;

    const targetIndex = target.dataset.index;

    this.starsList.forEach((star, index) => {
      const isAlreadyActivated = !star.classList.contains('card-info__star_activated');

      (index <= targetIndex && !isAlreadyActivated)
        ? star.classList.add('card-info__star_activated')
        : star.classList.remove('card-info__star_activated');
    });

    for (let i = 0; i <= targetIndex; i += 1) {
      this.starsList[i].classList.add('card-info__star_activated');
    }
  }

  addHandlers() {
    this.element.addEventListener('click', this.handleStarClick);
  }
}

export default CardInfo;
