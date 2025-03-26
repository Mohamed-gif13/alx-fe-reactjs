import React, { useState } from 'react';
import { searchGitHubUser } from '../services/githubApi';

function UserSearch() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await searchGitHubUser(userName);
    setUserData(data);
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Search GitHub User"
      />
      <button onClick={handleSearch}>Search</button>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
