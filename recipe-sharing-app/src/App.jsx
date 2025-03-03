import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';  // Importation du composant FavoritesList
import RecommendationsList from './components/RecommendationsList';  // Importation du composant RecommendationsList

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />  {/* Affichage de la liste des favoris */}
              <RecommendationsList />  {/* Affichage des recommandations */}
            </>
          } 
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
