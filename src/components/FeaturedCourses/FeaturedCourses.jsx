import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/course`);
      setCourses(data);
    };
    getData();
  }, []);
  console.log(courses);
  return (
    <div className="py-30">
      <div>
        {/* Default Button Was like this */}
        {/* <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto cursor-default ">
          Top Class Courses
        </button> */}

        <button
          className={`btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto cursor-default relative overflow-hidden h-12 transition-all duration-700 ease-in-out ${
            hovered ? "w-[90%]" : "w-60"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span
            className={`absolute transition-all duration-500 ease-in-out whitespace-nowrap ${
              hovered
                ? "-translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            Top Class Courses
          </span>
          <span
            className={`absolute transition-all duration-500 ease-in-out whitespace-nowrap ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Which Are Design Only For You
          </span>
        </button>

        <p className="text-5xl font-semibold text-center mt-8">
          Explore Featured Courses
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-20">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
