import * as actionTypes from '../actionTypes'
import API_KEY from '../../../../config'
import axios from 'axios'
import { useDispatch} from 'react-redux'

// Product Overview Action Creators // Maybe combine these like Ratings and Reviews Actions?

// Sync action creator. Used in thunk below or can be dispatched directly to update your product
const updateNewProduct = (resObjData) => {
  return {
    type: actionTypes.GET_NEW_PRODUCT,
    payload: resObjData
  };
}
// Thunk get new product request that calls updateNewProduct on success.
export const getNewProduct = (selectedProductId) => {
  return  (dispatch) => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/'+ selectedProductId
    const options = {
      headers: {
        'Authorization': API_KEY
      }
    }
    axios.get(url, options).then(res => {
      dispatch(updateNewProduct(res.data))
    })
  }
}

export const UpdateSelectedStyle = (selectedId) => {
  return {
    type: actionTypes.UPDATE_SELECTED_STYLE,
    payload: {
      style_id: Number(selectedId)
    }
  }
};

// Sync action creator for updating list of styles.
const updateStyleList = (arrayOfStyles) => {
  return {
    type: actionTypes.UPDATE_STYLE_LIST,
    payload: arrayOfStyles
  }
}

// Thunk get new lsit of styles request.
export const getNewStyles = (selectedProductId) => {
  return  (dispatch) => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/'+ selectedProductId+'/styles'
    const options = {
      headers: {
        'Authorization': API_KEY
      }
    }
    axios.get(url, options).then(res => {
      dispatch(updateStyleList(res.data.results))
    })
  }
}


export const addToCart = (SKU, QTY, SIZE) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      SKU: SKU,
      QTY: QTY,
      SIZE: SIZE
    }
  }
};