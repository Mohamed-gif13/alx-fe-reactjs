import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar /> {/* Composant pour la barre de recherche */}
      <RecipeList /> {/* Composant pour afficher les recettes filtrées */}
    </div>
  );
};

export default App;
