import Redux from 'redux';
import * as actionTypes from '../actions/actionTypes'

const reviewsRatingsReducers = {
  ratingsReducer: (state = {}, action) => {
    switch (action.type) {
    case actionTypes.GET_RATINGS:
      return action.ratingsMeta;
    default:
      return state;
    }
  },
  totalRatingsReducer: () => {},
  starAverageReducer: () => {}
};

export default reviewsRatingsReducers;
