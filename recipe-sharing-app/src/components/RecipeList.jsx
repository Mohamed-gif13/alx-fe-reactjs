import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  useEffect(() => {
    // Applique le filtre au démarrage
    useRecipeStore.getState().filterRecipes();
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
