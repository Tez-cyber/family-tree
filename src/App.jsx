import { useState } from "react"
import Family from "./components/Family"
import Member from "./components/Member"
import Navbar from "./components/Navbar"

function App() {
  const [registerFamily, setRegisterFamily] = useState(false)
  
  return (
    <>
     <Navbar registerFamily={registerFamily}/>
     <Family />
     <Member />
    </>
  )
}

export default App
