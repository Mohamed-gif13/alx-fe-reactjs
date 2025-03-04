// src/components/Profile.jsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Import du composant ProfileDetails
import ProfileSettings from './ProfileSettings'; // Import du composant ProfileSettings

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Définition des routes imbriquées directement dans Profile.jsx */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet /> {/* Pour afficher le sous-composant actif */}
    </div>
  );
}

export default Profile;
