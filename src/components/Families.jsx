import React from 'react'

const Families = ({ families }) => {
    // families.map(memb => console.log(memb.members))
    return (
        <div>
            {
                families.map((fam, i) => (
                    <div className="flex my-2 p-4 rounded-md justify-between items-center mx-auto bg-gray-200 md:w-[1024px]" key={i}>
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
                            {Object.keys(fam.members)}
                        </div>
                        {/* {
                            fam.members.map((member) => (
                                <div>{member.name}</div>
                            ))
                        } */}
                    </div>
                ))
            }
        </div>
    )
}

export default Families
