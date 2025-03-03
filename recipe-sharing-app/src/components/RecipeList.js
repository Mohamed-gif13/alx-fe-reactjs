// src/components/RecipeList.js

import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);  // Utilisation du store Zustand pour récupérer les recettes

  return (
    <div>
      <h2>Liste des Recettes</h2>
      {recipes.length === 0 ? (
        <p>Aucune recette disponible.</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
