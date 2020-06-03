import StarRating from './StarRating';

const starRatingList = document.querySelectorAll('.js-star-rating');
starRatingList.forEach((_, index) => new StarRating(starRatingList[index]));
