// Module Library imports
import React from 'react';
import { Provider } from 'react-redux'
// Import Store Here
import store from './store';
// Our Custom Modules
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';
import RatingsReviews from './components/ReviewsRatings/reviewsRatingsContainer.js';


var App = () => {
  return (
    // Provider wraps Sub components to provide them access to the store
    <Provider store={store} >
      <ProductOverview />
      <RatingsReviews />
    </Provider>
  )
}

export default App;