import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './context/UserContext'; // Import UserContext

function App() {
  const [userData] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
