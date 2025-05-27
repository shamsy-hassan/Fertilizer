// src/layouts/WelcomeLayout.jsx
import FarmerSidebar from "../components/FarmerSidebar"; // Adjust path as needed

export default function WelcomeLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <FarmerSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
