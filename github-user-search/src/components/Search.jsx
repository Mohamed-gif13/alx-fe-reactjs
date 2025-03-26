import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="location" className="block">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block">Min Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="Minimum number of repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div className="mt-5">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{ width: '100px', height: '100px' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p><strong>Location:</strong> {userData.location || 'Not provided'}</p>
          <p><strong>Repositories:</strong> {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
