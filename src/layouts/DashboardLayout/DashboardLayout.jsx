import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        {/* Add <Outlet /> here if using react-router-dom */}
        <h1 className="text-2xl font-bold">Welcome Admin !</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
