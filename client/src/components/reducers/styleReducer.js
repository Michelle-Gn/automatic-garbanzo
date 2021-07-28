import { productStyles } from '../../../../sampleData'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  // convert from static to live
  styleList: productStyles.results,
  selectedStyle: productStyles.results.find(style => style['default?'] === true)
}

const updateStyleReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_SELECTED_STYLE:
      return {
        ...state,
        selectedStyle: state.styleList.find(style => style.style_id === action.payload.style_id)
      };
    case actionTypes.UPDATE_STYLE_LIST:
      return {
        ...state,
        styleList: action.payload
      }
    default:
      return state;
    }
  }

  export default updateStyleReducer;
