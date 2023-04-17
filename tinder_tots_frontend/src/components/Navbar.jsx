import { useContext } from "react"
import {Link} from "react-router-dom"
import { UserContext } from "../App"
import { logoutUser } from "../Utilities"


export const NavBar = () => {
    
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)

    
    console.log(user)
    
    
    return(
        <nav>
            <h3>Tinder Tots</h3>
            <Link to={'/'}>Login</Link><p> ----- </p>
           
            <Link to={'/register/'}>Register</Link>

            {user && <button onClick={()=>logoutUser(setUser)}>LOG OUT</button>}

        </nav>
    )
}