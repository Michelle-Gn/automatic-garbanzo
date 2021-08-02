import { combineReducers } from 'redux';
import updateStyleReducer from './StyleSelector/styleReducer'
import addToCartReducer from './AddtoCart/cartReducer'
import reviewsRatingsReducers from './R&R/reviewsRatingsReducers'
import getNewProductReducer from './ProductOverview/getNewProductReducer'
import getQuestionsReducer from './Q&A/questionsReducer'
import getAnswersReducer from './Q&A/answersReducer'
import modalReducer from './Q&A/modalReducer'

export default combineReducers({

  getNewProductReducer: getNewProductReducer,
  // Product Overview Reducers
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
  // Q&A Reducers
  questions: getQuestionsReducer,
  answers: getAnswersReducer,
  answerFormStatus: modalReducer
})
