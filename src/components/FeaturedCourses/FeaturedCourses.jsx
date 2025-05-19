import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './FeaturedCourses.css'

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Dynamic based on screen size

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();

    // Set initial visible count based on screen width
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCount(1);
    } else if ( width < 1024) {  // Changed to 1024 to better target tablets
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
    // Reset startIndex when screen size changes to avoid out of bounds
    setStartIndex(0);
  };

  const handlePrev = () => {
    if (startIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (startIndex < courses.length - visibleCount && !isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => 
        Math.min(prevIndex + 1, courses.length - visibleCount)
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const visibleCourses = courses.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <button className="btn btn-outline border-gray-600 px-6 sm:px-8 md:px-10 rounded-full flex mx-auto cursor-default relative overflow-hidden h-10 sm:h-12 transition-all duration-700 ease-in-out w-48 sm:w-60">
          Top Class Courses
        </button>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-6 sm:mt-8">
          Explore Featured Courses
        </h2>
      </div>

      {/* Navigation Buttons and Courses */}
      <div className=" mx-auto mt-8 sm:mt-10 md:mt-12">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0 || isTransitioning}
            className="btn btn-circle btn-outline hidden sm:flex"
            aria-label="Previous courses"
          >
            <FaChevronLeft />
          </button>

          <div className="flex-1 overflow-hidden px-2 sm:px-4">
            <div className={`flex justify-center gap-4 transition-transform duration-300 ease-in-out`}>
              {visibleCourses.map((course) => (
                <div 
                  key={course._id} 
                  className={`flex-shrink-0 ${
                    visibleCount === 1 ? 'w-full' : 
                    visibleCount === 2 ? 'w-1/2' : 
                    'w-1/3'
                  } px-2`}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= courses.length || isTransitioning}
            className="btn btn-circle btn-outline hidden sm:flex"
            aria-label="Next courses"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center gap-4 mt-4 sm:hidden">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0 || isTransitioning}
            className="btn btn-circle btn-outline"
            aria-label="Previous courses"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= courses.length || isTransitioning}
            className="btn btn-circle btn-outline"
            aria-label="Next courses"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;