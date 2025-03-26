import axios from 'axios';

// URL de l'API GitHub pour la recherche d'utilisateurs
const API_URL = 'https://api.github.com/users/';

// Fonction pour récupérer les données d'un utilisateur GitHub
export const fetchUserData = async (username) => {
  try {
    // Effectuer la requête GET pour obtenir les informations de l'utilisateur
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch (error) {
    // Si une erreur survient (ex. utilisateur non trouvé), on lève une erreur
    throw new Error('Utilisateur non trouvé');
  }
};
