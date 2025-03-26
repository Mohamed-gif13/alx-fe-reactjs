import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  // Construire la requête pour GitHub API avec les nouveaux paramètres
  const query = `${username} location:${location} repos:>=${minRepos}`;
  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  
  // Retourner les résultats sous forme de liste d'utilisateurs
  return response.data.items[0]; // Nous utilisons le premier utilisateur retourné
};

export { fetchUserData };
