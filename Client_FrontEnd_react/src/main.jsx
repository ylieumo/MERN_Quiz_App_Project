import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';


/** Redux Store */
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);