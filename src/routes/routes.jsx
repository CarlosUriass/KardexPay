import Home from "../modules/home/pages/Home";
import Login from "../modules/login/pages/Login";
import DashboardRoute from "../modules/dashboard/routes/DashboardRoute";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Tramites from "../modules/tramites/pages/Tramites";
import Consultas from "../modules/consultas/pages/Consultas";

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
    path: "/dashboard",
    element: (
      <DashboardRoute>
        <Dashboard />
      </DashboardRoute>
    ),
  },
];

export default routes;
