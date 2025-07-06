import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-green-200 via-white to-green-50 flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 items-center gap-16">
        
        {/* Left - Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 leading-tight">
            Welcome to <span className="text-green-600">Farmers Home</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-xl">
            Your agricultural companion for better farming. Discover tools, resources, and support designed to empower every farmer and administrator in agriculture.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              to="/farmer-login"
              className="bg-green-500 hover:bg-green-600 transition-all text-white text-sm sm:text-base font-semibold rounded-full px-6 py-3 shadow-md"
            >
              Continue as Farmer
            </Link>
            <Link
              to="/admin-login"
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm sm:text-base font-semibold rounded-full px-6 py-3 shadow-md"
            >
              Continue as Admin
            </Link>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="w-full h-full">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/istockphoto-1754629539-612x612.webp"
              alt="Farmer on phone"
              className="w-full h-auto object-contain bg-white"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
