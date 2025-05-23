import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Aquí asumimos que location.state tiene la forma { folio: { folio, fecha_solicitud } }
  const folioData = location.state?.folio;

  const [folio, setFolio] = useState<string>("");
  const [fechaSolicitud, setFechaSolicitud] = useState<string>("");

  useEffect(() => {
    if (folioData?.folio) {
      setFolio(folioData.folio);
      if (folioData.fecha_solicitud)
        setFechaSolicitud(folioData.fecha_solicitud);
    }
  }, [folioData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/realizar-tramite");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-600" />
        </div>
        <h1 className="text-2xl font-semibold mb-4">
          {"Tu solicitud se ha procesado exitosamente"}
        </h1>

        <>
          <p className="text-lg mb-2">Tu folio de tramite:</p>
          <p className="font-mono font-medium text-xl text-green-700">
            {folio}
          </p>

          {fechaSolicitud && (
            <p className="text-sm text-gray-500 mt-2">
              Fecha: {new Date(fechaSolicitud).toLocaleString()}
            </p>
          )}
        </>

        <div className="space-y-4 mt-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/realizar-tramite">Regresar a los tramites</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
