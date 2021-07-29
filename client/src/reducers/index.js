import { combineReducers } from 'redux';
import updateStyleReducer from './StyleSelector/styleReducer';
import addToCartReducer from './AddtoCart/cartReducer';
import getNewProductReducer from './ProductOverview/getNewProductReducer';

import ratingsReducers from './R&R/ratingsReducers.js';
import reviewListReducers from './R&R/reviewListReducers.js';

export default combineReducers({
  getNewProductReducer: getNewProductReducer,
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  // Ratings and Review Reducers
  reviews: reviewListReducers.reviewListReducer,
  visibleReviews: reviewListReducers.addReviewsReducer,
  ratingsMeta: ratingsReducers.ratingsReducer,
  totalRatings: ratingsReducers.totalRatingsReducer,
  starAverage: ratingsReducers.starAverageReducer,
})
