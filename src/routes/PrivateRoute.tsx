import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import type { JSX } from "react";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Guarda la ubicación actual para redirigir luego de login
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};
