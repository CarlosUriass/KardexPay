import PendientesCard from "./PendientesCard";
import TotalesCard from "./TotalesCard";
import EnEsperaCard from "./EnEsperaCard";

function DashboardStats() {
  return (
    <div class="grid grid-cols-1 gap-8 p-10 mt-6 lg:grid-cols-2 xl:grid-cols-3 ml-30 mr-30">
      <PendientesCard></PendientesCard>
      <TotalesCard></TotalesCard>
      <EnEsperaCard></EnEsperaCard>
    </div>
  );
}

export default DashboardStats;
