class StarRating {
  constructor(element) {
    this._element = element;
    this._init();
  }

  _init() {
    this._defineStars();
    this._addListeners();
  }

  _defineStars() {
    this.stars = this._element.querySelectorAll('.star-rating__star');
  }

  _addListeners() {
    this._element.addEventListener('click', this._handleStarClick.bind(this));
  }

  _handleStarClick(event) {
    const { target } = event;
    if (!target.classList.contains('js-star-rating__star')) return;

    this.stars.forEach((star) => {
      target.dataset.index >= star.dataset.index
        ? star.classList.add('star-rating__star_activated')
        : star.classList.remove('star-rating__star_activated');
    });
  }
}

export default StarRating;
