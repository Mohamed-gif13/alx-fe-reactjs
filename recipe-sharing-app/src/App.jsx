// src/App.jsx

import React from 'react';
import RecipeList from './components/RecipeList';  // Importation du composant RecipeList

const App = () => {
  return (
    <div>
      <h1>Application de partage de recettes</h1>
      <RecipeList />  {/* Affichage du composant RecipeList */}
    </div>
  );
};

export default App;
