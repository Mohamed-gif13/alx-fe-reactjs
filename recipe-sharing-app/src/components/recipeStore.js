import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  setRecipes: (recipes) => set({ recipes }),  // Méthode ajoutée pour définir la liste des recettes
  clearRecipes: () => set({ recipes: [] }),
}));

export default useRecipeStore;
