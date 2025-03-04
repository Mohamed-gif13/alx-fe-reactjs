// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simule une vérification d'authentification (ex: depuis localStorage)
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
}
