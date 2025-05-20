// import React, { useEffect, useState } from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   PDFDownloadLink,
//   Image,
// } from "@react-pdf/renderer";
// import logo from "../../../public/logo.png";
// import axios from "axios";

// // Styles for landscape A4 with clear spacing
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     backgroundColor: "#ffffff",
//     padding: 20,
//     orientation: "landscape",
//   },
//   logo: {
//     width: 100,
//     marginBottom: 10,
//   },
//   header: {
//     textAlign: "center",
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//   },
//   tableRow: {
//     flexDirection: "row",
//   },
//   tableCol: {
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//     padding: 4,
//     fontSize: 8,
//     flex: 1,
//   },
//   colNID: {
//     flex: 2.5,
//   },
//   colName: {
//     flex: 2,
//   },
//   colCourse: {
//     flex: 1.5,
//   },
//   tableHeader: {
//     fontSize: 9,
//     fontWeight: "bold",
//     backgroundColor: "#e4e4e4",
//   },
// });

// const StudentPDF = ({ students }) => (
//   <Document>
//     <Page size="A4" orientation="landscape" style={styles.page}>
//       <Image src={logo} style={styles.logo} />
//       <Text style={styles.header}>Student List Report</Text>

//       <View style={styles.table}>
//         {/* Table Header */}
//         <View style={[styles.tableRow, styles.tableHeader]}>
//           <Text style={[styles.tableCol, styles.colName]}>Name</Text>
//           <Text style={[styles.tableCol]}>ID</Text>
//           <Text style={[styles.tableCol]}>Father</Text>
//           <Text style={[styles.tableCol]}>Mother</Text>
//           <Text style={[styles.tableCol]}>DOB</Text>
//           <Text style={[styles.tableCol, styles.colNID]}>NID</Text>
//           <Text style={[styles.tableCol, styles.colCourse]}>Course</Text>
//           <Text style={[styles.tableCol]}>Enroll</Text>
//           <Text style={[styles.tableCol]}>Complete</Text>
//           <Text style={[styles.tableCol]}>Status</Text>
//           <Text style={[styles.tableCol]}>Duration</Text>
//         </View>

//         {/* Table Data */}
//         {students.map((student, index) => (
//           <View style={styles.tableRow} key={index}>
//             <Text style={[styles.tableCol, styles.colName]}>
//               {student.studentName}
//             </Text>
//             <Text style={styles.tableCol}>{student.studentId}</Text>
//             <Text style={styles.tableCol}>{student.fatherName}</Text>
//             <Text style={styles.tableCol}>{student.motherName}</Text>
//             <Text style={styles.tableCol}>{student.date_of_birth}</Text>
//             <Text style={[styles.tableCol, styles.colNID]}>
//               {student.nid_num}
//             </Text>
//             <Text style={[styles.tableCol, styles.colCourse]}>
//               {student.course_name}
//             </Text>
//             <Text style={styles.tableCol}>{student.enrollment_date}</Text>
//             <Text style={styles.tableCol}>{student.course_complete_date}</Text>
//             <Text style={styles.tableCol}>{student.course_status}</Text>
//             <Text style={styles.tableCol}>{student.durationInMonths}</Text>
//           </View>
//         ))}
//       </View>
//     </Page>
//   </Document>
// );

// const Pdf = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:9000/student").then((res) => {
//       setStudents(res.data);
//     });
//   }, []);

//   return (
//     <div className="p-4">
//       {students.length > 0 ? (
//         <PDFDownloadLink
//           document={<StudentPDF students={students} />}
//           fileName="All_Student_Info.pdf"
//         >
//           {({ loading }) =>
//             loading ? "Generating PDF..." : "Download Student PDF"
//           }
//         </PDFDownloadLink>
//       ) : (
//         "Loading students..."
//       )}
//     </div>
//   );
// };

// export default Pdf;

// Best--------------
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

