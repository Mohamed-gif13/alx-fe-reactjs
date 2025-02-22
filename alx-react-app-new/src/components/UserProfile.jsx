import React, { useContext } from 'react';
import UserContext from './UserContext'; // Importer le UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Consommer le contexte utilisateur

  return (
    <div>
      <h2>
        <span
          style={{
            color: 'blue',     // Appliquer la couleur bleue
            border: '2px solid blue',  // Appliquer une bordure bleue de 2px
            padding: '10px',   // Ajouter du padding de 10px
            margin: '10px',    // Ajouter une marge de 10px
          }}
        >
          {userData.name}
        </span>
      </h2>
      <p>
        Email: <span
          style={{
            color: 'blue',
            border: '2px solid blue',
            padding: '10px',
            margin: '10px',
          }}
        >
          {userData.email}
        </span>
      </p>
    </div>
  );
}

export default UserProfile;
