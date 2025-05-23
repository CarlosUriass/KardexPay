"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export type ProcedureStatus =
  | "pendiente"
  | "en tramite"
  | "finalizado"
  | "hubo un error";

export const estadoMap: Record<
  ProcedureStatus,
  { label: string; color: string; badgeColor: string }
> = {
  pendiente: {
    label: "Pendiente",
    color: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    badgeColor:
      "bg-amber-200 text-amber-900 rounded-lg shadow-sm transition duration-200 hover:bg-amber-300 font-semibold px-3 py-1",
  },
  "en tramite": {
    label: "En trámite",
    color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    badgeColor:
      "bg-blue-200 text-blue-900 rounded-lg shadow-sm transition duration-200 hover:bg-blue-300 font-semibold px-3 py-1",
  },
  finalizado: {
    label: "Finalizado",
    color: "bg-green-100 text-green-800 hover:bg-green-200",
    badgeColor:
      "bg-green-200 text-green-900 rounded-lg shadow-sm transition duration-200 hover:bg-green-300 font-semibold px-3 py-1",
  },
  "hubo un error": {
    label: "Hubo un error",
    color: "bg-red-100 text-red-800 hover:bg-red-200",
    badgeColor:
      "bg-red-200 text-red-900 rounded-lg shadow-sm transition duration-200 hover:bg-red-300 font-semibold px-3 py-1",
  },
};

interface ProcedureStatusBadgeProps {
  value: ProcedureStatus;
  onChange?: (newStatus: ProcedureStatus) => void;
  readOnly?: boolean;
}

export function ProcedureStatusBadge({
  value,
  onChange,
  readOnly = false,
}: ProcedureStatusBadgeProps) {
  if (readOnly) {
    return (
      <Badge className={estadoMap[value]?.badgeColor || ""}>
        {estadoMap[value]?.label || "Desconocido"}
      </Badge>
    );
  }

  return (
    <Select
      value={value}
      onValueChange={(key) => onChange?.(key as ProcedureStatus)}
    >
      <SelectTrigger className={`w-[130px] ${estadoMap[value]?.color}`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(estadoMap).map(([key, { label, color }]) => (
          <SelectItem key={key} value={key} className={color}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
