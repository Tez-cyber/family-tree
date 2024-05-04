import React from 'react'

const Families = ({ families }) => {
    return (
        <div>
            {
                families.map((fam, i) => (
                    <div className="flex my-2 p-4 rounded-md justify-between items-center w-[1024px] mx-auto bg-gray-200 " key={i}>
                        <div>
                            <p>{fam.lastname}</p>
                            <p className='text-xs text-gray-500'>{fam.origin}</p>
                        </div>
                        <div>
                            <button className='bg-black text-white p-2 hover:bg-inherit hover:text-black hover:border hover:border-black hover:rounded-lg'>
                                See members
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Families
