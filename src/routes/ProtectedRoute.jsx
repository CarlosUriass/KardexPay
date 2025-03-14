import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAunthenticated = localStorage.getItem("token");

  return isAunthenticated ? <Outlet /> : <Navigate to="" />;
};

export default ProtectedRoute;
