import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>this is dashboard page
        <Outlet/>
    </div>
  )
}

export default Dashboard