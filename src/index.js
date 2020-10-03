import React from 'react';
import ReactDOM from 'react-dom';
import './stuff/index.css';
import App from './App';
import * as serviceWorker from './stuff/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
