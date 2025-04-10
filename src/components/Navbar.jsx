import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white h-20 flex items-center justify-between px-8 shadow-md">
      {/* Logo / Nombre del sitio */}
      <Link to="/" className="text-[#706cec] font-bold text-3xl pl-12">
        KardexPay
      </Link>
      <div className="flex space-x-8 pr-12">
        <Link to="/" className="text-black">
          Servicios
        </Link>

        <Link to="/consultas" className="text-black">
          Consultar
        </Link>

        <Link to="/login" className="text-black">
          Acceso
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
