import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Login from "./components/Authentication Pages/Login.jsx";
import Signup from "./components/Authentication Pages/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import envconfig from "./envconfig.js";
import { ClerkProvider } from "@clerk/clerk-react";
import AddStudents from "./components/Dashboard/AddStudents.jsx";
import AddTeachers from "./components/Dashboard/AddTeachers.jsx";
import AddBacthes from "./components/Dashboard/AddBacthes.jsx";
import store from "./store/store.js";
import { Provider } from 'react-redux'
import Attendance from "./components/Dashboard/Attendance.jsx";
import Students from "./components/Dashboard/Students.jsx";
import Batches from "./components/Dashboard/Batches.jsx";
import Teachers from "./components/Dashboard/Teachers.jsx";
import StudentsList from "./components/Dashboard/StudentList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path:'/dashboard/students',
        element: <Students/>
      },
      {
        path:'/dashboard/batches',
        element: <Batches/>
      },
      {
        path:'/dashboard/teachers',
        element: <Teachers/>
      },

      {
        path: '/dashboard/students/add-students',
        element: <AddStudents/>
      },
      {
        path:'/dashboard/teachers/add-teachers',
        element: <AddTeachers/>
      },
      {
        path:'/dashboard/batches/add-batches',
      element:<AddBacthes/>
      },
      {
        path:'/dashboard/attendance',
        element: <Attendance/>
      },
      {
        path:'/dashboard/students/fetch-students',
        element: <StudentsList/>
      }
    ],
  },
]);

const clerkKey = envconfig.clerkAuthKey;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkKey}
      appearance={{
        variables: {
          colorPrimary: "black",
          colorText: "black",
          fontFamilyButtons: "raleway",
        },
      }}
    >
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
