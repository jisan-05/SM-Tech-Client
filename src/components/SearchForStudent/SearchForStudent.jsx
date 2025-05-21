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
            <div className="flex shadow-md rounded-lg overflow-hidden border border-gray-200">
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Student ID"
                className="flex-grow px-5 py-3 focus:outline-none text-sm text-gray-700"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#07a698] hover:bg-[#059a8e] text-white px-6 py-3 font-medium flex items-center transition-colors"
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

        {/* Results */}
        <div className="mt-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#07a698]"></div>
              <p className="mt-4 text-gray-600">Searching for student...</p>
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded"
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
      <div className="bg-gradient-to-br from-[#07a698] to-[#05c2b5] rounded-3xl overflow-hidden shadow-2xl">
        {/* Profile Image */}
        <div className="relative h-64 bg-[#059a8e] flex items-center justify-center">
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
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 h-32 w-32 rounded-full border-4 border-white bg-[#07a698] flex items-center justify-center shadow-lg">
              <FaUserGraduate className="text-white text-5xl" />
            </div>
          )}

          <div className="w-full pt-52 pb-6 text-center">
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
              className="text-white font-medium "
            >
              Student ID: {studentId}
            </motion.p>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaUserGraduate className="text-[#07a698] text-xl" />,
                  label: "Father's Name",
                  value: fatherName,
                },
                {
                  icon: <FaUserGraduate className="text-[#07a698] text-xl" />,
                  label: "Mother's Name",
                  value: motherName,
                },
                {
                  icon: <FaBirthdayCake className="text-[#07a698] text-xl" />,
                  label: "Date of Birth",
                  value: new Date(date_of_birth).toLocaleDateString(),
                },
                {
                  icon: <FaIdCard className="text-[#07a698] text-xl" />,
                  label: "NID/Birth Certificate",
                  value: nid_num,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-[#d3f4ef] p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      {item.label}
                    </h3>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaBook className="text-[#07a698] text-xl" />,
                  label: "Course Name",
                  value: course_name,
                },
                {
                  icon: <FaCalendarAlt className="text-[#07a698] text-xl" />,
                  label: "Enrollment Date",
                  value: new Date(enrollment_date).toLocaleDateString(),
                },
                {
                  icon: <FaCalendarAlt className="text-[#07a698] text-xl" />,
                  label: "Completion Date",
                  value: new Date(course_complete_date).toLocaleDateString(),
                },
                {
                  icon: <FaCheckCircle className="text-[#07a698] text-xl" />,
                  label: "Course Status",
                  value: (
                    <span
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
                    </span>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-[#d3f4ef] p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      {item.label}
                    </h3>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Duration Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 bg-gradient-to-r from-[#07a698] to-[#05c2b5] text-white py-2 px-4 rounded-full inline-block text-sm font-medium"
          >
            Course Duration: {durationInMonths}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchForStudent;
