// Module Library imports
import React from 'react';
import { Provider } from 'react-redux'
// Import Store Here
import store from '../store';
// Our Custom Modules
import ProductOverview from './ProductOverview/ProductOverview.jsx';


var App = () => {
  return (
    // Provider wraps Sub components to provide them access to the store
    <Provider store={store} >
      <ProductOverview />
    </Provider>
  )
}

export default App;