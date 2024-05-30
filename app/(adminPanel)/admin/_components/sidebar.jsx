import Link from 'next/link'
import React from 'react'
import SidebarRoutes from './sidebar-routes'

const Sidebar = () => {
  return (
    <div className='h-full  border-r flex flex-col overflow-y-auto bg-white text-gray-900 shadow-sm '>
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>

        <div className="flex flex-col">
           <SidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar