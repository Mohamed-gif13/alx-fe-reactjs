import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'; // Ajout de l'importation de AddRecipeForm
import RecipeList from './components/RecipeList'; // Ajout de l'importation de RecipeList
import RecipeDetails from './components/RecipeDetails'; // Si tu utilises RecipeDetails dans ton App
import { useRecipeStore } from './components/recipeStore';

function App() {
  const recipes = useRecipeStore(state => state.recipes); // Récupérer les recettes depuis le store

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
