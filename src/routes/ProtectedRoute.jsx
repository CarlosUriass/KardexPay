import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

const ProtectedRoute = () => {
  const { selectedService } = useContext(ServiceContext);

  // Si no hay servicio seleccionado en el contexto, redirige a /servicios
  if (!selectedService) {
    return <Navigate to="/servicios" />;
  }

  // Si hay un servicio seleccionado, permite acceder a la ruta
  return <Outlet />;
};

export default ProtectedRoute;
