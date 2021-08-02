import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  reviews: [],
  visibleReviews: []
};

const reviewListReducers = {
  reviewListReducer: (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.CHANGE_REVIEWS:
      return action.reviews;
    default:
      return state;
    }
  },

  addReviewsReducer: (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.ADD_VISIBLE_REVIEWS:
      return action.visibleReviews;
    default:
      return state;
    }
  }
};

export default reviewListReducers;