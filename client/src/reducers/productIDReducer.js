import { productQuestions } from '../../../sampleData'
import * as actionTypes from '../actions/actionTypes'

const initialState = 16058

const productIdReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PRODUCT_ID:
    default:
      return state;
  }
}