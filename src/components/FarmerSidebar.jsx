import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaCloudSunRain,
  FaShoppingCart, FaHandHoldingUsd,
  FaClipboardList, FaHome
} from 'react-icons/fa';

export default function FarmerSidebar() {
  return (
    <aside className="h-screen w-[20rem] bg-white p-4 shadow-xl flex flex-col pt-10">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-blue-gray-900">Farmer Portal</h3>
      </div>
      <ul className="flex flex-col gap-4 w-full">
        <li>
          <Link to="/farmer-dashboard" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaHome className="text-xl" />
            <span className="text-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/skills" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaGraduationCap className="text-xl" />
            <span className="text-sm">Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/climate" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaCloudSunRain className="text-xl" />
            <span className="text-sm">Climate</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/store" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaShoppingCart className="text-xl" />
            <span className="text-sm">Store</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/sacco" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaHandHoldingUsd className="text-xl" />
            <span className="text-sm">SACCO</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/orders" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardList className="text-xl" />
            <span className="text-sm">Orders</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
