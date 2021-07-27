import { combineReducers } from 'redux';
import updateStyleReducer from './styleReducer';
import addToCartReducer from './cartReducer'
import reviewsRatingsReducers from './reviewsRatingsReducers'
import getNewProductReducer from './getNewProductReducer'

export default combineReducers({

  getNewProductReducer: getNewProductReducer,
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  // Ratings Reviews Reducers
  reviewsRatingsReducers: reviewsRatingsReducers,
})
