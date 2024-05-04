import { useState } from "react"
import Family from "./components/registerFamily"
import Member from "./components/registerMember"
import Navbar from "./components/Navbar"
import Families from "./components/Families"
import { useEffect } from "react"

function App() {
  const [families, setFamilies] = useState([
    {
      id: 1,
      lastname: "Salami",
      origin: "Nigeria",
      members: []
    },
    {
      id: 2,
      lastname: "Abdullah",
      origin: "Saudi",
      members: []
    },
    {
      id: 3,
      lastname: "Vladimir",
      origin: "Russia",
      members: []
    },
    {
      id: 4,
      lastname: "Danya",
      origin: "Ghana",
      members: []
    },
    {
      id: 5,
      lastname: "Haruno",
      origin: "Japan",
      members: []
    },
  ])

  useEffect(() => {
    console.log(families)
  }, [families])
  const [registerFamily, setRegisterFamily] = useState(false)
  const handleRegisterFamily = () => {
    setRegisterFamily(prev => !prev)
    if (registerMember) setRegisterMember(!registerMember)
  }

  const [registerMember, setRegisterMember] = useState(false)
  const handleRegisterMember = () => {
    setRegisterMember(prev => !prev)
    if (registerFamily) setRegisterFamily(!registerFamily)
  }


  const addFamily = (family) => {
    const id = Math.floor(Math.random() * 100000) + 'aebghj67'
    const newFamily = {id, ...family}
    localStorage.setItem('families', JSON.stringify(setFamilies([...families, newFamily])))

    console.log(families)
  }


  return (
    <>
      <Navbar registerFamily={registerFamily} handleRegisterFamily={handleRegisterFamily} handleRegisterMember={handleRegisterMember} />
      {registerFamily && <Family  addFam={addFamily}  />}
      {registerMember && <Member />}
      <Families families={families} />
    </>
  )
}

export default App
