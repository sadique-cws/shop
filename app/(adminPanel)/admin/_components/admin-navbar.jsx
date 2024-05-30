import Link from 'next/link'
import React from 'react'
import MobileSidebar from './mobile-sidebar'
import NavbarRoutes from './navbar-routes'

const AdminNavbar = () => {
  return (
    <div className=' items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-slate-200 shadow-sm flex-1 border-b p-4 flex justify-between'>
        <MobileSidebar/>
        <NavbarRoutes/>
    </div>
  )
}

export default AdminNavbar