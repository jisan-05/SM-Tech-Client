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
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{course_title}</h1>

//       <div className="flex items-center gap-4 mb-6">
//         <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//           {category}
//         </span>
//         <span className="text-gray-600">Instructor: {course_instructor}</span>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Course Details</h2>
//         <p className="text-gray-700 mb-6">{course_description}</p>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-sm text-gray-500">Duration</h3>
//             <p className="font-medium">{course_duration}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-sm text-gray-500">Price</h3>
//             <p className="font-medium">${course_price}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-sm text-gray-500">Enrollment Deadline</h3>
//             <p className="font-medium">
//               {new Date(enrollment_deadline).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       </div>

//       <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
//         Enroll Now
//       </button>
//     </div>
//   );
// };

// export default CourseDetails;

// With Animation
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
        learn_bio,
        whatYoullLearn = [],
        dataToSend,
    } = course;

    console.log(course_title);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div
                className="relative bg-gradient-to-r from-[#01998c] to-[#07a698]
 rounded-3xl p-8 mb-10 overflow-hidden"
            >
                <div className="relative z-10 text-white">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                        {category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        {course_title}
                    </h1>
                    <p className="text-xl text-white/90 mb-6 max-w-2xl">
                        {course_description}
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center">
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>By : {course_instructor}</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center">
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{course_duration} month</span>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>

            {/* Course Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
                {/* Main Content */}
                <div className="md:col-span-2">
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            What You'll Learn
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>{learn_bio}</p>
                            {whatYoullLearn.length > 0 ? (
                                <ul className="space-y-3 mt-4">
                                    {whatYoullLearn.map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <svg
                                                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Master all core concepts through
                                            practical examples
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Build portfolio-worthy projects
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Get personalized feedback from
                                            instructors
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Access to exclusive community and
                                            resources
                                        </span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#07a698] rounded-full"></span>
                            Course Curriculum
                        </h2>

                        <div className="space-y-3">
                            {Array.isArray(dataToSend) &&
                            dataToSend.length > 0 ? (
                                dataToSend.map((weekItem, index) => (
                                    <div
                                        key={index}
                                        className="p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center justify-center bg-[#07a698]/10 text-[#07a698] w-8 h-8 rounded-lg font-bold text-sm flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    {weekItem.title ||
                                                        "Untitled Module"}
                                                </h3>
                                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mt-1">
                                                    <span className="flex items-center"></span>
                                                    <span className="flex items-center"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-6">
                                    <p className="text-gray-400">
                                        No curriculum data available.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-xl p-6 ">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-sm text-gray-500">
                                    Total Price
                                </span>
                                <p className="text-3xl font-bold text-gray-800">
                                    {course_price}
                                    <small>tk</small>
                                </p>
                            </div>
                            {course_price > 99 && (
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Limited Time Offer
                                </span>
                            )}
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    Enrollment Deadline
                                </span>
                                <span className="font-medium">
                                    {new Date(
                                        enrollment_deadline
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Duration</span>
                                <span className="font-medium">
                                    {course_duration} month
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">
                                    Instructor
                                </span>
                                <span className="font-medium">
                                    {course_instructor}
                                </span>
                            </div>
                        </div>

                        <button
                            className="w-full bg-gradient-to-r from-[#07a698] to-[#07a698] hover:from-[#01998c] hover:to-[#01998c]
 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            Enroll Now
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="font-bold text-lg mb-4">
                            What's Included
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Certificate of Completion</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>One to One Session</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Note</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Q&A Support</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Support Session</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
