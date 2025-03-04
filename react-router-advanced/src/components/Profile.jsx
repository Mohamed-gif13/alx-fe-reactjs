// src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link> {/* Link to nested route */}
          </li>
          <li>
            <Link to="settings">Profile Settings</Link> {/* Link to nested route */}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Renders nested routes here */}
    </div>
  );
}

export default Profile;