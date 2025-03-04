// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const isAuthenticated = true; // Remplacez par votre logique d'authentification

  // Si l'utilisateur est authentifié, affichez le composant demandé
  if (isAuthenticated) {
    return element;
  }

  // Sinon, redirigez vers la page de connexion
  return <Navigate to="/login" />;
}

export default ProtectedRoute;