import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action pour ajouter une recette
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
  })),
  
  // Action pour définir (mettre à jour) les recettes
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Action pour définir le terme de recherche
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action pour filtrer les recettes en fonction du terme de recherche
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export { useRecipeStore };
