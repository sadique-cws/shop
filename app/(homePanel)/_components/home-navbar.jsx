'use client'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const HomeNavbar = () => {
  return (
    <div className='bg-sky-600 flex-1 py-4 px-12 items-center flex justify-between'>
        <Link href="/" className='text-white text-xl font-semibold'>Shop</Link>

        <Form>
          <form>
              <input className="w-[400px] px-10 py-2 rounded-sm" placeholder='Search Anything...'/>
          </form>
        </Form>


        <div className="flex gap-3">
          <Link href="/" className='text-white '>Home</Link>
          <Link href="" className='text-white '>About</Link>
          <Link href="" className='text-white '>Register</Link>
          <Link href="" className='text-white '>Login</Link>
        </div>
    </div>
  )
}

export default HomeNavbar