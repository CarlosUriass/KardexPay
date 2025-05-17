import { Header } from "./components/Header";
import type { ReactNode } from "react";
import Footer from "./components/Footer";

type HomeLayoutProps = {
  children: ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header fijo con sombra para separación visual */}
      <Header />

      {/* Contenedor principal con padding y margen para separación visual */}
      <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">{children}</div>
      </main>

      {/* Footer con buen espaciado */}
      <Footer />
    </div>
  );
};
