import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DepartmentCard from "../../components/DepartmentCard/DepartmentCard";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Departments = () => {
    const [department, setDepartment] = useState([]);
    const [loading, setLoading] = useState(true); // <- new loading state

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/department`)
            .then((res) => {
                setDepartment(res.data);
                setLoading(false); // done loading
            })
            .catch((err) => {
                console.error("Failed to load departments", err);
                setLoading(false); // still stop loading on error
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Departments
                </h2>
                <div className="md:w-96 w-[80%] h-1 bg-teal-500 mx-auto"></div>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our specialized academic departments offering
                    cutting-edge education and research opportunities.
                </p>
            </div>
            {/* Grid For Department  */}
            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <LoadingSpinner></LoadingSpinner>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {department.map((departmentData) => (
                        <DepartmentCard
                            key={departmentData._id}
                            departmentData={departmentData}
                        />
                    ))}
                </div>
            )}

            {/* View All Button */}
            <div className="text-center mt-12">
                <Link
                    to="/programs"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-300"
                >
                    See Our Programs
                    <svg
                        className="ml-3 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Departments;
