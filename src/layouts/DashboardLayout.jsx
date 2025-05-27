import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import FarmerSidebar from "../components/FarmerSidebar";

export default function DashboardLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin-dashboard");

  return (
    <div className="flex h-[calc(100vh-5rem)]">
      {/* Sidebar */}
      <div className="w-[20rem] bg-white shadow-lg">
        {isAdmin ? <AdminSidebar /> : <FarmerSidebar />}
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
