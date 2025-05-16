import React, { useContext } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import AuthContext from "../../providers/AuthContext";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const MainLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div>
            <Navbar />
            <div className=" min-h-[calc(100vh-80px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
