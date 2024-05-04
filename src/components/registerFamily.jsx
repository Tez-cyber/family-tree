import React, { useState } from 'react'

const Family = ({ addFam, registerFam }) => {
    const [lastname, setLastName] = useState('')
    const [origin, setOrigin] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!lastname) {
            setErr('Please enter a lastname')
        }else if(!origin) {
            setErr('Please enter your origin')
        }

        addFam({ lastname, origin })
        setLastName("")
        setOrigin("")


    }
    return (
        <div className="absolute top-0 h-full w-full bg-[#00000099] backdrop-blur-md">
            <div className='w-[300px] mx-auto my-10'>
                <form action="" className='relative flex flex-col gap-4 bg-slate-300 mt-12 px-5 py-20' onSubmit={handleSubmit}>
                    <button className='absolute top-0 right-3' onClick={registerFam} >close</button>
                    <div>
                        <p className='font-medium text-[14px]'>Name :</p>
                        <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} className='border border-black rounded w-full py-1 px-3 outline-none' />
                    </div>
                    <div>
                        <p className='font-medium text-[14px]'>Nationality: </p>
                        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} na className='border border-black rounded w-full py-1 px-3 outline-none' />
                    </div>
                    <div>
                        <p className="text-red-700">{err}</p>
                    </div>
                    <button className='bg-black text-white w-1/2 mx-auto rounded py-2' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Family
