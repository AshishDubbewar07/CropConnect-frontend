import React from 'react'
import UserDashboard from './UserDashboard'
import AdminNavBar from './AdminNavBar'
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <AdminNavBar/>
      <UserDashboard/>
      <Outlet />
    </div>
  )
}

export default Dashboard
