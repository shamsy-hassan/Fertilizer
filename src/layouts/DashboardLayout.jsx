import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import AdminSidebar from "../components/AdminSidebar";
import FarmerSidebar from "../components/FarmerSidebar";

export default function DashboardLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin-dashboard");

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50 pt-20">
  

      {/* Shared dashboard navbar */}
      <DashboardNavbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Conditional Sidebar */}
        <div className="w-[20rem] bg-white shadow-lg overflow-y-auto">
          {isAdmin ? <AdminSidebar /> : <FarmerSidebar />}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
