import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  reviews: [],
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
};

export default reviewListReducers;