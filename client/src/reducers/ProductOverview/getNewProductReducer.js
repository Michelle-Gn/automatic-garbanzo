import * as actionTypes from '../../actions/actionTypes'
import {productsGet, productId} from '../../../../sampleData'
import axios from 'axios'

const initialState = {
  selectedProduct: {},
  lastProductGet: productsGet
}

const getNewProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_NEW_PRODUCT:
      return {
        selectedProduct: action.payload
      };
    default:
      return state;
    }
  }

  export default getNewProductReducer;
