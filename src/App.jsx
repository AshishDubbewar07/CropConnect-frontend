import { useEffect, useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom';
import "tailwindcss";
import router from './routes/routes';
import '/src/assets/css/color.css';
import AOS from 'aos';

function App() {
  

    AOS.init();


  return (
  
      <RouterProvider router={router}></RouterProvider>
   
  )
}

export default App
