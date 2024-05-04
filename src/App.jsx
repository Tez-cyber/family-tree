import { useState } from "react"
import Family from "./components/registerFamily"
import Member from "./components/registerMember"
import Navbar from "./components/Navbar"
import Families from "./components/Families"
import { useEffect } from "react"

function App() {
  //Family state
  const [families, setFamilies] = useState([])

  useEffect(() => {
    const getFamilies = async () => {
      const famServer = await fetchFamilies()
      setFamilies(famServer)
    }
    getFamilies()
  }, [])

  //Fetch families from server
  const fetchFamilies = async () => {
    const res = await fetch('http://localhost:5000/families')
    const data = await res.json()
    return data
  }

  //register Family state
  const [registerFamily, setRegisterFamily] = useState(false)
  const handleRegisterFamily = () => {
    setRegisterFamily(prev => !prev)
    if (registerMember) setRegisterMember(!registerMember)
  }

  //register member state
  const [registerMember, setRegisterMember] = useState(false)
  const handleRegisterMember = () => {
    setRegisterMember(prev => !prev)
    if (registerFamily) setRegisterFamily(!registerFamily)
  }

  //Add family name
  const addFamily = (family) => {
    const id = Math.floor(Math.random() * 100000) + 'aebghj67'
    const newFamily = { id, ...family }
    localStorage.setItem('families', JSON.stringify(setFamilies([...families, newFamily])))

    console.log(families)
  }


  return (
    <>
      <Navbar registerFamily={registerFamily} handleRegisterFamily={handleRegisterFamily} handleRegisterMember={handleRegisterMember} />
      {registerFamily && <Family addFam={addFamily} />}
      {registerMember && <Member />}
      <Families families={families} />
    </>
  )
}

export default App
