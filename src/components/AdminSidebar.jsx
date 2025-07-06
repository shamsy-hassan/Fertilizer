import { Link } from 'react-router-dom';
import {
FaUsers, FaBook, FaSeedling,FaHandHoldingUsd,
  FaClipboardCheck, FaMoneyBillWave,FaBusinessTime,FaBroadcastTower,
  FaTruck, FaHome
} from 'react-icons/fa';
import { FaArrowTrendUp , FaPeopleGroup } from 'react-icons/fa6';

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-[20rem] bg-gradient-to-r from-green-200 via-white to-green-50 p-4 shadow-xl flex flex-col pt-20">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-blue-gray-900">Admin Portal</h3>
      </div>
      <ul className="flex flex-col gap-4 w-full">
        <li>
          <Link to="/admin-dashboard" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaHome className="text-xl" />
            <span className="text-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/farmers" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaUsers className="text-xl" />
            <span className="text-sm">Farmers</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/skills" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaBook className="text-xl" />
            <span className="text-sm">Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/products" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaSeedling className="text-xl" />
            <span className="text-sm">Products</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/sacco" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaPeopleGroup  className="text-xl" />
            <span className="text-sm">Saccos</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/orders" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaClipboardCheck className="text-xl" />
            <span className="text-sm">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/loans" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaMoneyBillWave className="text-xl" />
            <span className="text-sm">Loans</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/delivery" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaTruck className="text-xl" />
            <span className="text-sm">Delivery</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/broadcast" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaBroadcastTower className="text-xl" />
            <span className="text-sm">Broadcast</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/croptrend" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaArrowTrendUp className="text-xl" />
            <span className="text-sm">Croptrend</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/market" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100">
            <FaBusinessTime className="text-xl" />
            <span className="text-sm">Market</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
