import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { createSession } from "../Utilities";
import Form from 'react-bootstrap/Form';

export const Setup = () => {

 
    const [gender, setGender] = useState(null)
    const [otherParent, setOtherParent] = useState(null)
    const {user} = useContext(UserContext)

    const navigate = useNavigate()
    


    return(
        <>
        
            <h3>Before we begin, please set the following options</h3>
            <form
                onSubmit={(e) => [
                    e.preventDefault(),
                    createSession(gender, otherParent, user),
                    navigate('/home/')
                ]}
                >
                <h3>Choose Boy or Girl names</h3>
                <Form.Check 
                    type='radio'
                    id='default'
                    name='gender'
                    label='Boy'
                    value='M'
                    onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check 
                    type='radio'
                    id='default'
                    name='gender'
                    label='Girl'
                    value='F'
                    onChange={(e) => setGender(e.target.value)}
                />
                <input 
                    type="text" 
                    name="otherParent" 
                    value={otherParent}
                    placeholder="E-Mail address of other parent"
                    onChange={(e) => setOtherParent(e.target.value)} />
                <input type="submit" value="Start Session" />
            </form>
        
        </>
    )
}