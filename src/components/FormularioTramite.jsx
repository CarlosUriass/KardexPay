function FormularioTramite() {
  return (
    <div className="ml-10 mt-5 mb-10 shadow-2xl rounded-2xl p-5 w-210 bg-white relative z-20 h-150">
      <form className="space-y-6 p-9">
        {/* Matrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
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
              placeholder="Ingrese su nombre"
              disabled
              className="input-style"
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
              className="input-style"
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
              className="input-style"
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
              className="input-style"
            />
          </div>
        </div>

        {/* Correo Electrónico */}
        <div>
          <label
            htmlFor="Correo electronico"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electronico"
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
}

export default FormularioTramite;
