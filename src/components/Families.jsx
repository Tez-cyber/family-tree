import React from 'react'

const Families = ({families}) => {
  return (
    <div>
      {
        families.map((fam, i) => (
          <div className="flex gap-3" key={i}>
            <p>{fam.lastname}</p>
            <p>{fam.origin}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Families
