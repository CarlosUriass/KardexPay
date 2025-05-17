import Home from "../modules/home/pages/Home";
import Login from "../modules/login/pages/Login";
import DashboardRoute from "../modules/dashboard/routes/DashboardRoute";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Tramites from "../modules/tramites/pages/Tramites";
import Consultas from "../modules/consultas/pages/Consultas";
import Pago from "../modules/pagos/pages/Pago";
import ConfirmacionPage from "../modules/confirmacion/pages/Confirmacion";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tramites",
    element: <Tramites />,
  },
  {
    path: "/consultas",
    element: <Consultas></Consultas>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pago",
    element: <Pago />,
  },
  {
    path: "/confirmacion",
    element: <ConfirmacionPage />,
  },

  {
    path: "/dashboard",
    element: (
      <DashboardRoute>
        <Dashboard />
      </DashboardRoute>
    ),
  },
];

export default routes;
