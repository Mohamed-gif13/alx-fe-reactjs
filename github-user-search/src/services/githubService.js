// github-user-search/src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fonction pour la recherche avancée des utilisateurs
export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;
    
    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data.items; // Retourne les utilisateurs trouvés
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
