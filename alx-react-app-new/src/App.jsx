import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './Counter'; // Importation du composant Counter

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age="30" bio="Web Developer" />
      <MainContent />
      <Counter />  {/* Insertion du composant Counter ici */}
      <Footer />
    </div>
  );
}

export default App;

