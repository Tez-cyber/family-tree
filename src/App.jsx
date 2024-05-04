import { useState } from "react"
import Family from "./components/Family"
import Member from "./components/Member"
import Navbar from "./components/Navbar"

function App() {
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

  const families = [
    {
      id: 1,
      name: "Salami",
      origin: "Nigeria",
      members: []
    },
    {
      id: 2,
      name: "Abdullah",
      origin: "Saudi",
      members: []
    },
    {
      id: 3,
      name: "Vladimir",
      origin: "Russia",
      members: []
    },
    {
      id: 4,
      name: "Danya",
      origin: "Ghana",
      members: []
    },
    {
      id: 5,
      name: "Haruno",
      origin: "Japan",
      members: []
    },
  ]


  return (
    <>
      <Navbar registerFamily={registerFamily} handleRegisterFamily={handleRegisterFamily} handleRegisterMember={handleRegisterMember} />
      {registerFamily && <Family />}
      {registerMember && <Member />}
      
    </>
  )
}

export default App
