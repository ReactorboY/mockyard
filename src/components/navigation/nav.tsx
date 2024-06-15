import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex h-20 py-3 justify-between items-center'>
      <Link href='/'>
        <h1 className='text-2xl font-extrabold text-sky-500'>MockYard</h1>
      </Link>
      <div className='flex justify-center items-center gap-4'>
        <div className='relative flex items-center'>
          <input
            type='search'
            className='flex-auto px-4 py-2 rounded border border-gray-300 focus:outline-none  focus:ring-opacity-50 placeholder:text-gray-500'
            placeholder='Search'
          />
        </div>

        <button className='bg-sky-500 px-4 py-2 text-slate-50 rounded-lg'>Login</button>
      </div>
    </nav>
  )
}

export default Nav
