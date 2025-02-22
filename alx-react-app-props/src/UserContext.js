import React from 'react';

// Crée un contexte avec des données par défaut (si nécessaire)
const UserContext = React.createContext({
  name: 'John Doe',
  email: 'john.doe@example.com',
});

export default UserContext;
