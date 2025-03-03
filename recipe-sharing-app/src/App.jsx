// src/App.jsx

import React from 'react';
import RecipeList from './components/RecipeList';  // Importation du composant RecipeList
import AddRecipeForm from './components/AddRecipeForm';  // Importation du composant AddRecipeForm

const App = () => {
  return (
    <div>
      <h1>Application de partage de recettes</h1>
      <AddRecipeForm />  {/* Affichage du formulaire pour ajouter une recette */}
      <RecipeList />  {/* Affichage de la liste des recettes */}
    </div>
  );
};

export default App;
