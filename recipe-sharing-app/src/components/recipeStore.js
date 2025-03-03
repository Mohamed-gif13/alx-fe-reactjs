
const recipeStore = {
  recipes: [], // Array to store recipes

  // Add a new recipe
  addRecipe: function(recipe) {
    this.recipes.push(recipe);
  },

  // Update an existing recipe by ID
  updateRecipe: function(id, updatedRecipe) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes[index] = { ...this.recipes[index], ...updatedRecipe };
    } else {
      console.log("Recipe not found!");
    }
  },

  // Delete a recipe by ID
  deleteRecipe: function(id) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes.splice(index, 1);
    } else {
      console.log("Recipe not found!");
    }
  },
};

export default recipeStore;

