import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ActionButton from "./buttons/ActionButton";

function Hero() {
  return (
    <div className="h-[90vh] w-full text-[#706cec] flex items-center px-8 md:px-24 relative overflow-hidden">
      {/* Fondo con blur dots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-32 w-92 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-50 w-56 h-56 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-2xl relative z-10">
        <h1 className="font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-lg">
          Agiliza tus trámites
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium text-black/90">
          Gestiona tus pagos escolares de forma rápida, segura y desde cualquier
          lugar.
        </p>

        <ActionButton
          buttonText={"Realizar un tramite"}
          route={"/tramites"}
        ></ActionButton>
      </div>

      <div className="w-[400px] h-[600px] ml-25 relative z-10">
        <DotLottieReact
          src="src/assets/animations/HeroAnimation.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default Hero;
