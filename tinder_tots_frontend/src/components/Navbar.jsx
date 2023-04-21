import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect } from "react"
import {Link} from "react-router-dom"
import { UserContext } from "../App"
import { logoutUser } from "../Utilities"


export const NavBar = () => {
    
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)

      
    return(
        <nav>
            <h3>Tinder Tots</h3>
            <Link to={'/'}>Login</Link><p> ----- </p>
           
            <Link to={'/register/'}>Register</Link>
            <Link to={'/setup/'}>setup user</Link>

            {user['email'] && <button onClick={()=>logoutUser(setUser)}>LOG OUT</button>}
            <hr />
        </nav>
    //     <>
    //     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    //       <Container className='flex-container'>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Navbar.Brand href="#home">
    //           <img
    //             alt=""
    //             src="../assets/react.svg"
    //             width="30"
    //             height="30"
    //             className="d-inline-block align-top"
    //           />{' '}
    //           React Bootstrap
    //         </Navbar.Brand>
    //           <Nav className="me-auto">
              
    //           <Nav.Link href="#features">Features</Nav.Link>
    //           <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   </>
    )
}