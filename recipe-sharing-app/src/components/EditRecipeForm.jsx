import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams(); // Récupérer l'ID de la recette à modifier
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === id)
  );
  const { updateRecipe } = useRecipeStore(state => state); // Action pour mettre à jour la recette
  const [title, setTitle] = useState(recipe?.title || ''); // État pour le titre de la recette
  const [description, setDescription] = useState(recipe?.description || ''); // État pour la description de la recette
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    if (title && description) {
      updateRecipe(id, { title, description });
      navigate(`/recipe/${id}`); // Redirige vers la page de détails de la recette après la mise à jour
    }
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
