import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaCloudSunRain,
  FaShoppingCart, FaHandHoldingUsd,
  FaClipboardList, FaHome
} from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';

export default function FarmerSidebar() {
  return (
    <aside className="h-screen w-[20rem] bg-gradient-to-r from-green-200 via-white to-green-50 p-4 shadow-xl flex flex-col pt-10">
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
          <Link to="/farmer-dashboard/my-loans" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FcMoneyTransfer className="text-xl" />
            <span className="text-sm">My Loans</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/orders" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardList className="text-xl" />
            <span className="text-sm">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/mycrops" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardList className="text-xl" />
            <span className="text-sm">MyCrops</span>
          </Link>
        </li>
        <li>
          <Link to="/farmer-dashboard/hire" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardList className="text-xl" />
            <span className="text-sm">Hire</span>
          </Link>
        </li>
         <li>
          <Link to="/farmer-dashboard/mymarket" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardList className="text-xl" />
            <span className="text-sm">MyMarket</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
