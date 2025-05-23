import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { RealizarTramite } from "../pages/RealizarTramite";
import CheckoutPage from "../pages/CheckoutPage";
import SuccessPage from "../pages/SuccesfulPage";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/realizar-tramite" element={<RealizarTramite />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/succesful" element={<SuccessPage />} />

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
