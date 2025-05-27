import { Routes, Route } from "react-router-dom";
import FarmerSidebar from "../../components/FarmerSidebar";
import AgroClimateAdvice from './AgroClimateAdvice';
import EcommerceStore from './EcommerceStore';
import SaccoPlatform from "./SaccoPlatform";
import MyOrders from "./MyOrders";
import SkillCenter from "./SkillCenter";

export default function FarmerDashboard() {
  return (
    <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
      <div className="w-64 fixed top-20 bottom-0 left-0 bg-white border-r z-10">
        <FarmerSidebar />
      </div>

      <div className="ml-64 flex-1 overflow-y-auto p-4">
        <Routes>
          <Route path="/" element={<AgroClimateAdvice />} />
          <Route path="climate" element={<AgroClimateAdvice />} />
          <Route path="skills" element={<SkillCenter />} />
          <Route path="store" element={<EcommerceStore />} />
          <Route path="sacco" element={<SaccoPlatform />} />
          <Route path="orders" element={<MyOrders />} />
        </Routes>
      </div>
    </div>
  );
}
