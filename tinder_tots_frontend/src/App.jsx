import { useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { currUser } from './Utilities'
import { pullNames } from './NameUtilities'
import { getToken } from './components/CsrfToken'
import './App.css'

export const UserContext = createContext(null)
export const NameContext = createContext(null)

function App() {
  
  const [user, setUser] = useState(false)
  const [update, setUpdate] = useState(false)

  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser())
    }
    getCurrUser()
  }, [update])



 

  return (
    <div className="App">

      <UserContext.Provider value = {{user, setUser, update, setUpdate}} >
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App
