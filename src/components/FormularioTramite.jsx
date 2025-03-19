import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { ServiceContext } from "../context/ServiceContext"; // Asegúrate de que la ruta sea correcta
import utils from "../utils/utils";
import Modal from "./Modal";

function FormularioTramite() {
  const { selectedService } = useContext(ServiceContext);

  useEffect(() => {
    if (selectedService) {
      setTramite(selectedService.title);
    }
  }, [selectedService]);

  const [matricula, setMatricula] = useState("");
  const [usuarioData, setUsuarioData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    facultad: "",
  });

  const clearUsuarioData = () => {
    setUsuarioData({
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      facultad: "",
    });
  };

  const [tramite, setTramite] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Estado corregido para email y error
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!utils.validateEmail(emailValue)) {
      setEmailError("Correo electrónico no válido.");
    } else {
      setEmailError("");
    }
  };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Verifica si el servicio es aplicable a alumnos
  const verificarServicioAplicable = () => {
    axios
      .get(`http://localhost:5001/api/servicios/aplicableAlumnos`, {
        params: { servicio: tramite },
      })
      .then((response) => {
        if (response.data.aplicable) {
          fetchUsuarioData();
        } else {
          // Aquí buscar entre los empleados
        }
      })
      .catch(() => {
        openModal("Hubo un error al verificar si el servicio es aplicable.");
      });
  };

  // Obtener datos del alumno
  const fetchUsuarioData = () => {
    if (matricula.trim() !== "") {
      axios
        .get(`http://localhost:5001/api/buscarAlumno/encontraralumno`, {
          params: { matricula },
        })
        .then((response) => {
          setUsuarioData(response.data);
        })
        .catch(() => {
          clearUsuarioData();
          openModal(
            "No se encontró la matrícula. Verifique si el servicio seleccionado aplica para su matrícula."
          );
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verificarServicioAplicable(); // Verifica si el servicio es aplicable antes de proceder
  };

  return (
    <div className="relative">
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{modalMessage}</p>
      </Modal>

      {/* Formulario con opacidad cuando el modal está abierto */}
      <div
        className={`ml-10 mt-5 mb-10 shadow-2xl rounded-2xl p-5 w-full max-w-4xl bg-white relative z-20 h-150 border border-gray-200 transition-opacity ${
          isModalOpen ? "opacity-50" : "opacity-100"
        }`}
      >
        <form className="space-y-6 p-9" onSubmit={handleSubmit}>
          {/* Matrícula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div>
              <label
                htmlFor="matricula"
                className="block text-sm font-medium text-gray-700"
              >
                Matrícula
              </label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                placeholder="Ingrese su matrícula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                onBlur={verificarServicioAplicable}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Nombre y Apellidos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                disabled
                value={utils.title(usuarioData.nombre || "")}
                className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="primerApellido"
                className="block text-sm font-medium text-gray-700"
              >
                Primer Apellido
              </label>
              <input
                type="text"
                id="primerApellido"
                name="primerApellido"
                placeholder="Primer apellido"
                disabled
                value={utils.title(usuarioData.primer_apellido || "")}
                className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="segundoApellido"
                className="block text-sm font-medium text-gray-700"
              >
                Segundo Apellido
              </label>
              <input
                type="text"
                id="segundoApellido"
                name="segundoApellido"
                placeholder="Segundo apellido"
                disabled
                value={utils.title(usuarioData.segundo_apellido || "")}
                className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="facultad"
                className="block text-sm font-medium text-gray-700"
              >
                Facultad
              </label>
              <input
                type="text"
                id="facultad"
                name="facultad"
                placeholder="Facultad"
                disabled
                value={utils.title(usuarioData.facultad || "")}
                className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          {/* Correo Electrónico */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              className={`mt-2 block w-full max-w-lg px-4 py-3 border rounded-lg shadow-sm 
      focus:outline-none focus:ring-2 sm:text-sm
      ${
        emailError
          ? "border-red-500 focus:ring-red-500"
          : !email
          ? "border-gray-300 focus:ring-blue-500"
          : "border-green-500 focus:ring-green-500"
      }`}
              onChange={onEmailChange}
              value={email}
              autoComplete="email"
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioTramite;
