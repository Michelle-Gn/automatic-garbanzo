import { combineReducers } from 'redux';
import updateStyleReducer from './styleReducer';
import addToCartReducer from './cartReducer'
import reviewsRatingsReducers from './reviewsRatingsReducers'

export default combineReducers({
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  // Ratings Reviews Reducers
  reviewsRatingsReducers: reviewsRatingsReducers,
})
