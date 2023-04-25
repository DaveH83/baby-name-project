import { useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { currUser } from './Utilities'
import { getNames, getSession } from './NameUtilities'
import { getToken } from './components/CsrfToken'
import './App.css'

export const UserContext = createContext(null)
export const NameContext = createContext(null)


function App() {
  
  const [user, setUser] = useState(null)
  const [update, setUpdate] = useState(false)
  const [nameList, setNameList] = useState([])
  const [session, setSession] = useState([])
  
  
  getToken()

  // get signed in user (if there is one) and set user state
  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser())
    }
    getCurrUser()
  }, [])

  // get list of names from DB based on user options
  useEffect(() => {
    if(user){
      const getNameList = async (user) => {
        setNameList(await getNames(user.baby_gender, 'popularity'))
      }
      getNameList(user)
    }

  }, [user])

  // get list of names from joint user session
  useEffect(() => {
    const getUserSession = async (user) => {
        setSession(await getSession(user))
    }
    if(user != null){
      getUserSession(user)
    }
    
  }, [user])
  
  // testing useEffects for when shit breaks again  
  // useEffect(() => {
  //   console.log('app.jsx session: ',session)
    
  // }, [session]  )

  // useEffect(() => {
  //   if(nameList.length > 0){

  //     console.log('app.jsx nameList: ',nameList)
  //   }
    
  // }, [nameList]  )
  
  console.log(user)

  return (
    <div className="App">

      <UserContext.Provider value = {{user, setUser, update, setUpdate}} >
        <NavBar />
        <NameContext.Provider value = {{nameList, setNameList, session, setSession}} >
          <Outlet />
        </NameContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
