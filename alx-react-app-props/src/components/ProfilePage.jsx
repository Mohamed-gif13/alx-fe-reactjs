import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div>
      {/* Pass down the user data to UserInfo */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
