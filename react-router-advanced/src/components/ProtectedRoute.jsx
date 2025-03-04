// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  // Exemple de vérification d'authentification simple
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Vérifiez si l'utilisateur est connecté

  // Si l'utilisateur est authentifié, affichez le composant demandé
  if (isAuthenticated) {
    return element;
  }

  // Sinon, redirigez vers la page de connexion
  return <Navigate to="/login" />;
}

export default ProtectedRoute;