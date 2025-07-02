import React, { useState } from "react";
import {
  BellIcon,
  EnvelopeIcon,
  UserCircleIcon,
  EllipsisVerticalIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function DashboardNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="src/logo/FARMERS_HOME__4_-removebg-preview (1).png"
            alt="Farmers Home"
            className="h-16 w-auto"
          />
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Messages */}
          <Link to="/messages" className="relative">
            <EnvelopeIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs rounded-full px-1">
              4
            </span>
          </Link>

          {/* Notifications */}
          <Link to="/notifications" className="relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs rounded-full px-1">
              17
            </span>
          </Link>

          {/* Profile */}
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="relative"
          >
            <UserCircleIcon className="w-7 h-7" />
          </button>

          {/* ✅ Logout - right of the icons */}
          <Link
            to="/"
            className="flex items-center space-x-1 hover:underline"
            title="Logout"
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            <span>Logout</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <EllipsisVerticalIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showMobileMenu && (
        <div className="px-6 pb-3 space-y-3 md:hidden bg-green-700">
          <Link to="/messages" className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5" />
            <span>Messages (4)</span>
          </Link>
          <Link to="/notifications" className="flex items-center space-x-2">
            <BellIcon className="w-5 h-5" />
            <span>Notifications (17)</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2">
            <UserCircleIcon className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
