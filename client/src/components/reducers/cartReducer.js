import * as actionTypes from '../actions/actionTypes'

const initialState = {
  cart: []
}

const addToCartReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      return [
        ...state,
        action.payload
        ];
    default:
      return state;
  }
}

export default addToCartReducer;