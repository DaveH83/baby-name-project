// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { logoutUser } from "../Utilities"


export const NavBar = () => {
    
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)
    
    const navigate = useNavigate()

    return(
        // This will be updated with a nice looking nav bar at the end of project
        <nav>
            <h3>Tinder Tots</h3>
            <Link to={'/'}>Login</Link><p> ----- </p>
           
            <Link to={'/register/'}>Register </Link>
            <Link to={'/setup/'}>setup user </Link>
            <Link to={'/home/'}>Home </Link>

            {user && <button onClick={()=>[
                logoutUser(setUser),
                navigate('/')
                ]}>LOG OUT</button>}
            <hr />
        </nav>
    )
}