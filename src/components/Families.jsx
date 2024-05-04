import React from 'react'

const Families = ({ families, members }) => {
    // families.map(memb => console.log(memb.members))
    return (
        <div>
            {
                families.map((fam, i) => (
                    <div className="my-2 p-4 rounded-md mx-auto bg-gray-200 md:w-[1024px]" key={i}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p>{fam.lastname}</p>
                                <p className='text-xs text-gray-500'>{fam.origin}</p>
                            </div>
                            {/* <div>
                            <p>id</p>
                            <p className='text-xs text-gray-500'>{fam.id}</p>
                        </div> */}
                            <div>
                                <button className='bg-black text-white p-2 hover:bg-inherit hover:text-black hover:border hover:border-black hover:rounded-lg'>
                                    See members
                                </button>
                            </div>
                        </div>
                        {
                            members.map((member) => (
                                <div className='bg-gray-300 m-2 p-4 rounded flex justify-between'>
                                    <div className=' '>
                                        <p className='text-sm'>Name:</p>
                                        <p>{member.name}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-sm'>Relationship:</p>
                                        <p>{member.relation}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-sm'>Status:</p>
                                        <p>{member.status}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-sm'>Dob:</p>
                                        <p>{member.dob}</p>
                                    </div>
                                
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Families
