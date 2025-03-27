// github-user-search/src/services/githubService.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = "https://api.github.com";

// Hook personnalisé pour récupérer un utilisateur
export const useFetchUserData = (username) => {
  return useQuery({
    queryKey: ['user', username], 
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/users/${username}`);
      return data;
    },
    enabled: !!username, // Exécuter la requête seulement si `username` n'est pas vide
  });
};

// Hook personnalisé pour la recherche avancée
export const useFetchAdvancedUserSearch = (query, location, minRepos) => {
  return useQuery({
    queryKey: ['search', query, location, minRepos],
    queryFn: async () => {
      let searchQuery = `q=${query}`;
      if (location) searchQuery += `+location:${location}`;
      if (minRepos) searchQuery += `+repos:>=${minRepos}`;

      const { data } = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
      return data.items;
    },
    enabled: !!query, // Exécuter seulement si `query` est défini
  });
};
