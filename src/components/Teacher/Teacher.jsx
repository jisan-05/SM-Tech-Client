import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teacher = () => {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/teachers`
                );
                setTeachers(res.data);
            } catch (err) {
                console.error("Failed to fetch teachers", err);
            }
        };
        fetchTeachers();
    }, []);

    // Only show first 3 teachers
    const displayedTeachers = teachers.slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="text-center mb-12">
                <h3 className="text-sm font-medium text-[#07a698] uppercase tracking-wider">
                    Our Instructors
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Meet Our Expert Instructors
                </h2>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                    Learn from industry professionals with real-world
                    experience.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {displayedTeachers.map((teacher, index) => (
                    <TeacherCard key={index} teacher={teacher} />
                ))}
            </div>

            {teachers.length > 3 && (
                <div className="text-center mt-12">
                    <Link to="/allTeacher">
                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#07a698] hover:bg-[#058578] transition-colors duration-200">
                            See All Instructors
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Teacher;
