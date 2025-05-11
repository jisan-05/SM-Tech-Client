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
<<<<<<< HEAD
import ManagePost from "../pages/ManagePost/ManagePost";
=======
import Departments from "../pages/Departments/Departments";
import AddDepartments from "../components/AddDepartments/AddDepartments";
>>>>>>> 077e7d2aa61bf9dbbf14392264a99a2728767b2b

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
        path: "/addCourse",
        element: <AddCourse />,
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/course/${params.id}`),
      },

      {
        path: "/programs",
        element: <Programs />,
      },
      {
<<<<<<< HEAD
        path: "/manageCourse",
        element: <ManagePost />,
      },
=======
        path:'/departments',
        element:<Departments></Departments>
      },
      {
        path:'/addDepartments',
        element:<AddDepartments></AddDepartments>
      }
>>>>>>> 077e7d2aa61bf9dbbf14392264a99a2728767b2b
    ],
  },
]);
