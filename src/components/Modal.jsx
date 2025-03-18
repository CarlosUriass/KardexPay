import { GoAlertFill } from "react-icons/go";
import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext"; // Importar el contexto

function Modal({ isOpen, onClose, children }) {
  // Acceder a ClearService desde el contexto
  const { ClearService } = useContext(ServiceContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 relative w-96 text-center">
        {/* Icono de alerta centrado */}
        <div className="flex flex-col items-center">
          <GoAlertFill className="text-gray-500 text-6xl mb-3" />
          <p className="text-gray-700 text-lg">{children}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Cerrar
          </button>

          <button
            onClick={ClearService} // Usar ClearService directamente
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Volver a los servicios
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
