import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Déclaration de useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId); // Supprime la recette en fonction de son ID
    navigate('/recipes'); // Redirige vers la liste des recettes après la suppression
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
