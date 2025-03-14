import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import utils from "../utils/utils";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Maneja los cambios en el input de correo electrónico
  const onEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Validar el email cuando el usuario lo cambia
    if (!utils.validateEmail(emailValue)) {
      setEmailError("Correo electrónico no válido.");
    } else {
      setEmailError(""); // Si el email es válido, limpiar el mensaje de error
    }
  };

  // Maneja los cambios en el input de contraseña
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Maneja el envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor ingresa correo electrónico y contraseña.");
      return;
    }

    if (!utils.validateEmail(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true); // Inicia el estado de carga
    setErrorMessage(""); // Limpia cualquier error anterior

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          correo: email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token); // Guardar el token en Local Storage
      navigate("/Dashboard");
    } catch (error) {
      setErrorMessage("Error al iniciar sesión. Verifica tus credenciales.");
      console.error("Error al hacer login:", error);
    } finally {
      setLoading(false); // Termina el estado de carga
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-auto w-96 bg-white rounded-2xl shadow-2xl p-8 relative z-10">
        <form onSubmit={onSubmit}>
          <h2 className="text-center text-2xl font-semibold mb-6">
            Iniciar sesión
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full p-3 mt-1 border rounded-lg focus:outline-none 
                transition-all duration-200 ease-in-out 
                ${
                  emailError
                    ? "border-red-500 focus:ring-red-500 border"
                    : "border-gray-300 focus:ring-blue-500"
                }
                ${
                  !emailError && email
                    ? "border-green-500 focus:ring-green-500"
                    : ""
                }
                focus:ring-2 focus:ring-opacity-50
                ${!emailError && email ? "focus:ring-green-500" : ""} 
                ${emailError ? "focus:ring-red-500" : ""}
                focus:shadow-lg`} // Usamos focus:shadow-lg para el sombreado verde
              required
              placeholder="correo@correo.com"
              value={email} // El valor del input está vinculado al estado `email`
              onChange={onEmailChange} // Actualiza el estado cuando el usuario escribe
              autoComplete="email"
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="********"
              value={password} // El valor del input está vinculado al estado `password`
              onChange={onPasswordChange} // Actualiza el estado cuando el usuario escribe
              autoComplete="current-password"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            disabled={loading} // Desactiva el botón mientras está cargando
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>

        <Link to={"/recuperarContraseña"}>
          <p className="mt-2 underline font-extralight text-sm cursor-pointer">
            Olvidé la contraseña
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
