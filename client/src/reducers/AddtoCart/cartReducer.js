import * as actionTypes from '../../actions/actionTypes'

const initialState = [];


const addToCartReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          SKU: action.payload.SKU,
          qty: action.payload.QTY
        }
      ];
    default:
      return state;
  }
}

export default addToCartReducer;