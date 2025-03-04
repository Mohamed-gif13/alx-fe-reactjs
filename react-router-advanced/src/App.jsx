// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route parent pour le profil */}
        <Route path="/profile" element={<Profile />}>
          {/* Routes imbriquées */}
          <Route path="details" element={<ProfileDetails />} /> {/* Détails du profil */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Paramètres du profil */}
        </Route>

        {/* Vous pouvez ajouter d'autres routes ici */}
        <Route path="/" element={<h1>Page d'accueil</h1>} /> {/* Route pour la page d'accueil */}
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} /> {/* Route pour les pages non trouvées */}
      </Routes>
    </Router>
  );
}

export default App;