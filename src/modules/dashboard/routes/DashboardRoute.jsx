import { Navigate } from "react-router-dom";

function DashboardRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default DashboardRoute;
