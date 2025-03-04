// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost'; // Ajout du composant dynamique
import ProtectedRoute from './components/ProtectedRoute'; // Import du composant ProtectedRoute
import Dashboard from './components/Dashboard'; // Import du composant Dashboard

function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<h1>Home Page</h1>} />

        {/* Gestion des routes imbriquées pour le profil */}
        <Route path="/profile/*" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Route dynamique pour les articles de blog */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Route protégée pour le tableau de bord */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;