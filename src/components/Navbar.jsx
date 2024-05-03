import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
      <div className="flex justify-between px-7 py-8">
        <div className="">
            <h1 className='text-3xl font-bold'>Fam-Tree</h1>
        </div>
        <div className='flex justify-center gap-4 items-center'>
            <button className='bg-white text-black px-4 py-3 rounded'>
                Create Family
            </button>
            <button className='bg-white text-black px-4 py-3 rounded'>
                Family member
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
