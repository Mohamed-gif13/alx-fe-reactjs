import React, { useContext } from 'react';
import UserContext from './UserContext'; // Importer le UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Consommer le contexte utilisateur

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
