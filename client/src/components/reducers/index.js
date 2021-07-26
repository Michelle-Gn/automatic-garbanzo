import { combineReducers } from 'redux';
import updateStyleReducer from './styleReducer';
import addToCartReducer from './cartReducer'

export default combineReducers({
  // Import and add your reducers here to be combined during store creation.
  addToCartReducer: addToCartReducer,
  updateStyleReducer: updateStyleReducer
})