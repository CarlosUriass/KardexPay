import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Servicios from "../pages/Servicios";
import Tramites from "../pages/Tramites";
import Consultas from "../pages/Consultas";
import Login from "../pages/Login";
import RecuperarContraseña from "../pages/RecuperarContrasena";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
