import FormularioTramite from "./FormularioTramite";
import ResumenPago from "./ResumenPago";

function TramitesSection() {
  return (
    <div
      className="h-[90vh] w-full bg-white relative flex
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      <div className="flex-1 p-6">
        <FormularioTramite />
      </div>
      <ResumenPago />
    </div>
  );
}

export default TramitesSection;
