import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PagoAutoServicio } from "../../../services/paymentService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Procedure {
  id: string;
  title: string;
  description: string;
  cost: number;
}

interface FormData {
  matricula: string;
  nombre: string;
  carrera: string;
  grupo: string;
  turno: string;
  email: string;
}

interface RequestSummaryProps {
  procedure: Procedure;
  studentForm: FormData | null | undefined;
  ingresado: number;
  setIngresado: React.Dispatch<React.SetStateAction<number>>;
}

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim() !== "";

export default function RequestSummary({
  procedure,
  studentForm,
  ingresado,
  setIngresado,
}: RequestSummaryProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const discountRate = 0.0;
  const subtotal = procedure.cost;
  const discount = subtotal * discountRate;
  const total = subtotal - discount;
  const restante = Math.max(total - ingresado, 0);

  const isStudentFormComplete =
    !!studentForm && Object.values(studentForm).every(isNonEmptyString);

  // Conexión WebSocket para recibir montos desde el backend
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000"); // Cambia según tu servidor

    ws.onopen = () => {
      console.log("WebSocket conectado");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data);

        const moneda = parseInt(data.amount);

        if (!isNaN(moneda)) {
          setIngresado((prev) => Math.min(prev + moneda, total));
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket cerrado");
    };

    // Limpiar la conexión al desmontar componente
    return () => {
      ws.close();
    };
  }, [setIngresado, total]);

  const handlePayment = async () => {
    if (!studentForm) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await PagoAutoServicio(
        studentForm.matricula,
        Number(procedure.id),
        studentForm.email,
        discount,
        total
      );

      if (response?.folio) {
        navigate("/succesful", {
          state: {
            folio: response.folio,
            fecha_solicitud: response.fecha_solicitud,
          },
        });
      } else {
        setMessage("No se pudo generar el folio. Intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error inesperado al procesar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Resumen de tu compra</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <section>
            <h3 className="text-sm font-medium text-gray-500">
              Trámite seleccionado
            </h3>
            <p className="text-base">{procedure.title}</p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-gray-500">Descripción</h3>
            <p className="text-sm text-gray-600">{procedure.description}</p>
          </section>

          <hr className="my-4 border-gray-300" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Descuento</span>
              <span className="text-green-600">- ${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ingresado</span>
              <span className="text-green-600">${ingresado.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Restante</span>
              <span
                className={restante > 0 ? "text-red-600" : "text-green-600"}
              >
                ${restante.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            className="w-full mt-4"
            onClick={handlePayment}
            disabled={ingresado !== total || !isStudentFormComplete || loading}
          >
            {loading ? "Procesando..." : `Pagar $${total.toFixed(2)}`}
          </Button>

          {message && (
            <p
              className={`mt-2 text-center ${
                message.includes("exitoso") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {!isStudentFormComplete && (
            <p className="text-xs text-red-600 mt-1">
              Por favor, completa todos los campos del formulario para
              continuar.
            </p>
          )}

          {ingresado !== total && (
            <p className="text-xs text-red-600 mt-1">
              Debes ingresar el monto completo para poder continuar.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
