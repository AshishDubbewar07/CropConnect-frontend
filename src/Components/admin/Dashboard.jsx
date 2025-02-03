import React from 'react'
import UserDashboard from './UserDashboard'
import AdminNavBar from './AdminNavBar'

const Dashboard = () => {
  return (
    <div>
      Admin Dashboard
      <AdminNavBar/>
      <UserDashboard/>
    </div>
  )
}

export default Dashboard
