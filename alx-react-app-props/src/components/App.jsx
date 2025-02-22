import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import UserContext from './UserContext';  // Importation du UserContext

function App() {
  // Exemple de données utilisateur que tu veux partager dans ton contexte
  const userData = { 
    name: 'Jane Doe', 
    email: 'jane.doe@example.com'
  };

  return (
    <UserContext.Provider value={userData}>  {/* Fournir le contexte */}
      <div>
        <Header />
        <UserProfile />  {/* Le composant UserProfile accèdera au contexte */}
        <MainContent />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
