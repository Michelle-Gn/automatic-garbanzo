import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/';

// initial state --------------------------
// cart
// selectProduct
// lastProductGet
// styleList
// selectedStyle
//
// reviews
// visibleReviews
// ratingsMeta
// totalRatings
// starAverage
// ----------------------------------------

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;