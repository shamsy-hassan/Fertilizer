import { Link } from 'react-router-dom';
import {
  FaUsers, FaBook, FaSeedling,
  FaClipboardCheck, FaMoneyBillWave,
  FaTruck, FaHome
} from 'react-icons/fa';

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-[20rem] bg-white p-4 shadow-xl flex flex-col pt-20">
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
      </ul>
    </aside>
  );
}
