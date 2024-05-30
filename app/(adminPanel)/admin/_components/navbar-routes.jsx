import Link from 'next/link'
import React from 'react'

const NavbarRoutes = () => {
  return (
    <div className='flex justify-between flex-1 px-3 '>
        <h2>Admin Panel</h2>

        <div className="flex items-center">
            <Link href="">Logout</Link>
        </div>
    </div>
  )
}

export default NavbarRoutes