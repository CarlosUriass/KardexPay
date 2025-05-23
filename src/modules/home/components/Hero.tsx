import { motion } from "framer-motion";
import { Lootie } from "@/components/animations/lootie";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">
              Agiliza tus tramites escolares
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sabemos que como estudiante el tiempo es oro. Por eso creamos una
            plataforma que te permite gestionar tus trámites de forma rápida,
            sencilla y sin filas.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href=""
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Realiza un tramite ahora <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative h-120 w-120">
            <Lootie ruta={"public/animations/HeroAnimation.lottie"}></Lootie>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
