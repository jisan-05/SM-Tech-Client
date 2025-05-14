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
                    fetch(
                        `${import.meta.env.VITE_API_URL}/course/${params.id}`
                    ),
            },

            {
                path: "/programs",
                element: <Programs />,
            },
           
            {
                path: "/departments",
                element: <Departments />,
            },

            
        ],
    },
    {
        path: "/dashboardLayout",
        element: <DashboardLayout></DashboardLayout>,
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
              path:"manageDepartment",
              element:<ManageDepartment></ManageDepartment>
            }
        ],
    },
]);
