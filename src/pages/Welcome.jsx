import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="bg-gradient-to-b from-[#101212] to-[#08201D] h-[calc(100vh-5rem)] text-white">

      {/* Navbar remains outside this component if you already have it globally */}

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <img
            src="src/logo/FARMERS_HOME__4_-removebg-preview (1).png"
            alt="Farmers Home"
            className="mx-auto w-100 h-20 mb-6"
          />

          <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
            Welcome to Farmers Home
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Your agricultural companion for better farming
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/farmer-login"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg transition duration-200"
            >
              Continue as Farmer
            </Link>

            <Link
              to="/admin-login"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-lg transition duration-200"
            >
              Continue as Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
