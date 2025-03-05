import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Chemin relatif vers le CSS
import App from './App';  // Chemin relatif vers App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
