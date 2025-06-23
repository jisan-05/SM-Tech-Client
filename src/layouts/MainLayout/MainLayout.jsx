import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import AuthContext from "../../providers/AuthContext";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  // if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="shadow-sm">
        <div className="max-w-[92%] mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <div className="bg-[#142E2C]">
        <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1500px] mx-auto pb-20 pt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
