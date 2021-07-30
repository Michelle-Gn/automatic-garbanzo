import Redux from 'redux'
import { productQuestions } from '../../../../sampleData'
import * as actionTypes from '../../actions/actionTypes'

const initialState = [];
// what is returned needs to be the same shape as the initialState

const getQuestionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_QUESTIONS:
      return [action.payload];
    default:
      return state;
  }
}

export default getQuestionsReducer;