import { useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { currUser } from './Utilities'
import { getToken } from './components/CsrfToken'
import './App.css'

export const UserContext = createContext(null)

function App() {
  
  const [user, setUser] = useState(false)

  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser())
    }
    getCurrUser()
  }, [])



  return (
    <div className="App">
      <UserContext.Provider value = {{user, setUser}} >
        <NavBar />
      </UserContext.Provider>
      <UserContext.Provider value = {{user, setUser}} >
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App
