import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState(""); // Para el input de correo electrónico
  const [password, setPassword] = useState(""); // Para el input de contraseña

  // Maneja los cambios en el input de correo electrónico (VALIDACIONES)
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Maneja los cambios en el input de contraseña
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Maneja el envío del formulario
  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor ingresa correo electrónico y contraseña.");
      return;
    }

    // Aquí iría la lógica para manejar el inicio de sesión
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
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="correo@correo.com"
              value={email} // El valor del input está vinculado al estado `email`
              onChange={onEmailChange} // Actualiza el estado cuando el usuario escribe
              autoComplete="email"
            />
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

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
