import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const reviewListReducers = {
  reviewListReducer: (state = [], action) => {
    switch(action.type) {
    case actionTypes.CHANGE_REVIEWS:
      return action.reviews;
    default:
      return state;
    }
  },

  addReviewsReducer: (state = [], action) => {
    switch(action.type) {
    case actionTypes.ADD_VISIBLE_REVIEWS:
      return visibleReviews;
    default:
      return state;
    }
  }
};

export default reviewListReducers;