class StarRating {
  constructor(element) {
    this._element = element;
    this._handleStarClick = this._handleStarClick.bind(this);
    this._handleStarFocusIn = this._handleStarFocusIn.bind(this);
    this._handleStarFocusOut = this._handleStarFocusOut.bind(this);
    this._handleDocumentKeyUp = this._handleDocumentKeyUp.bind(this);
    this._init();
  }

  _init() {
    this._defineStars();
    this._addListenres();
  }

  _defineStars() {
    this.stars = this._element.querySelectorAll('.star-rating__star');
  }

  _addListenres() {
    this._element.addEventListener('click', this._handleStarClick);
    this._element.addEventListener('focusin', this._handleStarFocusIn);
    this._element.addEventListener('focusOut', this._handleStarFocusOut);
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

  _handleStarFocusIn() {
    document.addEventListener('keyup', this._handleDocumentKeyUp);
  }

  _handleStarFocusOut() {
    document.removeEventListener('keyup', this._handleDocumentKeyUp);
  }

  _handleDocumentKeyUp(event) {
    event.code === 'Enter' && event.target.dispatchEvent(new Event('click', { bubbles: true }));
  }
}

export default StarRating;
