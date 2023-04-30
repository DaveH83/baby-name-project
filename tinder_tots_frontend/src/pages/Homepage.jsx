import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, NameContext } from "../App"
import { Setup } from "../components/Setup"
import UserCard from "../components/UserCard"
import NameDisplays from "../components/NameDisplays"

import ManualAddName from "../components/AddName"
import ProfileRow from "../components/ProfileRow"

export const Homepage = () => {

  
  const {user} = useContext(UserContext)
  const {session} = useContext(NameContext)
  const navigate = useNavigate()



  return(
      <>
        {!user && navigate('/')}      
        {user && <ProfileRow />}
        <hr />
        <div className="name-display-container">
          {session && user && user.session_id && <NameDisplays />}
        </div>
      </>
  )
}