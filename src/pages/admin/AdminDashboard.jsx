import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import AdminHome from './AdminHome';
import FarmerManagement from './FarmerManagement';
import SkillsCRUD from './SkillsCRUD';
import ProductsCRUD from './ProductsCRUD';
import OrdersOverview from './OrdersOverview';
import LoanRequests from './LoanRequests';
import DeliveryCoordination from './DeliveryCoordination';
import BroadcastCenter from './BroadcastCenter';
import CropTrendAnalysis from './CropTrendAnalysis';
import MarketFinder from './MarketFinder';
import SaccoManagement from './SaccoManagement';

export default function AdminDashboard() {
  return (
    <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
      <div className="w-64 fixed top-20 bottom-0 left-0 bg-white border-r z-10">
        <AdminSidebar />
      </div>

      <div className="ml-64 flex-1 overflow-y-auto p-4">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/farmers" element={<FarmerManagement />} />
          <Route path="/skills" element={<SkillsCRUD />} />
          <Route path="/products" element={<ProductsCRUD />} />
          <Route path="/orders" element={<OrdersOverview />} />
          <Route path="/loans" element={<LoanRequests />} />
          <Route path="/delivery" element={<DeliveryCoordination />} />
          <Route path='/broadcast' element = {<BroadcastCenter/>}/>
          <Route path='croptrend' element = {<CropTrendAnalysis/>}/>
          <Route path='market' element = {<MarketFinder/>}/>
          <Route path='sacco' element = {<SaccoManagement/>}/>
        </Routes>
      </div>
    </div>
  );
}
