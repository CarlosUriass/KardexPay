import { HomeLayout } from "@/layouts/home/HomeLayout";
import TramitesGrid from "../components/TramitesGrid";

export function RealizarTramite() {
  return <HomeLayout children={<TramitesGrid />}></HomeLayout>;
}
