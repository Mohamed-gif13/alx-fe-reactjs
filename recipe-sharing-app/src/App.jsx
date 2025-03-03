import RecipeList from './components/recipeStore.js';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div>
      <h1>Application de Partage de Recettes</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
