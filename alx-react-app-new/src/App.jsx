import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './Counter'; // Si tu veux laisser le compteur ici
import UserContext from './UserContext'; // Import du UserContext

// Données de l'utilisateur à fournir via le contexte
const userData = { 
  name: "Jane Doe", 
  email: "jane.doe@example.com" 
};

function App() {
  return (
    <UserContext.Provider value={userData}>  {/* Fournir le contexte */}
      <div>
        <Header />
        <UserProfile /> {/* Ce composant va consommer les données du UserContext */}
        <MainContent />
        <Counter />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
