import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom';
import "tailwindcss";
import router from './routes/routes';

function App() {
  

  return (
  
      <RouterProvider router={router}></RouterProvider>
   
  )
}

export default App
