import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// https://codeburst.io/redux-devtools-for-dummies-74566c597d7
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers'; // ../reducers/index.js

const initialState = {
  // current product
  // ...
  // reviews
  // reviews metadata
  // total ratings
  // star average
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;