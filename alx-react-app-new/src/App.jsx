import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age="30" bio="Web Developer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
