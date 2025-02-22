import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div>
      {/* Pass down the user data to UserDetails */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;
