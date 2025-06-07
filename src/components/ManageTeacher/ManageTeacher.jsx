import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const ManageTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/teachers`);
      setTeachers(res.data);
    } catch (err) {
      console.error("Failed to fetch teachers", err);
    }
  };

  const handleDeleteTeacher = async (id) => {
    Swal.fire({
      title: "Are you sure to Delete Teacher?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/teachers/${id}`, {
            withCredentials: true,
          });
          fetchTeachers();
          toast.success("Teacher Deleted Successfully");
        } catch (err) {
          console.error(err);
          toast.error("Something went wrong! Try again.");
        }
      }
    });
  };

  const exportToExcel = () => {
  // Prepare the data for Excel
  const excelData = teachers.map((teacher, index) => ({
    "No.": index + 1,
    "Name": teacher.name,
    "Designation": teacher.designation,
    "Education": teacher.education,
    "Experience": teacher.experience
  }));

  // Create a new workbook
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(excelData);

  // Set column widths (in characters)
  const colWidths = [
    { wch: 5 },   // No.
    { wch: 25 },  // Name
    { wch: 25 },  // Designation
    { wch: 25 },  // Education
    { wch: 30 }   // Experience
  ];
  ws['!cols'] = colWidths;

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Teachers");

  // Generate the Excel file and trigger download
  XLSX.writeFile(wb, "teachers_list.xlsx");
};

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header with title and Add Teacher button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Teachers</h2>

        <div className="flex gap-2">
          <button 
            onClick={exportToExcel}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
          >
            Download Teacher List (Excel)
          </button>

          <Link to="/dashboardLayout/teacherPdf" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
            Download Teacher List (PDF)
          </Link>
        </div>

        <Link
          to="/dashboardLayout/addTeacher"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Teacher
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#07a698] text-white">
              <th className="p-3">Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Designation</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id} className="border-b">
                <td className="p-3">
                  <img
                    src={teacher.photoURL || "/default-instructor.jpg"}
                    alt={teacher.name}
                    loading="lazy"

                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="p-3">{teacher.name}</td>
                <td className="p-3">{teacher.designation}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/dashboardLayout/editTeacher/${teacher._id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteTeacher(teacher._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {teachers.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeacher;