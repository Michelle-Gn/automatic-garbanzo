import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes';

const initialState = false;

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_MODAL:
      return action.payload;
    default:
  return state;
  }
}

export default modalReducer;
