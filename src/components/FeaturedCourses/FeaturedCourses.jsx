import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './FeaturedCourses.css'

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleCount = 3;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();
  }, []);

  const handlePrev = () => {
    if (startIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setTimeout(() => setIsTransitioning(false), 300); // Match this with your CSS transition duration
    }
  };

  const handleNext = () => {
    if (startIndex < courses.length - visibleCount && !isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => 
        Math.min(prevIndex + 1, courses.length - visibleCount)
      );
      setTimeout(() => setIsTransitioning(false), 300); // Match this with your CSS transition duration
    }
  };

  const visibleCourses = courses.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="py-30">
      <div>
        <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto cursor-default relative overflow-hidden h-12 transition-all duration-700 ease-in-out w-60">
          Top Class Courses
        </button>

        <p className="text-5xl font-semibold text-center mt-8">
          Explore Featured Courses
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0 || isTransitioning}
          className="btn btn-circle btn-outline"
        >
          <FaChevronLeft />
        </button>

        <div className="flex overflow-hidden w-full ">
          <div className={`flex gap-4 transition-transform duration-300 ease-in-out`}>
            {visibleCourses.map((course) => (
              <div key={course._id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= courses.length || isTransitioning}
          className="btn btn-circle btn-outline"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;