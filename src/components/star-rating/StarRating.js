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
    this._element.addEventListener('click', this._handleStarClick);
    this._element.addEventListener('focusin', this._handleStarFocusIn);
    this._element.addEventListener('focusOut', this._handleStarFocusOut);
  }

  _handleStarClick(event) {
    const { target } = event;
    if (!target.classList.contains('js-star-rating__star')) return;

    const activeClass = 'star-rating__star_activated';
    if (target.classList.contains(activeClass)) return;

    this._element.querySelector(`.${activeClass}`).classList.remove(activeClass);
    target.classList.add(activeClass);
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
