import Redux from 'redux'
import * as actionTypes from '../../actions/actionTypes'

const initialState = [];
// what is returned needs to be the same shape as the initialState

const getQuestionIdReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_QUESTION_ID:
      return action.payload;
    default:
  return state;
  }
}

export default getQuestionIdReducer;