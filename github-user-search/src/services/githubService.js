import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${API_URL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
