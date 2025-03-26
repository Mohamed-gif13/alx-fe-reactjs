import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchGitHubUser = async (userName) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
