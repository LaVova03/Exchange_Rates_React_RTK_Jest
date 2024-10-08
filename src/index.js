import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>
);
