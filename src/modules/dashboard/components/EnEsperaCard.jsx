import { HiOutlineClock } from "react-icons/hi";

function EnEsperaCard() {
  return (
    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
      <div>
        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
          Trámites en Espera
        </h6>
        <span className="text-xl font-semibold">45</span>{" "}
        {/* Aquí puedes cambiar el número */}
        <span className="inline-block px-2 py-px ml-2 text-xs text-yellow-500 bg-yellow-100 rounded-md">
          -1.2%
        </span>
      </div>
      <div>
        <HiOutlineClock className="w-12 h-12 text-yellow-500" />
      </div>
    </div>
  );
}

export default EnEsperaCard;
