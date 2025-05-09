import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
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
        <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto ">
          Top Class Courses
        </button>
        <p className="text-5xl font-semibold text-center mt-8">
          Explore Featured Courses
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-20">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
