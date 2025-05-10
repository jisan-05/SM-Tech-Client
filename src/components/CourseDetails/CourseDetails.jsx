// import React from "react";
// import { useLoaderData } from "react-router-dom";

// const CourseDetails = () => {
//   const course = useLoaderData();
//   const {
//     course_title,
//     course_instructor,
//     enrollment_deadline,
//     category,
//     course_price,
//     course_duration,
//     course_description,
//   } = course;
//   return (
//     <div>
//       <h1>Details page</h1>
//     </div>
//   );
// };

// export default CourseDetails;

import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  const {
    course_title,
    course_instructor,
    enrollment_deadline,
    category,
    course_price,
    course_duration,
    course_description,
  } = course;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{course_title}</h1>

      <div className="flex items-center gap-4 mb-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {category}
        </span>
        <span className="text-gray-600">Instructor: {course_instructor}</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Course Details</h2>
        <p className="text-gray-700 mb-6">{course_description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Duration</h3>
            <p className="font-medium">{course_duration}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Price</h3>
            <p className="font-medium">${course_price}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Enrollment Deadline</h3>
            <p className="font-medium">
              {new Date(enrollment_deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
