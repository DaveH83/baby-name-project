import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, NameContext } from "../App"
import { Setup } from "../components/Setup"
import UserCard from "../components/UserCard"
import NameDisplays from "../components/NameDisplays"

export const Homepage = () => {

  const {user} = useContext(UserContext)
  const {session} = useContext(NameContext)
  const navigate = useNavigate()

  return(
      <>
        {!user && navigate('/')}      
        <h1>hello {user && user.name}</h1>
        {user && <UserCard />}
        <hr />
        {session && user && user.session_id ? <NameDisplays /> : <Setup />}
      </>
  )
}