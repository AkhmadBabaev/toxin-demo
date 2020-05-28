import StarRating from './StarRating';

const starRatingList = document.querySelectorAll('.js-star-rating');
Object.keys(starRatingList).forEach((_, index) => new StarRating(starRatingList[index]));
