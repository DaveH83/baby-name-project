import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { loginUser, getDadJoke, registerUser } from "../Utilities"


export const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return(

        <div>
            <Form onSubmit={(e) => [
                e.preventDefault(),
                registerUser(name, email, password),
                setEmail(""),
                setPassword(""),
                setName(""),
                props.setRegistered(true),
                
            ]}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="Enter Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='authentication-textbox'
                    />
                    <Form.Text className="text-muted">
                    What's in a name?
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='authentication-textbox'
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else... or will we?
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='authentication-textbox'
                    />
                </Form.Group>
                <div className='login-buttons'>
                    <Button variant='primary' type="submit">Register</Button>
                    <Button variant='primary' onClick={(e) => props.setRegistered(true)} >Log In</Button>
                </div>


            </Form>
        </div>
    )
}

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect (() => {
        if (loggedIn){
            navigate('/home/')
            
        }else{

        }
    }, [loggedIn])

 
    return(
        <div>
        <Form onSubmit={(e) => [
            e.preventDefault(),
            setLoggedIn(loginUser(email, password, setUser)),
            setEmail(""),
            setPassword(""),
            
            
        ]}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='authentication-textbox'
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else... or will we?
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='authentication-textbox'
                />
            </Form.Group>
            <div className='login-buttons'>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Button variant='primary' onClick={(e) => props.setRegistered(false)} >Register</Button>
            </div>


        </Form>

        

        </div>

    )

}


