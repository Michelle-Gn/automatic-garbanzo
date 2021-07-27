import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// https://codeburst.io/redux-devtools-for-dummies-74566c597d7
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../components/reducers/';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;