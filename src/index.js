import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initConfig } from './config/globals';

initConfig();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

