import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import axios from "axios";
import { FaFilePdf, FaFileExcel, FaSpinner } from "react-icons/fa";
import * as XLSX from "xlsx";

// ... (keep all the existing styles and StudentPDF component the same)

const StudentExcel = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/student`,
          { withCredentials: true }
        );
        setStudents(response.data);
      } catch (err) {
        setError("Failed to load student data");
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const downloadExcel = () => {
    // Format the data for Excel
    const excelData = students.map((student) => ({
      "Student Name": student.studentName,
      ID: student.studentId,
      "Father's Name": student.fatherName,
      "Mother's Name": student.motherName,
      DOB: new Date(student.date_of_birth).toLocaleDateString(),
      "NID/BC No.": student.nid_num,
      Course: student.course_name,
      Enrolled: new Date(student.enrollment_date).toLocaleDateString(),
      Completed: new Date(student.course_complete_date).toLocaleDateString(),
      Status: student.course_status.toUpperCase(),
    }));

    // Create a new workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Set column widths
    const wscols = [
      { wch: 20 }, // Student Name
      { wch: 10 }, // ID
      { wch: 20 }, // Father's Name
      { wch: 20 }, // Mother's Name
      { wch: 12 }, // DOB
      { wch: 15 }, // NID/BC No.
      { wch: 15 }, // Course
      { wch: 12 }, // Enrolled
      { wch: 12 }, // Completed
      { wch: 12 }, // Status
    ];
    ws["!cols"] = wscols;

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Students");

    // Generate the Excel file and trigger download
    XLSX.writeFile(
      wb,
      `Students_Report_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Student Report Generator
        </h1>

        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
          {loading ? (
            <div className="flex flex-col items-center">
              <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
              <p className="text-gray-600">Loading student data...</p>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Retry
              </button>
            </div>
          ) : students.length > 0 ? (
            <>
              <div className="mb-6 text-center">
                <div className="flex justify-center gap-4 mb-4">
                  <FaFileExcel className="text-green-600 text-5xl" />
                </div>
                <p className="text-gray-600 mb-2">
                  Ready to generate reports for {students.length} students
                </p>
                <p className="text-sm text-gray-500">
                  Available Student Data Excel formats
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PDFDownloadLink
                  fileName={`Students_Report_${
                    new Date().toISOString().split("T")[0]
                  }.pdf`}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  {({ loading: pdfLoading }) => (
                    <>
                      {pdfLoading ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        <FaFilePdf />
                      )}
                      {pdfLoading ? "Generating PDF..." : "Download PDF"}
                    </>
                  )}
                </PDFDownloadLink>

                <button
                  onClick={downloadExcel}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <FaFileExcel />
                  Download Excel
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">No student data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentExcel;
