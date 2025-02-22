import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  // Consume the context data
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
