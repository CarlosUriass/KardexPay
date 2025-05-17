import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentDetails = ({ isFormComplete }) => {
  const [enlarged, setEnlarged] = useState(false);
  const [amountPaid, setAmountPaid] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  const toggleImageSize = () => setEnlarged(!enlarged);

  const handlePay = () => navigate("/confirmacion"); // TODO: Mandar los datos al backend

  const total = (
    product?.price -
    (product?.price * product?.discount) / 100
  ).toFixed(2);

  const remaining = Math.max(total - amountPaid, 0).toFixed(2);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5001");

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data);
        if (
          data.message === "pago recibido" &&
          typeof data.amount === "number"
        ) {
          setAmountPaid((prev) => prev + data.amount);
        }
      } catch (err) {
        console.error("❌ Error al procesar mensaje WebSocket:", err);
      }
    };

    return () => socket.close();
  }, []);

  if (!product) return null;

  const buttonDisabled = remaining > 0 || !isFormComplete;

  return (
    <div className="w-96 rounded-2xl shadow-md mr-10 mt-5 mb-5 border border-gray-100 bg-white overflow-hidden">
      <div className="flex flex-col h-full p-5 gap-6">
        {/* Producto */}
        <div className="flex items-start gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="cursor-pointer w-20 h-20 object-cover rounded-md"
            onClick={toggleImageSize}
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-gray-600">{product.description}</p>
          </div>
        </div>

        <div className="w-full border-t border-gray-200/80" />

        {/* Detalles */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Precio:</span>
            <span>${product.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Descuento:</span>
            <span>{product.discount}%</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        <div className="w-full border-t border-gray-200/80" />

        {/* Pago */}
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Ingresado:</span>
          <span>${amountPaid.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Restante:</span>
          <span>${remaining}</span>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handlePay}
            disabled={buttonDisabled}
            className={`w-3/4 p-3 text-white rounded-lg h-14 mt-6 mb-2 ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#706cec] hover:bg-[#5a53c0]"
            }`}
          >
            {remaining > 0
              ? "Esperando pago..."
              : !isFormComplete
              ? "Completa el formulario"
              : "Continuar"}
          </button>
        </div>
      </div>

      {enlarged && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40"
            onClick={toggleImageSize}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-2xl max-h-screen object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentDetails;
