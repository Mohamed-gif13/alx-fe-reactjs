// src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom';

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
      <Outlet /> {/* This will render either ProfileDetails or ProfileSettings based on the URL */}
    </div>
  );
}

export default Profile;