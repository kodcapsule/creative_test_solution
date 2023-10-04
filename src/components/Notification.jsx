import { FaRegBell } from "react-icons/fa6";

function Notification({}) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-slate-200 rounded-lg hover:bg-slate-400 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <FaRegBell />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-3 h-3  p-2 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        9+
      </div>
    </button>
  );
}

export default Notification;
