import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Action pour ajouter une recette
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  
  // Action pour mettre à jour une recette
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
  
  // Action pour supprimer une recette
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  
  // Action pour définir toutes les recettes
  setRecipes: (recipes) => set({ recipes }),  // Ajoute cette fonction pour définir les recettes
}));

export { useRecipeStore };
