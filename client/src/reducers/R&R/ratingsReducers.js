import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  ratingsMeta = {},
  totalRatings = 0,
  starAverage = 0
};

const reviewsRatingsReducers = {
  ratingsReducer: (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.GET_RATINGS:
      return action.ratingsMeta;
    default:
      return state;
    }
  },

  totalRatingsReducer: (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE:
      return action.totalRatings;
    default:
      return state;
    }
  },

  starAverageReducer: (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE:
      return action.starAverage;
    default:
      return state;
    }
  }
};

export default reviewsRatingsReducers;
