import axios from "axios";

interface PagoAutoServicioResponse {
  fecha_solicitud: Date;
  message: string;
  folio: string;
}

export const PagoAutoServicio = async (
  matricula: string,
  tramite: number,
  email: string,
  descuento: number,
  pago: number
): Promise<PagoAutoServicioResponse | null> => {
  try {
    const response = await axios.post<PagoAutoServicioResponse>(
      "http://localhost:3000/api/payments/autoservice/generate-folio",
      {
        matricula,
        tramite,
        email,
        descuento,
        pago,
      }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al generar folio de pago:",
        error.response?.data?.message || error.message
      );
    } else if (error instanceof Error) {
      console.error("Error al generar folio de pago:", error.message);
    } else {
      console.error("Error desconocido al generar folio de pago");
    }
    return null;
  }
};
