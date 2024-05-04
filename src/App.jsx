import { useState } from "react"
import Family from "./components/registerFamily"
import Member from "./components/registerMember"
import Navbar from "./components/Navbar"
import Families from "./components/Families"
import { useEffect } from "react"

function App() {
  //Family state
  const [families, setFamilies] = useState([])
  const [members, setMembers] = uiseState([])

  

  //Fetch families from server
  useEffect(() => {
    const getFamilies = async () => {
      const famServer = await fetchFamilies()
      setFamilies(famServer)
    }
    getFamilies()
    const getMembers = async () => {
      const famServer = await fetchFamilies()
      setFamilies(famServer)
    }
    getMembers()
  }, [families, ])

  const fetchFamilies = async () => {
    const res = await fetch('http://localhost:5000/families')
    const data = await res.json()
    return data
  }
  const fetchMembers = async () => {
    const res = await fetch('http://localhost:5000/members')
    const data = await res.json()
    return data
  }

  //register Family state
  const [registerFamily, setRegisterFamily] = useState(false)
  const handleRegisterFamily = () => {
    setRegisterFamily(prev => !prev)
    if (registerMember) setRegisterMember(!registerMember)
    console.log(registerFamily)
  }


  //register member state
  const [registerMember, setRegisterMember] = useState(false)
  const handleRegisterMember = () => {
    setRegisterMember(prev => !prev)
    if (registerFamily) setRegisterFamily(!registerFamily)
  }

  

  //Add family name
  const addFamily = async (family) => {
    // const id = Math.floor(Math.random() * 100000) + 'aebghj67'
    const res = await fetch('http://localhost:5000/families', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(family)
    })

    const members = {}
    const data = res.json()
    setFamilies([...families, data])

      

    console.log(members)
  }


  return (
    <>
      {registerFamily && <Family addFam={addFamily} registerFam={handleRegisterFamily}  />}
      <Navbar registerFamily={registerFamily} handleRegisterFamily={handleRegisterFamily} handleRegisterMember={handleRegisterMember} />
      {registerMember && <Member />}
      <Families families={families} />
    </>
  )
}

export default App
