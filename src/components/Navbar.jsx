function Navbar() {
  return (
    <nav className="bg-white h-20 flex items-center justify-between px-8 shadow-md">
      <div className="text-black font-bold text-3xl font-[Montserrat] pl-12">
        KardexPay
      </div>

      <ul className="ml-auto flex items-center space-x-8">
        <li className="text-black font-light cursor-pointer">Servicios</li>
        <li className="text-black font-light cursor-pointer">
          Realizar Tramite
        </li>
        <li className="text-black font-light cursor-pointer">
          Consultar Estado
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
