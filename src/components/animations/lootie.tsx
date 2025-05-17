import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type LootieProps = {
  ruta: string;
};

export const Lootie = ({ ruta }: LootieProps) => {
  return <DotLottieReact src={ruta} loop autoplay />;
};
