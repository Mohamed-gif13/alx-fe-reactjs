import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Assurez-vous que le chemin du fichier CSS est correct
import App from './App'; // Importation du composant App

// Rendu de l'application dans l'élément avec l'id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
