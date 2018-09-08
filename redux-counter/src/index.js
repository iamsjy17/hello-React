import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';

import reducers from './reducers';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
console.log(window.devToolsExtension);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);
