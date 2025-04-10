import { HiOutlineDocumentText } from "react-icons/hi";

function TotalesCard() {
  return (
    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
      <div>
        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
          Trámites Totales
        </h6>
        <span className="text-xl font-semibold">500</span>{" "}
        {/* Aquí puedes cambiar el número a lo que necesites */}
        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
          +5.6% {/* También puedes actualizar el porcentaje si lo necesitas */}
        </span>
      </div>
      <div>
        <HiOutlineDocumentText className="w-12 h-12 text-gray-300" />
      </div>
    </div>
  );
}

export default TotalesCard;
