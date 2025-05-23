import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllTramites } from "../../../services/TramitesService";
import { useNavigate } from "react-router-dom";

interface TramiteResponse {
  id_tramite: number;
  nombre: string;
  descripcion: string | null;
  costo: number | null;
}

interface Procedure {
  id: string;
  title: string;
  description: string;
  cost: number;
}

export default function TramitesGrid() {
  const navigate = useNavigate();
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const data: TramiteResponse[] = await getAllTramites();
        const mappedData: Procedure[] = data.map((tramite) => ({
          id: tramite.id_tramite.toString(),
          title: tramite.nombre,
          description: tramite.descripcion ?? "Sin descripción disponible.",
          cost: tramite.costo ?? 0,
        }));
        setProcedures(mappedData);
      } catch (error) {
        console.error("Error fetching procedures:", error);
      }
    };

    fetchProcedures();
  }, []);

  const handleSelectProcedure = (id: string) => {
    const selected = procedures.find((p) => p.id === id);
    if (selected) {
      navigate("/checkout", { state: { procedure: selected } });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Trámites disponibles
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Elige el trámite que deseas realizar para comenzar con el proceso.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {procedures.map((procedure) => (
          <ProcedureCard
            key={procedure.id}
            procedure={procedure}
            isSelected={selectedProcedure === procedure.id}
            onSelect={handleSelectProcedure}
          />
        ))}
      </div>
    </div>
  );
}

interface ProcedureCardProps {
  procedure: Procedure;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

function ProcedureCard({
  procedure,
  isSelected,
  onSelect,
}: ProcedureCardProps) {
  return (
    <Card
      className={`transition-all duration-200 hover:shadow-lg ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-xl capitalize">{procedure.title}</CardTitle>
        <CardDescription>{procedure.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="font-medium">
            Cost:
            <span className="ml-2 text-lg">
              {procedure.cost === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                <span>${procedure.cost.toFixed(2)}</span>
              )}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onSelect(procedure.id)}>
          Tramita ahora
        </Button>
      </CardFooter>
    </Card>
  );
}
