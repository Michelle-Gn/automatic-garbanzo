import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// https://reactrouter.com/web/guides/quick-start
// import {BrowserRouter as Router, Route} from 'react-router-dom';
{/* <Router>
<Route path={'/products/:id'} component={AppContainer} />
</Router> */}


ReactDOM.render(
    <App />,
  document.getElementById('app')
);