import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

function ResumenPago() {
  const { selectedService } = useContext(ServiceContext);

  const formatPrice = (price) =>
    price ? `$${parseFloat(price).toFixed(2)}` : "$0.00";

  return (
    <div className="w-96 mr-10 mt-10 mb-9 shadow-2xl rounded-2xl border-gray-200 border p-5 bg-white relative z-20">
      {/* Título */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Resumen de pago</h2>
        <span className="text-gray-500 text-xs">Detalles adicionales</span>
      </div>

      {/* Detalle del servicio */}
      <div className="flex items-center gap-4 p-4 rounded-lg shadow-2xl">
        <div className="w-16 h-16 bg-gray-300 rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={
              selectedService
                ? selectedService.image
                : "/ruta/a/imagen-default.jpg"
            }
            alt={
              selectedService
                ? selectedService.title
                : "Servicio no seleccionado"
            }
          />
        </div>
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
      <div className="pt-4 border-t border-gray-300 mt-60">
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
  );
}

export default ResumenPago;
