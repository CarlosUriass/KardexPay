import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ServiceProvider } from "../context/ServiceContext";
import LandingPage from "../pages/LandingPage";
import Servicios from "../pages/Servicios";
import Tramites from "../pages/Tramites";
import Consultas from "../pages/Consultas";
import Login from "../pages/Login";
import RecuperarContraseña from "../pages/RecuperarContrasena";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <ServiceProvider>
      <Router>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/recuperarContraseña"
            element={<RecuperarContraseña />}
          />

          <Route path="/tramites" element={<Tramites />} />

          {/* RUTA PROTEGIDA: Solo accesible si está autenticado */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ServiceProvider>
  );
}

export default AppRoutes;
