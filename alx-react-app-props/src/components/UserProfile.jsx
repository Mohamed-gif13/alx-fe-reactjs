import React, { useContext } from 'react';
import UserContext from './UserContext';  // Importation du UserContext

function UserProfile() {
  // Utilisation du contexte pour obtenir les données de l'utilisateur
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default UserProfile;

  