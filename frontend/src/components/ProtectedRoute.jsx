import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated by verifying the token
    axios.get('http://localhost:8080/auth/refresh-token', { withCredentials: true })
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    // Optionally, you can show a loading spinner here while checking authentication
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
