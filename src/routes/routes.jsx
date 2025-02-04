import React from "react";
import { createBrowserRouter } from "react-router-dom"; // Use "react-router-dom" instead of "react-router"
import Home from "../pages/Home";
import ContactUsForm from "../pages/ContactUs";
import Login from "../Components/Login";
import Register from "../Components/Register"; // Import Register component
import BlogPage from "../pages/BlogPage";

const router = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> }, // Register route fixed
    { path: "/contact", element: <ContactUsForm /> },
    {path:"/blogs",element:<BlogPage/>}
]);

export default router;
