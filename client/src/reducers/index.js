import { combineReducers } from 'redux';
import updateStyleReducer from './StyleSelector/styleReducer'
import addToCartReducer from './AddtoCart/cartReducer'
import reviewsRatingsReducers from './R&R/reviewsRatingsReducers'
import getNewProductReducer from './ProductOverview/getNewProductReducer'
import getQuestionsReducer from './Q&A/questionsReducer'

export default combineReducers({

  getNewProductReducer: getNewProductReducer,
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  questions: getQuestionsReducer
})
