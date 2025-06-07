import React from "react";
import { Link } from "react-router-dom";

const DepartmentCard = ({ departmentData }) => {
    const { title, description, photoURL,category } = departmentData || [];

    return (
        <div className="h-full">
            {" "}
            {/* Add h-full to the root div */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                    {" "}
                    {/* Add flex-shrink-0 */}
                    <img
                        src={photoURL}
                        alt={title}
                        loading="lazy"

                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    {" "}
                    {/* Add flex-grow */}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                        {" "}
                        {/* Add flex-grow to description */}
                        {description}
                    </p>
                    <button>
                        <Link
                            to={`/departmentCourse/${category}`}
                            className="group inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors duration-300"
                        >
                            See Courses
                            <span className="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepartmentCard;
