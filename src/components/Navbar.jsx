import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-25 flex items-center justify-between">
        
        {/* Logo (image + text optional) */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="src/logo/FARMERS_HOME__4_-removebg-preview (1).png"
            alt="Farmers Home"
            className="h-20 w-auto"
          />
          {/* Optional: Add site name next to logo */}
          {/* <span className="font-semibold text-xl">Farmers Home</span> */}
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaEnvelope /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
