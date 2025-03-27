import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUserSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setUser(null);

    try {
      if (username && !location && !minRepos) {
        // Recherche par username uniquement
        const userData = await fetchUserData(username);
        setUser(userData);
      } else {
        // Recherche avancée
        const results = await fetchAdvancedUserSearch(username, location, minRepos);
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Affichage du résultat pour la recherche basique */}
      {user && (
        <div className="border p-4 rounded flex gap-4 items-center mt-4">
          <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="font-bold">{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              GitHub Profile
            </a>
          </div>
        </div>
      )}

      {/* Affichage des résultats pour la recherche avancée */}
      <div className="mt-4">
        {users.length > 0 ? users.map(user => (
          <div key={user.id} className="border p-4 rounded flex gap-4 items-center">
            <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                GitHub Profile
              </a>
            </div>
          </div>
        )) : (!user && <p>No users found</p>)}
      </div>
    </div>
  );
}

export default Search;
