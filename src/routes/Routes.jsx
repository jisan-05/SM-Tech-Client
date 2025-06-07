// router.js (lazy loaded version)
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));
const DashboardLayout = lazy(() =>
    import("../layouts/DashboardLayout/DashboardLayout")
);
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const CourseDetails = lazy(() =>
    import("../components/CourseDetails/CourseDetails")
);
const Programs = lazy(() => import("../components/Programs/Programs"));
const Departments = lazy(() => import("../pages/Departments/Departments"));
const DepartmentCourse = lazy(() =>
    import("../components/DepartmentCourse/DepartmentCourse")
);
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"));
const UpdateCourse = lazy(() => import("../pages/UpdateCourse/UpdateCourse"));
const UpdateDepartment = lazy(() =>
    import("../components/UpdateDepartment/UpdateDepartment")
);
const AllTeacher = lazy(() => import("../components/AllTeacher/AllTeacher"));
const UpdateStudent = lazy(() =>
    import("../components/UpdateStudent/UpdateStudent")
);
const SearchForStudent = lazy(() =>
    import("../components/SearchForStudent/SearchForStudent")
);

const AddDepartments = lazy(() =>
    import("../components/AddDepartments/AddDepartments")
);
const AddCourse = lazy(() => import("../components/AddCourse/AddCourse"));
const ManagePost = lazy(() => import("../pages/ManagePost/ManagePost"));
const ManageDepartment = lazy(() =>
    import("../components/ManageDepartment/ManageDepartment")
);
const AddStudent = lazy(() => import("../components/AddStudent/AddStudent"));
const ManageStudent = lazy(() =>
    import("../pages/ManageStudent/ManageStudent")
);
const AddTeacher = lazy(() => import("../components/AddTeacher/AddTeacher"));
const ManageTeacher = lazy(() =>
    import("../components/ManageTeacher/ManageTeacher")
);
const ManageRole = lazy(() => import("../components/ManageRole/ManageRole"));
const EditTeacher = lazy(() => import("../components/EditTeacher/EditTeacher"));
const Pdf = lazy(() => import("../components/PDF/Pdf"));
const TeacherPdf = lazy(() => import("../components/PDF/TeacherPdf"));
const StudentExcel = lazy(() => import("../components/Excel/StudentExce"));
const AddEvent = lazy(() => import("../components/AddEvent/AddEvent"));
const ManageEvents = lazy(() =>
    import("../components/ManageEvents/ManageEvents")
);

import PrivateRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";

const suspenseWrapper = (Component) => (
    <Suspense fallback={<LoadingSpinner />}>{Component}</Suspense>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: suspenseWrapper(<MainLayout />),
        errorElement: suspenseWrapper(<ErrorPage />),
        children: [
            { path: "/", element: suspenseWrapper(<Home />) },
            { path: "/login", element: suspenseWrapper(<Login />) },
            { path: "/signup", element: suspenseWrapper(<SignUp />) },
            {
                path: "/course/:id",
                element: suspenseWrapper(<CourseDetails />),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_URL}/course/details/${
                            params.id
                        }`
                    ),
            },
            { path: "/programs", element: suspenseWrapper(<Programs />) },
            { path: "/departments", element: suspenseWrapper(<Departments />) },
            {
                path: "/departmentCourse/:category",
                element: suspenseWrapper(<DepartmentCourse />),
            },
            { path: "/contactUs", element: suspenseWrapper(<ContactUs />) },
            {
                path: "/updateCourse/:id",
                element: suspenseWrapper(<UpdateCourse />),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_URL}/course/details/${
                            params.id
                        }`
                    ),
            },
            {
                path: "/updateDepartment/:id",
                element: suspenseWrapper(<UpdateDepartment />),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_URL}/department/${
                            params.id
                        }`
                    ),
            },
            { path: "/allTeacher", element: suspenseWrapper(<AllTeacher />) },
            {
                path: "/updateStudent/:id",
                element: suspenseWrapper(<UpdateStudent />),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_URL}/student/${params.id}`
                    ),
            },
            {
                path: "/searchStudent",
                element: suspenseWrapper(<SearchForStudent />),
            },
        ],
    },
    {
        path: "/dashboardLayout",
        element: suspenseWrapper(
            <AdminRoute>
                <DashboardLayout />
            </AdminRoute>
        ),
        children: [
            {
                path: "addDepartments",
                element: suspenseWrapper(<AddDepartments />),
            },
            { path: "addCourse", element: suspenseWrapper(<AddCourse />) },
            { path: "manageCourse", element: suspenseWrapper(<ManagePost />) },
            {
                path: "manageDepartment",
                element: suspenseWrapper(<ManageDepartment />),
            },
            { path: "addStudent", element: suspenseWrapper(<AddStudent />) },
            {
                path: "manageStudent",
                element: suspenseWrapper(<ManageStudent />),
            },
            { path: "addTeacher", element: suspenseWrapper(<AddTeacher />) },
            {
                path: "manageTeacher",
                element: suspenseWrapper(<ManageTeacher />),
            },
            { path: "manageRole", element: suspenseWrapper(<ManageRole />) },
            {
                path: "editTeacher/:id",
                element: suspenseWrapper(<EditTeacher />),
            },
            { path: "pdf", element: suspenseWrapper(<Pdf />) },
            { path: "teacherPdf", element: suspenseWrapper(<TeacherPdf />) },
            {
                path: "studentExcel",
                element: suspenseWrapper(<StudentExcel />),
            },
            {
                path: "manageEvents",
                element: suspenseWrapper(<ManageEvents />),
            },
            { path: "addEvent", element: suspenseWrapper(<AddEvent />) },
        ],
    },
]);
