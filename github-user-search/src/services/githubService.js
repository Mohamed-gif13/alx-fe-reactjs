import axios from "axios";

const BASE_URL = "https://api.github.com";

// Recherche d'un utilisateur par son username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Retourne les données de l'utilisateur
  } catch (error) {
    throw new Error("User not found");
  }
};

// Recherche avancée par filtres (nom, localisation, min repos)
export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
