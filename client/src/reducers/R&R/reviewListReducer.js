import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

export const reviewListReducer = (state = [], action) => {
  switch(action.type) {
  case actionTypes.CHANGE_REVIEWS:
    return action.reviews;
  default:
    return state;
  }
};