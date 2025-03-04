// src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom'; // Assurez-vous d'importer correctement Outlet et Link

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link> {/* Lien vers les détails du profil */}
          </li>
          <li>
            <Link to="settings">Profile Settings</Link> {/* Lien vers les paramètres du profil */}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Affiche les sous-composants ici */}
    </div>
  );
}

export default Profile;
