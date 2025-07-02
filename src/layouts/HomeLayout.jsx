import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
