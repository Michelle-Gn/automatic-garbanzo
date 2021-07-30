import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  ratingsMeta: {
    "product_id": "16058",
    "ratings": {
        "2": "1",
        "3": "1",
        "5": "11"
    },
    "recommended": {
        "false": "8",
        "true": "5"
    },
    "characteristics": {
        "Fit": {
            "id": 53846,
            "value": "4.6406250000000000"
        },
        "Length": {
            "id": 53847,
            "value": "4.8245614035087719"
        },
        "Comfort": {
            "id": 53848,
            "value": "3.1403508771929825"
        },
        "Quality": {
            "id": 53849,
            "value": "3.1578947368421053"
        }
    }
  },
  totalRatings: 13,
  starAverage: 4.615384615384615
};

const ratingsReducers = {
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

export default ratingsReducers;
