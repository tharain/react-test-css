import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/reducers';

// import css
import 'antd/dist/antd.css';
import 'src/css/main.css';

// main app
import App from 'src/containers/App.jsx';

const store = createStore(
  rootReducer,
  // persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint no-undef: 0 */
ReactDOM.hydrate(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('app'),
);
