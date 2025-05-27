import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FarmerLogin from "./pages/FarmerLogin";
import AdminLogin from "./pages/AdminLogin";

// Dashboards
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Farmer Nested Pages
import AgroClimateAdvice from "./pages/farmer/AgroClimateAdvice";
import EcommerceStore from "./pages/farmer/EcommerceStore";
import SaccoPlatform from "./pages/farmer/SaccoPlatform";
import MyOrders from "./pages/farmer/MyOrders";
import SkillCenter from "./pages/farmer/SkillCenter";

// Admin Nested Pages
import AdminHome from "./pages/admin/AdminHome";
import FarmerManagement from "./pages/admin/FarmerManagement";
import SkillsCRUD from "./pages/admin/SkillsCRUD";
import ProductsCRUD from "./pages/admin/ProductsCRUD";
import OrdersOverview from "./pages/admin/OrdersOverview";
import LoanRequests from "./pages/admin/LoanRequests";
import DeliveryCoordination from "./pages/admin/DeliveryCoordination";

import "./index.css";

// Layout with Navbar and conditional Footer
function MainLayout() {
  const location = useLocation();
  const isDashboard =
    location.pathname.startsWith("/admin-dashboard") ||
    location.pathname.startsWith("/farmer-dashboard");

  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content min-h-screen pt-20">
        <Outlet />
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout with Navbar + Footer (conditionally hidden on dashboards) */}
        <Route element={<MainLayout />}>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/farmer-login" element={<FarmerLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* ✅ Farmer Dashboard + Nested Routes */}
          <Route path="/farmer-dashboard/*" element={<FarmerDashboard />}>
            <Route index element={<AgroClimateAdvice />} />
            <Route path="climate" element={<AgroClimateAdvice />} />
            <Route path="skills" element={<SkillCenter />} />
            <Route path="store" element={<EcommerceStore />} />
            <Route path="sacco" element={<SaccoPlatform />} />
            <Route path="orders" element={<MyOrders />} />
          </Route>

          {/* ✅ Admin Dashboard + Nested Routes */}
          <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="farmers" element={<FarmerManagement />} />
            <Route path="skills" element={<SkillsCRUD />} />
            <Route path="products" element={<ProductsCRUD />} />
            <Route path="orders" element={<OrdersOverview />} />
            <Route path="loans" element={<LoanRequests />} />
            <Route path="delivery" element={<DeliveryCoordination />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
