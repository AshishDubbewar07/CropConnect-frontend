import React from "react";
import { createBrowserRouter } from "react-router";
import Login from "../Components/Login";
import Register from "../Components/Register";
// import About from "../Components/About";
// import ContactUs from "../Components/ContactUs";
import Home from "../pages/Home";
import Dashboard from "../Components/admin/Dashboard";
import BlogManagement from "../Components/admin/BlogManagement";


const router=createBrowserRouter([
    {path:"", element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/register", element:<Register/>},
    {path: "/admin",element: <Dashboard />},
    {path: "/admin/dashboard",element: <Dashboard />},
    { path: "/admin/blog", element: <BlogManagement /> },
    // {path:"/about", element:<About/>},
    // {path:"/contact", element:<ContactUs/>}

]);

export default router;