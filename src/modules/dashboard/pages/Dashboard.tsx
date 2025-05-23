import { DashboardLayout } from "../../../layouts/dashboard/DashboardLayout";
import { DashboardStats } from "../components/DashboardStats";
import ProceduresTable from "../components/TablaTramites";

export function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardStats />
      <ProceduresTable />
    </DashboardLayout>
  );
}
