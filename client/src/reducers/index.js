import { combineReducers } from 'redux';
import updateStyleReducer from './StyleSelector/styleReducer'
import addToCartReducer from './AddtoCart/cartReducer'
import getNewProductReducer from './ProductOverview/getNewProductReducer'
import getQuestionsReducer from './Q&A/questionsReducer'
import getAnswersReducer from './Q&A/answersReducer'
import modalReducer from './Q&A/modalReducer'
import questionModalReducer from './Q&A/questionModalReducer.js'
import ratingsReducers from './R&R/ratingsReducers.js';
import reviewListReducers from './R&R/reviewListReducers.js';

export default combineReducers({

  // Product Overview Reducers
  getNewProductReducer: getNewProductReducer,
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,

  // Ratings and Review Reducers
  reviews: reviewListReducers.reviewListReducer,
  visibleReviews: reviewListReducers.addReviewsReducer,
  ratingsMeta: ratingsReducers.ratingsReducer,
  totalRatings: ratingsReducers.totalRatingsReducer,
  starAverage: ratingsReducers.starAverageReducer,

  // Q&A Reducers
  questions: getQuestionsReducer,
  answers: getAnswersReducer,
  answerFormStatus: modalReducer,
  questionFormStatus: questionModalReducer
})
