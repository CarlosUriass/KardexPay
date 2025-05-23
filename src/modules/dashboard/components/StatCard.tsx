import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  valueColor: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  accentColor,
  valueColor,
}: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-1 ${accentColor}`} />
      <CardContent className="">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className={`text-3xl font-bold mt-2 ${valueColor}`}>
              {value.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>
          <div className={`p-3 rounded-full ${accentColor} bg-opacity-10`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
