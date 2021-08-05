import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes';

const initialState = false;

const questionModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_QUESTIONS:
      return action.payload;
    default:
  return state;
  }
}

export default questionModalReducer;