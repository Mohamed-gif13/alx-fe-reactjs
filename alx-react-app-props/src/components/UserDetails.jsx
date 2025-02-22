import React, { useContext } from 'react';
import UserContext from './context/UserContext'; // Correct import

function UserDetails() {
  const userData = useContext(UserContext); // Using the context here

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
