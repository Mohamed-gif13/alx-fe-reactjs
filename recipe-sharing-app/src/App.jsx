import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';  // Importation ajoutée ici

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar /> {/* Composant pour la barre de recherche */}
      <AddRecipeForm /> {/* Composant pour ajouter une recette */}
      <RecipeList /> {/* Composant pour afficher les recettes filtrées */}
    </div>
  );
};

export default App;
