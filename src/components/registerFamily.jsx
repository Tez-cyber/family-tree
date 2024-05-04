import React, { useState } from 'react'

const Family = () => {
    const [lastname, setLastName] = useState('')
    const [origin, setOrigin] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!lastname) setErr('Please enter a lastname')
        addFam({ lastname, origin })

        setOrigin('')
        setErr('')

    }
    return (
        <div className='w-[300px] mx-auto'>
            <form action="" className=' flex flex-col gap-4 bg-slate-300 mt-12 px-5 py-10' onSubmit={handleSubmit}>
                <div>
                    <p className='font-medium text-[14px]'>Name :</p>
                    <input type="text" value={lastname} className='border border-black rounded w-full py-1 px-3 outline-none' />
                </div>
                <div>
                    <p className='font-medium text-[14px]'>Nationality: </p>
                    <input type="text" value={origin} na className='border border-black rounded w-full py-1 px-3 outline-none' />
                </div>
                <div>
                    <p className="text-red-700">{err}</p>
                </div>
                <button className='bg-black text-white w-1/2 mx-auto rounded py-2'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Family
