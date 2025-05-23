import { Routes, Route } from "react-router-dom";
import { HomeRoutes } from "@/modules/home/routes/HomeRoute";
import { AuthRoute } from "@/modules/auth/routes/AuthRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardPage } from "@/modules/dashboard/pages/Dashboard";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Ruta protegida */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      {/* Rutas públicas */}
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="*" element={<HomeRoutes />} />
    </Routes>
  );
};
