import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Layout } from 'antd';

import CustomHeader from 'src/components/common/CustomHeader/index.jsx';
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
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <CustomHeader/>
          <Layout style={{ height: '100vh' }}>
            <Layout>
              <App />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('app'),
);
