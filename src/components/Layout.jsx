import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <div className="flex h-screen">
    <Sidebar/>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout