import { Routes, Route } from "react-router-dom";
import FarmerSidebar from "../../components/FarmerSidebar";
import FarmerHome from "./FarmerHome";
import AgroClimateAdvice from "./AgroClimateAdvice";
import EcommerceStore from "./EcommerceStore";
import SaccoPlatform from "./SaccoPlatform";
import MyOrders from "./MyOrders";
import SkillCenter from "./SkillCenter";
import MyLoans from "./MyLoans";
import CropPlanner from "./CropPlanner";
import FarmProfessionals from "./FarmProfessionals";
import MyMarket from "./MyMarket";



export default function FarmerDashboard() {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-20 left-0 w-[20rem] h-[calc(100vh-5rem)] z-10">
        <FarmerSidebar />
      </div>

      {/* Main content area shifted right by 20rem */}
      <div className="ml-[20rem] flex-1 h-[calc(100vh-5rem)] overflow-y-auto p-4">
        <Routes>
          <Route path="/" element={<FarmerHome />} />
          <Route path="climate" element={<AgroClimateAdvice />} />
          <Route path="skills" element={<SkillCenter />} />
          <Route path="store" element={<EcommerceStore />} />
          <Route path="sacco" element={<SaccoPlatform />} />
          <Route path="orders" element={<MyOrders />} />
           <Route path="my-loans" element={<MyLoans />} />
            <Route path="mycrops" element={<CropPlanner />} />
            <Route path="hire" element={<FarmProfessionals />} />
            <Route path="mymarket" element={<MyMarket />} />
        </Routes>
      </div>
    </div>
  );
}
