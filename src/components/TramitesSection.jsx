import React, { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

function TramitesSection() {
  const { selectedService } = useContext(ServiceContext);

  const formatPrice = (price) => {
    return price ? `$${parseFloat(price).toFixed(2)}` : "$0.00";
  };

  return (
    <div
      className="h-[90vh] w-full bg-white relative flex
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      {/* Contenido principal */}
      <div className="flex-1 p-6">
        <div className="ml-10 mt-5 mb-10 shadow-2xl rounded-2xl p-5 w-210  bg-white relative z-20 h-150 ">
          <form className="space-y-6 p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Matrícula */}
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
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre */}
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
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Primer Apellido */}
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
                  placeholder="Ingrese su primer apellido"
                  disabled
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Segundo Apellido */}
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
                  placeholder="Ingrese su segundo apellido"
                  disabled
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Carrera */}
              <div>
                <label
                  htmlFor="carrera"
                  className="block text-sm font-medium text-gray-700"
                >
                  Carrera
                </label>
                <input
                  type="text"
                  id="carrera"
                  name="carrera"
                  placeholder="Ingrese su carrera"
                  disabled
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Grado */}
              <div>
                <label
                  htmlFor="grado"
                  className="block text-sm font-medium text-gray-700"
                >
                  Grado
                </label>
                <input
                  type="text"
                  id="grado"
                  name="grado"
                  placeholder="Ingrese su grado"
                  disabled
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Grupo */}
              <div>
                <label
                  htmlFor="grupo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Grupo
                </label>
                <input
                  type="text"
                  id="grupo"
                  name="grupo"
                  placeholder="Ingrese su grupo"
                  disabled
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Correo Electrónico (con ancho completo) */}
            <div>
              <label
                htmlFor="correoElectronico"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correoElectronico"
                name="correoElectronico"
                placeholder="correo@correo.com"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-96 mr-10 mt-10 mb-10 shadow-2xl rounded-2xl border-gray-200 border p-5 bg-white relative z-20">
        {/* Título con flex */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-lg">Resumen de pago</h2>
          <span className="text-gray-500 text-xs">Detalles adicionales</span>
        </div>

        {/* Contenedor de imagen, nombre y precio */}
        <div className="flex items-center gap-4 p-4 rounded-lg shadow-2xl">
          {/* Espacio para la imagen */}
          <div className="w-16 h-16 bg-gray-300 rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={
                selectedService
                  ? selectedService.image
                  : "/ruta/a/imagen-default.jpg"
              } // Si no hay servicio, muestra imagen por defecto
              alt={
                selectedService
                  ? selectedService.title
                  : "Servicio no seleccionado"
              } // Si no hay servicio, muestra texto genérico
            />
          </div>

          {/* Nombre y precio */}
          <div>
            <p className="text-base font-semibold">
              {selectedService
                ? selectedService.title
                : "Servicio no seleccionado"}
            </p>
            <p className="text-sm font-normal mt-1">
              {formatPrice(selectedService ? selectedService.precio : "0")}
            </p>
          </div>
        </div>

        {/* Resumen de pagos */}
        <div className="pt-4 border-t border-gray-300 mt-55">
          <div className="flex justify-between text-sm font-light">
            <p>Subtotal:</p>
            <p>{formatPrice(selectedService ? selectedService.precio : "0")}</p>
          </div>
          <div className="flex justify-between text-sm font-light mt-2">
            <p>Descuento:</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between text-lg font-light mt-2">
            <p>Total:</p>
            <p>{formatPrice(selectedService ? selectedService.precio : "0")}</p>
          </div>
        </div>

        {/* Botón de Pagar */}
        <div className="mt-6 relative z-30">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-xl hover:bg-blue-600">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TramitesSection;
