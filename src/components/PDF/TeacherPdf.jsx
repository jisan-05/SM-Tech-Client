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
import { FaFilePdf, FaSpinner } from "react-icons/fa";
import logo from "../../assets/logo.png";

// PDF styles for Teachers
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
    fontFamily: "Helvetica",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  reportInfo: {
    fontSize: 10,
    color: "#7f8c8d",
    textAlign: "right",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 5,
    fontSize: 9,
  },
  tableHeader: {
    backgroundColor: "#3498db",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  colName: { width: "20%" },
  colDesignation: { width: "15%" },
  colSpecialization: { width: "15%" },
  colEducation: { width: "15%" },
  colExperience: { width: "15%" },
  colSkills: { width: "20%" },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  skillTag: {
    backgroundColor: "#e0e0e0",
    padding: "1px 3px",
    borderRadius: 2,
    marginRight: 2,
    marginBottom: 2,
    fontSize: 8,
  },
});

const TeacherPDF = ({ teachers }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.logoContainer}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.reportInfo}>
            SM TECH TEACHER REPORT | Generated on: {currentDate} | Total
            Teachers: {teachers.length}
          </Text>
          SM TECH TEACHER REPORT
        </View>

        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCol, styles.colName]}>Teacher Name</Text>
            <Text style={[styles.tableCol, styles.colDesignation]}>
              Designation
            </Text>
            <Text style={[styles.tableCol, styles.colSpecialization]}>
              Specialization
            </Text>
            <Text style={[styles.tableCol, styles.colEducation]}>
              Education
            </Text>
            <Text style={[styles.tableCol, styles.colExperience]}>
              Experience
            </Text>
            <Text style={[styles.tableCol, styles.colSkills]}>Skills</Text>
          </View>

          {/* Table Rows */}
          {teachers.map((teacher, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCol, styles.colName]}>
                {teacher.name}
              </Text>
              <Text style={[styles.tableCol, styles.colDesignation]}>
                {teacher.designation}
              </Text>
              <Text style={[styles.tableCol, styles.colSpecialization]}>
                {teacher.specialization}
              </Text>
              <Text style={[styles.tableCol, styles.colEducation]}>
                {teacher.education}
              </Text>
              <Text style={[styles.tableCol, styles.colExperience]}>
                {teacher.experience}
              </Text>
              <View style={[styles.tableCol, styles.colSkills]}>
                <View style={styles.skillsList}>
                  {teacher.skills.map((skill, i) => (
                    <Text style={styles.skillTag} key={i}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const TeacherPdf = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/teachers`
        );
        setTeachers(response.data);
      } catch (err) {
        setError("Failed to load teacher data");
        console.error("Error fetching teachers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Teacher Report Generator
        </h1>

        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
          {loading ? (
            <div className="flex flex-col items-center">
              <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
              <p className="text-gray-600">Loading teacher data...</p>
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
          ) : teachers.length > 0 ? (
            <>
              <div className="mb-6 text-center">
                <FaFilePdf className="text-red-500 text-5xl mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Ready to generate PDF report for {teachers.length} teachers
                </p>
                <p className="text-sm text-gray-500">
                  Includes all teacher information in a printable format
                </p>
              </div>

              <PDFDownloadLink
                document={<TeacherPDF teachers={teachers} />}
                fileName={`Teachers_Report_${
                  new Date().toISOString().split("T")[0]
                }.pdf`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
              >
                {({ loading: pdfLoading }) => (
                  <>
                    {pdfLoading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <FaFilePdf />
                    )}
                    {pdfLoading
                      ? "Generating PDF..."
                      : "Download Teacher Report"}
                  </>
                )}
              </PDFDownloadLink>
            </>
          ) : (
            <p className="text-gray-500">No teacher data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherPdf;
