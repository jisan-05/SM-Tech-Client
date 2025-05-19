import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateStudent = () => {
  const [duration, setDuration] = useState("");

  const studentData = useLoaderData();
  const {
    _id,
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
  } = studentData;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const studentId = form.student_id.value;
    const studentName = form.student_name.value;
    const fatherName = form.father_name.value;
    const motherName = form.mother_name.value;
    const date_of_birth = form.date_of_birth.value;
    const nid_num = form.nid_num.value;
    const course_name = form.course_name.value;
    const enrollment_date = form.enrollment_date.value;
    const course_complete_date = form.course_complete_date.value;
    const course_status = form.course_status.value;

    // Calculate course duration
    const durationInMonths = calculateDurationInMonths(
      enrollment_date,
      course_complete_date
    );
    setDuration(durationInMonths);

    const studentData = {
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
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/student/${_id}`,
        studentData
      );
      toast.success("Update Student Info Successfully");
      console.log(data);
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Cant update student info now!Please Try again");
    }
  };

  const calculateDurationInMonths = (start, end) => {
    if (!start || !end) return "";
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffYears = endDate.getFullYear() - startDate.getFullYear();
    const diffMonths = endDate.getMonth() - startDate.getMonth();
    const totalMonths = diffYears * 12 + diffMonths;
    return `${totalMonths} month(s)`;
  };

  const handleDateChange = (e) => {
    const form = e.target.form;
    const start = form.enrollment_date.value;
    const end = form.course_complete_date.value;
    setDuration(calculateDurationInMonths(start, end));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-amber-100 via-teal-100 to-amber-50 flex items-center justify-center p-6 rounded-2xl">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-teal-200">
        <h2 className="text-4xl font-bold text-teal-800 mb-10 text-center tracking-tight">
          🧑‍🎓Update Student Info
        </h2>

        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Student ID
              </label>
              <input
                type="text"
                name="student_id"
                defaultValue={studentId}
                required
                placeholder="e.g. 2025001"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Student Name
              </label>
              <input
                type="text"
                name="student_name"
                defaultValue={studentName}
                required
                placeholder="e.g. Hasan Ahmed"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Father Name
              </label>
              <input
                type="text"
                name="father_name"
                defaultValue={fatherName}
                required
                placeholder="e.g. Mostafizur Rahman"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Mother Name
              </label>
              <input
                type="text"
                name="mother_name"
                defaultValue={motherName}
                required
                placeholder="e.g. Shirin Akter"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Date of Birth ( {date_of_birth} )
              </label>
              <input
                type="date"
                name="date_of_birth"
                required
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-teal-900 font-medium mb-1">
                NID / Birth Certificate No.
              </label>
              <input
                type="number"
                name="nid_num"
                defaultValue={nid_num}
                required
                placeholder="e.g. 123456789"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Course Name
              </label>
              <input
                type="text"
                name="course_name"
                defaultValue={course_name}
                required
                placeholder="e.g. Civil Engineering"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Enrollment Date ({enrollment_date})
              </label>
              <input
                type="date"
                name="enrollment_date"
                required
                onChange={handleDateChange}
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Course Finish Date ({course_complete_date})
              </label>
              <input
                type="date"
                name="course_complete_date"
                onChange={handleDateChange}
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Course Status ({course_status})
              </label>
              <select
                name="course_status"
                required
                className="w-full px-4 py-3 border border-teal-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              >
                <option value="">Select status</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
                <option value="certified">Certified</option>
              </select>
            </div>

            {duration && (
              <div className="text-amber-700 font-semibold">
                📅 Course Duration: {duration}
              </div>
            )}
          </div>

          <div className="mt-10 col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Update The Student Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
