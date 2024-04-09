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
        path: '/dashboard/add-students',
        element: <AddStudents/>
      },
      {
        path:'/dashboard/add-teachers',
        element: <AddTeachers/>
      },
      {
        path:'/dashboard/add-batches',
      element:<AddBacthes/>
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
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
