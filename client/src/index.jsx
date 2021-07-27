import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App.jsx';
// import AppContainer from REDUX-FOLDER;
// import store from REDUX-FOLDER;

import {Provider} from 'react-redux';

// https://reactrouter.com/web/guides/quick-start
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={'/products/:id'} component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);