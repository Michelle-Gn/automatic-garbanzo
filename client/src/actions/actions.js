import * as actionTypes from './actionTypes'

// Product Overview Action Creators // Maybe combine these like Ratings and Reviews Actions?

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

export const UpdateSelectedStyle = (selectedId) => {
  return {
    type: actionTypes.UPDATE_SELECTED_STYLE,
    payload: {
      style_id: Number(selectedId)
    }
  }
};