import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white h-20 flex items-center justify-between px-8 shadow-md">
      <Link
        to="/"
        className="text-black font-bold text-3xl font-[Montserrat] pl-12"
      >
        KardexPay
      </Link>

      <ul className="ml-auto flex items-center space-x-8">
        <li>
          <Link
            to="/servicios"
            className="text-black font-light cursor-pointer"
          >
            Servicios
          </Link>
        </li>

        <li>
          <Link to="/tramites" className="text-black font-light cursor-pointer">
            Realizar Tramite
          </Link>
        </li>

        <li>
          <Link
            to="/consultas"
            className="text-black font-light cursor-pointer"
          >
            Consultar Estado
          </Link>
        </li>

        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
