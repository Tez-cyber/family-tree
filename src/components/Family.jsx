import React from 'react'

const Family = () => {
    return (
        <div className='w-[300px] mx-auto'>
            <form action="" className=' flex flex-col gap-4 bg-slate-3500 mt-12 px-5 py-10'>
                <div>
                    <p className='font-medium text-[14px]'>Name :</p>
                    <input type="text" className='border border-black rounded w-full py-1 px-3 outline-none' />
                </div>
                <div>
                    <p className='font-medium text-[14px]'>Nationality: </p>
                    <input type="text" className='border border-black rounded w-full py-1 px-3 outline-none' />
                </div>
                <button className='bg-black text-white w-1/2 mx-auto rounded py-2'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Family
