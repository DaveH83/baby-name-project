import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import UserCard from "../components/UserCard"
import { Setup } from "../components/Setup"

export const Homepage = () => {

    // const [nameDB, setNameDB] = useState(null)
    const [sessionId, setSessionId] = useState(null)
    const [otherParent, setOtherParent] = useState(null)
    const {user} = useContext(UserContext)

    // useEffect(() => {
    //     const getNameDB = async () => {
    //       setNameDB(await pullNames())
    //     }
    //     getNameDB()
    //   }, [])

      // console.log(nameDB)

  console.log(user)

    return(
        <>
        
          <h1>hello {user.name}</h1>
          <UserCard />
          <hr />
          {!user.session_id && <Setup />}
        </>
    )
}