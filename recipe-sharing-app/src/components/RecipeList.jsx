import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';  // Ajout de Link pour la navigation

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes); // Utiliser filteredRecipes

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Lien vers les détails de la recette */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
