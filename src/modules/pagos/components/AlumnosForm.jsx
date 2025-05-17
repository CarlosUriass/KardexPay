import { useState, useEffect } from "react";
import axios from "axios";

const AlumnosForm = ({ onFormCompleteChange }) => {
  const [matricula, setMatricula] = useState("");
  const [alumnoData, setAlumnoData] = useState({
    matricula: "",
    nombre_alumno: "",
    nombre_carrera: "",
    nombre_grupo: "",
    nombre_turno: "",
    correo: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (matricula.length === 8) {
      axios
        .post("https://kardexpaybackend.onrender.com/api/getData", {
          matricula,
        })
        .then((response) => {
          const { alumno } = response.data;
          if (alumno) {
            setAlumnoData({
              matricula: alumno.matricula,
              nombre_alumno: alumno.nombre_alumno,
              nombre_carrera: alumno.nombre_carrera,
              nombre_grupo: alumno.nombre_grupo,
              nombre_turno: alumno.nombre_turno,
              correo: alumno.correo || "",
            });
          } else {
            alert("No se encontró ningún alumno con esa matrícula.");
            resetForm();
          }
        })
        .catch((error) => {
          console.error("Error al hacer la solicitud:", error);
          alert("Ocurrió un error al buscar la matrícula.");
          resetForm();
        });
    }
  }, [matricula]);

  useEffect(() => {
    const formIsComplete =
      alumnoData.matricula &&
      alumnoData.nombre_alumno &&
      alumnoData.nombre_carrera &&
      alumnoData.nombre_grupo &&
      alumnoData.nombre_turno &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alumnoData.correo);

    onFormCompleteChange?.(formIsComplete);
  }, [alumnoData, onFormCompleteChange]);

  const onMatriculaChange = (e) => {
    setMatricula(e.target.value);
  };

  const onCorreoChange = (e) => {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setFormErrors((prev) => ({ ...prev, correo: "Correo inválido" }));
    } else {
      setFormErrors((prev) => ({ ...prev, correo: null }));
    }
    setAlumnoData((prev) => ({ ...prev, correo: email }));
  };

  const resetForm = () => {
    setMatricula("");
    setAlumnoData({
      matricula: "",
      nombre_alumno: "",
      nombre_carrera: "",
      nombre_grupo: "",
      nombre_turno: "",
      correo: "",
    });
    setFormErrors({});
    onFormCompleteChange?.(false);
  };

  return (
    <div className="w-full max-w-3xl mt-10 ml-5 mb-5 mr-50">
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={onMatriculaChange}
          disabled={matricula.length === 8}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500"
        />

        <input
          type="text"
          placeholder="Nombre alumno"
          value={alumnoData.nombre_alumno}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
        />

        <input
          type="text"
          placeholder="Carrera"
          value={alumnoData.nombre_carrera}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
        />

        <input
          type="text"
          placeholder="Grupo"
          value={alumnoData.nombre_grupo}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
        />

        <input
          type="text"
          placeholder="Turno"
          value={alumnoData.nombre_turno}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
        />

        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={alumnoData.correo}
            onChange={onCorreoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500"
          />
          {formErrors.correo && (
            <p className="text-red-500 text-sm mt-1">{formErrors.correo}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 mt-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Resetear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnosForm;
