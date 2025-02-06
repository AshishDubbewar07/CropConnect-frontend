import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

import ContactUsForm from '../pages/ContactUs';
import BlogPage from '../pages/BlogPage';
import ChatCard from '../Components/ChatCard';
import Layout from '../Components/Layout/Layout';
import  Login  from '../Components/Login';
import  Register  from '../Components/Register';
import DailyPriceModule from '../Components/DailyPriceModule';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login/> },
            { path: "/register", element: <Register /> },
            { path: "/contact", element: <ContactUsForm /> },
            { path: "/blogs", element: <BlogPage /> },
            { path: "/chat", element: <ChatCard /> },
            {path:"/dailyprice", element:<DailyPriceModule/>}
        ]
    }
]);

export default router;
