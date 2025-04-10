import { Link } from "react-router-dom";

function NavbarDashboard() {
  return (
    <nav className="bg-white h-20 flex items-center justify-between px-8 shadow-md">
      <Link to="/dashboard" className="text-[#706cec] font-bold text-3xl pl-12">
        KardexPay
      </Link>
    </nav>
  );
}

export default NavbarDashboard;
