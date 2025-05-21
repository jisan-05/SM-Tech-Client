import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBirthdayCake,
  FaIdCard,
  FaBook,
  FaCalendarAlt,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

const SearchForStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!studentId.trim()) {
      setError("Please enter a student ID");
      return;
    }

    setIsLoading(true);
    setError("");
    setStudent(null);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/stu/${studentId}`
      );
      setStudent(data);
      setStudentId("");
    } catch (err) {
      setError("Student not found. Please enter a valid student ID");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Search Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Student Search Portal
          </h1>
          <p className="text-lg text-gray-600">
            Enter student ID to view details
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-6 max-w-md mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Student ID"
                className="flex-grow px-5 py-3 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-medium flex items-center transition-colors"
              >
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    <FaSearch className="mr-2" />
                    Search
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Results Area */}
        <div className="mt-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
              <p className="mt-4 text-gray-600">Searching for student...</p>
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border-l-4 border-red-500 p-4"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </motion.div>
          ) : student ? (
            <StudentCard student={student} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Student Card Component (same as before with minor adjustments)
const StudentCard = ({ student }) => {
  const {
    studentId,
    studentName,
    fatherName,
    motherName,
    date_of_birth,
    nid_num,
    course_name,
    enrollment_date,
    course_complete_date,
    course_status,
    durationInMonths,
    student_url,
  } = student;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl w-full mx-auto"
    >
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full mx-auto mt-8 "
        >
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            {/* Student Header with Image */}
            <div className="relative h-48 mt-20 bg-indigo-700 flex items-end justify-center">
              {student_url ? (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                >
                  <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                    <img
                      src={student_url}
                      alt={studentName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              ) : (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 h-32 w-32 rounded-full border-4 border-white bg-indigo-500 flex items-center justify-center shadow-lg">
                  <FaUserGraduate className="text-white text-5xl" />
                </div>
              )}

              <div className="w-full pt-20 pb-6 text-center">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-white"
                >
                  {studentName}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-indigo-100"
                >
                  Student ID: {studentId}
                </motion.p>
              </div>
            </div>

            {/* Student Details */}
            <div className="bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaUserGraduate className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Father's Name
                      </h3>
                      <p className="text-gray-800 font-medium">{fatherName}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaUserGraduate className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Mother's Name
                      </h3>
                      <p className="text-gray-800 font-medium">{motherName}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaBirthdayCake className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Date of Birth
                      </h3>
                      <p className="text-gray-800 font-medium">
                        {new Date(date_of_birth).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaIdCard className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        NID/Birth Certificate
                      </h3>
                      <p className="text-gray-800 font-medium">{nid_num}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaBook className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Course Name
                      </h3>
                      <p className="text-gray-800 font-medium">{course_name}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaCalendarAlt className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Enrollment Date
                      </h3>
                      <p className="text-gray-800 font-medium">
                        {new Date(enrollment_date).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaCalendarAlt className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Completion Date
                      </h3>
                      <p className="text-gray-800 font-medium">
                        {new Date(course_complete_date).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <FaCheckCircle className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Course Status
                      </h3>
                      <p
                        className={`font-medium ${
                          course_status === "completed"
                            ? "text-green-600"
                            : course_status === "ongoing"
                            ? "text-amber-600"
                            : "text-blue-600"
                        }`}
                      >
                        {course_status.charAt(0).toUpperCase() +
                          course_status.slice(1)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Duration Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-full inline-block"
              >
                <span className="font-medium">
                  Course Duration: {durationInMonths}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchForStudent;
