import React from "react";
import { createBrowserRouter } from "react-router";
import Login from "../Components/Login";
import Register from "../Components/Register";
// import About from "../Page/About";
// import ContactUs from "../Page/ContactUs";
import Home from "../pages/Home";


const router=createBrowserRouter([
    {path:"", element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/register", element:<Register/>},
    // {path:"/about", element:<About/>},
    // {path:"/contact", element:<ContactUs/>}

])

export default router;