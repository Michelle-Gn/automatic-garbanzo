import { combineReducers } from 'redux';
import updateStyleReducer from './styleReducer';
import addToCartReducer from './cartReducer'

export default combineReducers({
  // add reducers here
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer,
})
