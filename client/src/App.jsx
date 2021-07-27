// Module Library imports
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Our Custom Modules
import rootReducer from '../src/components/reducers'
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';

// IMPORTING DUMMY DATA FROM API CALLS.
import * as dummy from '../../sampleData'

// Pieces of state that still need to be used in reducers.
const initialState = {
  product: dummy.productId, // current product from API
  reviews: dummy.productReviews, // list of reviews for current Product
  reviewMeta: dummy.productReviewsMeta,
}

// ACTIONS to interact with store
  // For Product Overview and sub components
    // UPDATE_SELECTED_STYLE ---> sets selectedStyle to matching style ID from styleList
    // ADD_TO_CART

  // For Q n A

  // For Reviews

// Actions not needed in spec, but good to have
  // UPDATE_STYLE_LIST ---> populates new styleList depending on current Product

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

var App = () => {
  return (
    // Provider wraps Sub components to provide them access to the store
    <Provider store={store} >
      <ProductOverview />
      {/* Additional Top Level Components */}
    </Provider>
  )
}

export default App;