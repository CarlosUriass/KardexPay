import axios from "axios";
import { useState } from "react";
import utils from "../utils/utils";

function FormularioTramite() {
  const [matricula, setMatricula] = useState("");
  const [studentData, setStudentData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    facultad: "",
  });

  const fetchStudentData = () => {
    if (matricula.trim() !== "") {
      axios
        .get(`http://localhost:5001/api/buscarAlumno/encontraralumno`, {
          params: { matricula }, // Enviamos la matrícula como parámetro de consulta
        })
        .then((response) => {
          setStudentData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  };

  return (
    <div className="ml-10 mt-5 mb-10 shadow-2xl rounded-2xl p-5 w-full max-w-4xl bg-white relative z-20 h-150">
      <form className="space-y-6 p-9">
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
              onBlur={fetchStudentData} // Ejecuta la petición al salir del input
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
              value={utils.capitalize(studentData.nombre)}
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
              value={utils.capitalize(studentData.primer_apellido)}
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
              value={utils.capitalize(studentData.segundo_apellido)}
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
              value={utils.capitalize(studentData.facultad)}
              className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Correo Electrónico */}
        <div>
          <label
            htmlFor="correoElectronico"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            className="mt-2 block w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
}

export default FormularioTramite;
