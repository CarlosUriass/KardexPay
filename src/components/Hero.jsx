import { MdExplore } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  return (
    <div
      className="h-[90vh] w-full bg-white relative 
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      <div className=" ml-[120px] flex items-center justify-between">
        {/* Texto y Botón */}
        <div className="max-w-xl">
          <h1 className="text-black font-bold text-5xl font-[Montserrat]">
            Agiliza tus <br />
            <span className="text-blue-600">trámites</span>
          </h1>

          <h2 className="text-gray-800 font-medium leading-relaxed pt-8">
            Agiliza tus trámites académicos de manera rápida y eficiente. <br />
            Realiza solicitudes de constancias, kárdex y más, todo en un par de
            clics.
          </h2>

          <button className="bg-blue-400 w-60 h-16 text-white text-xl font-bold cursor-pointer mt-8 rounded-l">
            Tramita ahora
          </button>

          <div className="pt-10">
            <p className="font-extralight text-sm underline cursor-pointer">
              <MdExplore className="inline-block mr-2" />
              Conoce los trámites que puedes realizar
            </p>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="w-[600px] h-[600px]">
          <DotLottieReact src="src/assets/HeroAnimation.lottie" loop autoplay />
        </div>
      </div>
    </div>
  );
}

export default Hero;
