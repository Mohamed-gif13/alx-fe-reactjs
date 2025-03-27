// github-user-search/src/components/Search.jsx
import React, { useState } from 'react';
import { useFetchAdvancedUserSearch } from '../services/githubService';
import './Search.css'; 

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  // Utiliser le hook personnalisé
  const { data: searchResults, isLoading, isError } = useFetchAdvancedUserSearch(username, location, minRepos);

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Min Repositories:</label>
          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>

      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error fetching search results</p>}

      {searchResults && searchResults.length > 0 && (
        <div>
          {searchResults.map((user) => (
            <div key={user.id} className="border rounded p-4 mb-4">
              <img src={user.avatar_url} alt="User Avatar" className="w-20 h-20 rounded-full mb-2" />
              <p>Login: {user.login}</p>
              <p>
                Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.html_url}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
