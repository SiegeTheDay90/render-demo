import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';
import * as sessionActions from './store/session';
import csrfFetch, { restoreCSRF } from './store/csrf';

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.restoreCSRF = restoreCSRF;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
