// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assurez-vous que ces composants sont importés correctement
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails'; // Importer le composant ProfileDetails
import ProfileSettings from './components/ProfileSettings'; // Importer le composant ProfileSettings

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/profile" element={<Profile />}>
          {/* Routes imbriquées pour les détails du profil et les paramètres */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
