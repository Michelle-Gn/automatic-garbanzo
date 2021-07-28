import { combineReducers } from 'redux';
import updateStyleReducer from './StyleSelector/styleReducer'
import addToCartReducer from './AddtoCart/cartReducer'
import reviewsRatingsReducers from './R&R/reviewsRatingsReducers'
import getNewProductReducer from './ProductOverview/getNewProductReducer'

export default combineReducers({

  getNewProductReducer: getNewProductReducer,
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  // Ratings Reviews Reducers
  reviewsRatingsReducers: reviewsRatingsReducers,
})
