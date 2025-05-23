import { useEffect, useState } from "react";
import { ClipboardList, CheckCircle, FileSearch } from "lucide-react";
import { StatCard } from "./StatCard";

export function DashboardStats() {
  const [pendientes, setPendientes] = useState<number>(0);
  const [completados, setCompletados] = useState<number>(0);
  const [proceso, setProcesos] = useState<number>(0);

  useEffect(() => {
    const fetchPendientes = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/data/folios/getPendientesCount?id_unidad_academica=1"
        );
        const data = await res.json();
        setPendientes(data.result);
      } catch (error) {
        console.error("Error fetching pendientes:", error);
      }
    };

    fetchPendientes();
  }, []);

  useEffect(() => {
    const fetchCompletadosHoy = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/data/folios/getCompletedCount?id_unidad_academica=1"
        );
        const data = await res.json();
        setCompletados(data.result);
      } catch (error) {
        console.error("Error fetching completados:", error);
      }
    };

    fetchCompletadosHoy();
  }, []);

  useEffect(() => {
    const fetchEnProceso = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/data/folios/getProcessCount?id_unidad_academica=1"
        );
        const data = await res.json();
        setProcesos(data.result);
      } catch (error) {
        console.error("Error fetching en proceso:", error);
      }
    };

    fetchEnProceso();
  }, []);

  const stats = [
    {
      title: "Tramites pendientes",
      value: pendientes,
      subtitle: "Esperando a ser atendidos",
      icon: <ClipboardList className="h-6 w-6 text-amber-600" />,
      accentColor: "bg-amber-200",
      valueColor: "text-amber-600",
    },
    {
      title: "Completados hoy",
      value: completados,
      subtitle: "Finalizados correctamente",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      accentColor: "bg-green-200",
      valueColor: "text-green-600",
    },
    {
      title: "En revisión",
      value: proceso,
      subtitle: "Esperando a ser firmados",
      icon: <FileSearch className="h-6 w-6 text-blue-600" />,
      accentColor: "bg-blue-200",
      valueColor: "text-blue-600",
    },
  ];

  return (
    <div className="container mx-auto px-2">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Panel de Control Escolar</h1>
        <p className="text-gray-500 mt-1">
          Resumen del estado de los trámites administrativos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}
