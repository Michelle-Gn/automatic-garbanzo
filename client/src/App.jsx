// Module Library imports
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { getNewProduct } from './components/actions/actions.js'

// Import Store Here
import store from './store';
// Our Custom Modules
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';
// import RatingsReviews from './components/ReviewsRatings/reviewsRatingsContainer.js';

// store.dispatch({type: "ADD_TO_CART", payload: "My buns"}) // test store dispatch working

var App = () => {

  useEffect(() => {
    store.dispatch(getNewProduct('16058'),
    [])
  })

  return (
    // Provider wraps Sub components to provide them access to the store
    <Provider store={store} >
      <div className="AppContainer">
        <ProductOverview />
        {/* <RatingsReviews /> */}
      </div>
    </Provider>
  )
}

export default App;