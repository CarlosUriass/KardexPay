import { HiOutlineClipboardList } from "react-icons/hi";

function PendientesCard() {
  return (
    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
      <div>
        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
          Trámites pendientes
        </h6>
        <span className="text-xl font-semibold">250</span>
        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
          +4.4%
        </span>
      </div>
      <div>
        <HiOutlineClipboardList className="w-12 h-12 text-gray-300" />
      </div>
    </div>
  );
}

export default PendientesCard;
