import React from 'react'

const Families = ({families}) => {
  return (
    <div>
      {
        families.map(fam => (
          <div className="flex gap-3" key={fam.id}>
            <p>{fam.name}</p>
            <p>{fam.origin}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Families
