import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../../components/NavbarDashboard";
import DashboardStats from "../components/DashboardStats";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <>
      <NavbarDashboard></NavbarDashboard>

      <DashboardStats></DashboardStats>
    </>
  );
}

export default Dashboard;
