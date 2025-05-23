import { HomeLayout } from "@/layouts/home/HomeLayout";
import Hero from "../components/Hero";

export function Home() {
  return <HomeLayout children={<Hero></Hero>}></HomeLayout>;
}
