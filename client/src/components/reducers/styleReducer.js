import { productStyles } from '../../../../sampleData'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  styleList: productStyles.results,
  selectedStyle: productStyles.results.filter(style => style['default?'] === true)
}

const updateStyleReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_SELECTED_STYLE:
      return {
        ...state,
        selectedStyle: state.styleList.results.filter(style => style['style_Id'] === action.payload.id)
      };
    default:
      return state;
    }
  }

  export default updateStyleReducer;
