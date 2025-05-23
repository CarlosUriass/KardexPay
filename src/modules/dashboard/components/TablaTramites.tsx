"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, ExternalLink } from "lucide-react";
import {
  ProcedureStatusBadge,
  type ProcedureStatus,
} from "./ProcedureStatusBadge";

interface Procedure {
  folio: string;
  fecha_solicitud: string;
  total: number;
  descuento: number;
  email: string;
  matricula: string;
  nombre_alumno: string;
  nombre_tramite: string;
  descripcion_tramite: string | null;
  costo: number;
  metodo_pago: string;
  carrera: string;
  id_unidad_academica: number;
  nombre_grupo: string;
  turno: string;
  tipo_programa: string;
  estatus_folio: ProcedureStatus;
}

export default function ProceduresTable() {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(
    null
  );
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/data/folios/getLastFolios?id_unidad_academica=1"
    )
      .then((res) => res.json())
      .then((data: { result: Procedure[] }) => {
        setProcedures(data.result);
      })
      .catch((err) => {
        console.error("Error al obtener los trámites:", err);
      });
  }, []);

  const handleStatusChange = (folio: string, newStatus: ProcedureStatus) => {
    setProcedures((prev) =>
      prev.map((proc) =>
        proc.folio === folio ? { ...proc, estatus_folio: newStatus } : proc
      )
    );
  };

  const handleViewDetails = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setDetailsOpen(true);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold flex items-center gap-2 cursor-pointer select-none">
          Últimos trámites solicitados
          <ExternalLink className="w-5 h-5 text-gray-600 hover:text-gray-700" />
        </h1>
        <p className="text-gray-500 mt-1">
          Revisa y administra los trámites recientes realizados por los
          estudiantes. Últimos 10 trámites.
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Folio</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead className="hidden md:table-cell">Trámite</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Detalles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {procedures.map((procedure) => (
              <TableRow key={procedure.folio}>
                <TableCell className="font-medium">{procedure.folio}</TableCell>
                <TableCell>{procedure.matricula}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {procedure.nombre_tramite}
                </TableCell>
                <TableCell>
                  <ProcedureStatusBadge
                    value={procedure.estatus_folio}
                    onChange={(newStatus) =>
                      handleStatusChange(procedure.folio, newStatus)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleViewDetails(procedure)}
                  >
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Ver detalles</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Detalles del trámite</DialogTitle>
            <DialogDescription>
              Información completa sobre el trámite seleccionado.
            </DialogDescription>
          </DialogHeader>

          {selectedProcedure && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Folio</p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.folio}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Matrícula</p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.matricula}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Trámite</p>
                <p className="mt-1 text-gray-700">
                  {selectedProcedure.nombre_tramite}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Estado</p>
                  <ProcedureStatusBadge
                    value={selectedProcedure.estatus_folio}
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Fecha de solicitud
                  </p>
                  <p className="mt-1 text-gray-700">
                    {formatDate(selectedProcedure.fecha_solicitud)}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Nombre del Alumno
                </p>
                <p className="mt-1 text-gray-700">
                  {selectedProcedure.nombre_alumno}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Correo</p>
                <p className="mt-1 text-gray-700">{selectedProcedure.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Carrera</p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.carrera}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Grupo</p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.nombre_grupo}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Turno</p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.turno}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Método de pago
                  </p>
                  <p className="mt-1 text-gray-700">
                    {selectedProcedure.metodo_pago}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Costo</p>
                <p className="mt-1 text-gray-700 font-bold">
                  ${selectedProcedure.costo.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
