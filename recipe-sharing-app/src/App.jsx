import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Application de Partage de Recettes</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