// Enhanced PDF styles
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
        // marginBottom: 15,
        // borderBottom: "1 solid #e0e0e0",
        // paddingBottom: 10,
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
    colName: { width: "15%" },
    colId: { width: "8%" },
    colFather: { width: "12%" },
    colMother: { width: "12%" },
    colDob: { width: "8%" },
    colNid: { width: "12%" },
    colCourse: { width: "10%" },
    colEnroll: { width: "8%" },
    colComplete: { width: "8%" },
    colStatus: { width: "7%" },
    statusCompleted: { color: "#27ae60" },
    statusOngoing: { color: "#f39c12" },
    statusCertified: { color: "#2980b9" },
});

const StudentPDF = ({ students }) => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                <View style={styles.logoContainer}>
                    <Image src={logo} style={styles.logo} />
                    <Text style={styles.reportInfo}>
                        SM TECH STUDENT REPORT | Generated on: {currentDate} |
                        Total Students: {students.length}
                    </Text>
                    SM TECH STUDENT REPORT
                </View>

                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={[styles.tableCol, styles.colName]}>
                            Student Name
                        </Text>
                        <Text style={[styles.tableCol, styles.colId]}>ID</Text>
                        <Text style={[styles.tableCol, styles.colFather]}>
                            Father's Name
                        </Text>
                        <Text style={[styles.tableCol, styles.colMother]}>
                            Mother's Name
                        </Text>
                        <Text style={[styles.tableCol, styles.colDob]}>
                            DOB
                        </Text>
                        <Text style={[styles.tableCol, styles.colNid]}>
                            NID/BC No.
                        </Text>
                        <Text style={[styles.tableCol, styles.colCourse]}>
                            Course
                        </Text>
                        <Text style={[styles.tableCol, styles.colEnroll]}>
                            Enrolled
                        </Text>
                        <Text style={[styles.tableCol, styles.colComplete]}>
                            Completed
                        </Text>
                        <Text style={[styles.tableCol, styles.colStatus]}>
                            Status
                        </Text>
                    </View>

                    {/* Table Rows */}
                    {students.map((student, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={[styles.tableCol, styles.colName]}>
                                {student.studentName}
                            </Text>
                            <Text style={[styles.tableCol, styles.colId]}>
                                {student.studentId}
                            </Text>
                            <Text style={[styles.tableCol, styles.colFather]}>
                                {student.fatherName}
                            </Text>
                            <Text style={[styles.tableCol, styles.colMother]}>
                                {student.motherName}
                            </Text>
                            <Text style={[styles.tableCol, styles.colDob]}>
                                {new Date(
                                    student.date_of_birth
                                ).toLocaleDateString()}
                            </Text>
                            <Text style={[styles.tableCol, styles.colNid]}>
                                {student.nid_num}
                            </Text>
                            <Text style={[styles.tableCol, styles.colCourse]}>
                                {student.course_name}
                            </Text>
                            <Text style={[styles.tableCol, styles.colEnroll]}>
                                {new Date(
                                    student.enrollment_date
                                ).toLocaleDateString()}
                            </Text>
                            <Text style={[styles.tableCol, styles.colComplete]}>
                                {new Date(
                                    student.course_complete_date
                                ).toLocaleDateString()}
                            </Text>
                            <Text
                                style={[
                                    styles.tableCol,
                                    styles.colStatus,
                                    student.course_status === "completed"
                                        ? styles.statusCompleted
                                        : student.course_status === "ongoing"
                                        ? styles.statusOngoing
                                        : styles.statusCertified,
                                ]}
                            >
                                {student.course_status.toUpperCase()}
                            </Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

const PdfGenerator = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/student`,{withCredentials:true}
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
                            <p className="text-gray-600">
                                Loading student data...
                            </p>
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
                                <FaFilePdf className="text-red-500 text-5xl mx-auto mb-4" />
                                <p className="text-gray-600 mb-2">
                                    Ready to generate PDF report for{" "}
                                    {students.length} students
                                </p>
                                <p className="text-sm text-gray-500">
                                    Includes all student information in a
                                    printable format
                                </p>
                            </div>

                            <PDFDownloadLink
                                document={<StudentPDF students={students} />}
                                fileName={`Students_Report_${
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
                                            : "Download Student Report"}
                                    </>
                                )}
                            </PDFDownloadLink>
                        </>
                    ) : (
                        <p className="text-gray-500">
                            No student data available
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PdfGenerator;
