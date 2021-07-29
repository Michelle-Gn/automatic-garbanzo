import * as actionTypes from '../actions/actionTypes'

const initialState = {
  cart: []
}

const addToCartReducer = (state = initialState, action) => {
  switch(action.type) { // different way to write conditionals, argument is action type
    case actionTypes.ADD_TO_CART:
      return [
        ...state,
        action.payload
        ];
    case actionTypes.REMOVE_FROM_CART:
    default:
      return state;
  }
}

export default addToCartReducer;