// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import de useAuth

function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth(); // Utilisation de useAuth pour vérifier l'authentification

  // Si l'utilisateur est authentifié, affichez le composant demandé
  if (isAuthenticated) {
    return element;
  }

  // Sinon, redirigez vers la page de connexion
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
