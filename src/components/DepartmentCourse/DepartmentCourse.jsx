import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgramCard from "../ProgramCard/ProgramCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DepartmentCourse = () => {
    const { category } = useParams();
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_URL}/course/${category}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCourses(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, [category]);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl capitalize mb-3">
                        {category.replace(/-/g, ' ')} Courses
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        Explore our comprehensive curriculum designed for modern learners
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    Error loading courses: {error}. Please try again later.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <Skeleton height={180} />
                                <div className="p-6">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : courses.length > 0 ? (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course) => (
                            <ProgramCard key={course._id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
                        <p className="mt-1 text-gray-500">There are currently no courses available in this department.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentCourse;