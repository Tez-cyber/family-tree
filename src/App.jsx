import { useState } from "react"
import Family from "./components/Family"
import Member from "./components/Member"
import Navbar from "./components/Navbar"

function App() {
  const [registerFamily, setRegisterFamily] = useState(false)
  const handleRegisterFamily = () => {
    setRegisterFamily(prev => !prev)
  }

  const [registerMember, setRegisterMember] = useState(false)
  const handleRegisterMember = () => {
    setRegisterMember(prev => !prev)
  }

  
  return (
    <>
     <Navbar registerFamily={registerFamily} handleRegister={handleRegisterFamily}/>
     {registerFamily && <Family />}
     {registerMember && <Member />}
    </>
  )
}

export default App
