import { useState } from "react"
import Family from "./components/Family"
import Member from "./components/Member"
import Navbar from "./components/Navbar"

function App() {
  const [registerFamily, setRegisterFamily] = useState(false)
  const handleRegisterFamily = () => {
    setRegisterFamily(prev => !prev)
  }
  
  return (
    <>
     <Navbar registerFamily={registerFamily} handleRegister={handleRegisterFamily}/>
     {registerFamily && <Family />}
     <Member />
    </>
  )
}

export default App
