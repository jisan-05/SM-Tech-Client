import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddCourse from "../components/AddCourse/AddCourse";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Programs from "../components/Programs/Programs";

import PrivateRoute from "./PrivetRoute";
import ManagePost from "../pages/ManagePost/ManagePost";
import Departments from "../pages/Departments/Departments";
import AddDepartments from "../components/AddDepartments/AddDepartments";
import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import ManageDepartment from "../components/ManageDepartment/ManageDepartment";
import ContactUs from "../components/ContactUs/ContactUs";
import UpdateCourse from "../pages/UpdateCourse/UpdateCourse";
import UpdateDepartment from "../components/UpdateDepartment/UpdateDepartment";
import AdminRoute from "./AdminRoute";
import AddStudent from "../components/AddStudent/AddStudent";
import AddTeacher from "../components/AddTeacher/AddTeacher";
import AllTeacher from "../components/AllTeacher/AllTeacher";
import ManageTeacher from "../components/ManageTeacher/ManageTeacher";
import DepartmentCourse from "../components/DepartmentCourse/DepartmentCourse";
import ManageStudent from "../pages/ManageStudent/ManageStudent";

import UpdateStudent from "../components/UpdateStudent/UpdateStudent";
import ManageRole from "../components/ManageRole/ManageRole";
import SearchForStudent from "../components/SearchForStudent/SearchForStudent";
import Pdf from "../components/PDF/Pdf";
import TeacherPdf from "../components/PDF/TeacherPdf";
import EditTeacher from "../components/EditTeacher/EditTeacher";
import StudentExcel from "../components/Excel/StudentExce";
import AddEvent from "../components/AddEvent/AddEvent";
import ManageEvents from "../components/ManageEvents/ManageEvents";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/course/details/${params.id}`),
      },

      {
        path: "/programs",
        element: <Programs />,
      },

      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/departmentCourse/:category",
        element: <DepartmentCourse></DepartmentCourse>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/updateCourse/:id",
        element: <UpdateCourse />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/course/details/${params.id}`),
      },
      {
        path: "/updateDepartment/:id",
        element: <UpdateDepartment></UpdateDepartment>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/department/${params.id}`),
      },
      {
        path: "/allTeacher",
        element: <AllTeacher></AllTeacher>,
      },

      {
        path: "/updateStudent/:id",
        element: <UpdateStudent />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/student/${params.id}`),
      },
      {
        path: "/searchStudent",
        element: <SearchForStudent />,
      },
    ],
  },
  {
    path: "/dashboardLayout",
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "addDepartments",
        element: <AddDepartments></AddDepartments>,
      },
      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "manageCourse",
        element: <ManagePost />,
      },
      {
        path: "manageDepartment",
        element: <ManageDepartment></ManageDepartment>,
      },
      {
        path: "addStudent",
        element: <AddStudent />,
      },
      {
        path: "manageStudent",
        element: <ManageStudent />,
      },

      {
        path: "addTeacher",
        element: <AddTeacher></AddTeacher>,
      },
      {
        path: "manageTeacher",
        element: <ManageTeacher></ManageTeacher>,
      },

      {
        path: "manageRole",
        element: <ManageRole></ManageRole>,
      },
      {
        path: "editTeacher/:id",
        element: <EditTeacher></EditTeacher>,
      },
      {
        path: "pdf",
        element: <Pdf />,
      },
      {
        path: "teacherPdf",
        element: <TeacherPdf />,
      },
      {
        path: "studentExcel",
        element: <StudentExcel />,
      },
      {
        path: "manageEvents",
        element: <ManageEvents></ManageEvents>,
      },
      {
        path:'addEvent',
        element:<AddEvent></AddEvent>
      },
     
    ],
  },
]);
