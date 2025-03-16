import { Link } from "react-router-dom";
import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";
import utils from "../utils/utils";

function ServiceCard({ image, title, description, precio }) {
  const { setService } = useContext(ServiceContext); // Accede a la función para actualizar el servicio
  const service = { image, title, description, precio }; // Crea el objeto del servicio

  const handleClick = () => {
    setService(service); // Al hacer clic, guardamos el servicio en el contexto
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {utils.capitalize(title)}
        </h3>
        <p className="text-gray-600 mt-2 h-[100px] overflow-y-auto">
          {utils.capitalize(description)}
        </p>
        <p>$ {precio}</p>

        <Link to="/tramites">
          <button
            onClick={handleClick}
            className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition cursor-pointer"
          >
            Tramitar ahora
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
