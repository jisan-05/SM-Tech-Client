// import React from "react";

// const AddStudent = () => {
//   return (
//     <div>
//       <h1>Add a New Student</h1>
//       <form>
//         <label htmlFor="">Student Name</label>
//         <input type="text" />

//         <label htmlFor="">Father Name</label>
//         <input type="text" />

//         <label htmlFor="">Mother Name</label>
//         <input type="text" />

//         <label htmlFor="">Date of birth</label>
//         <input type="text" />

//         <label htmlFor="">NID/Date of birth certificate number</label>
//         <input type="number" />

//         <label htmlFor="category">Course Name</label>
//         <input type="text" />

//         <label htmlFor="">Course Finish Date</label>
//         <input type="date" />

//         <label className="text-gray-700 " htmlFor="category">
//           Course Status
//         </label>
//         <select
//           required
//           name="course_status"
//           id="course_status"
//           className="border p-2 rounded-md"
//         >
//           <option value="completed">Completed</option>
//           <option value="ongoing">Ongoing </option>
//           <option value="certified">Certified</option>
//         </select>
//       </form>
//     </div>
//   );
// };

// export default AddStudent;

import React from "react";

const AddStudent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-amber-100 via-teal-100 to-amber-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-teal-200">
        <h2 className="text-4xl font-bold text-teal-800 mb-10 text-center tracking-tight">
          🎓 Register a New Student
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Student Name
              </label>
              <input
                type="text"
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
                placeholder="e.g. Shirin Akter"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
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
                placeholder="e.g. Civil Engineering"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Course Finish Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">
                Course Status
              </label>
              <select
                name="course_status"
                className="w-full px-4 py-3 border border-teal-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              >
                <option value="">Select status</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
                <option value="certified">Certified</option>
              </select>
            </div>
          </div>
        </form>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold py-3 rounded-xl shadow-md transition-all"
          >
            ✅ Register Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
