import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({departmentData}) => {
  const {title,description,photoURL} = departmentData || []
  return (
    <div>
      {/* Computer Science Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 min-h-[430px]">
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={photoURL}
                            alt="Computer Science"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>
                    <div className="p-6 ">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {
                              description
                            }
                        </p>
                        <button>
                          <Link
                            to="/programs"
                            className="inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors duration-300"
                        >
                            See Courses
                        </Link>
                        </button>
                    </div>
                </div>
    </div>
  );
};

export default DepartmentCard;