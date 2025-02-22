import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './context/UserContext';

function App() {
  // Sample user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the context value to the ProfilePage component
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

