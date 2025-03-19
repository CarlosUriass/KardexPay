import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Verificar si hay un token en el localStorage
  const token = localStorage.getItem("token");

  // Si no hay token, redirige al login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si hay un token, permite acceder a la ruta
  return <Outlet />;
};

export default ProtectedRoute;
