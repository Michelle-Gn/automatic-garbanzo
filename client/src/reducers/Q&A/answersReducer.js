import Redux from 'redux'
import * as actionTypes from '../../actions/actionTypes'

const initialState = [];
// what is returned needs to be the same shape as the initialState

const getAnswersReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ANSWERS:
      return action.payload;
    default:
  return state;
  }
}

export default getAnswersReducer