import React from "react";
import { createBrowserRouter } from "react-router";
import Login from "../Components/common/Login";
import Register from "../Components/common/Register";
import About from "../Components/common/About";
import ContactUs from "../Components/common/ContactUs";
import Home from "../Components/common/Home";


const router=createBrowserRouter([
    {path:"", element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/register", element:<Register/>},
    {path:"/about", element:<About/>},
    {path:"/contact", element:<ContactUs/>}

])

export default router;