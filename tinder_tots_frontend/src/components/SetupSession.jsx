import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState, useEffect } from "react"
import { acceptInvite, rejectInvite } from "../Utilities"
import { UserContext } from "../App"
import { createSession } from "../Utilities";

export const Setup = () => {

 
    const [gender, setGender] = useState(null)
    const [otherParent, setOtherParent] = useState(null)
    const {user} = useContext(UserContext)

    
    


    return(
        <div>
            <Form 
                onSubmit={(e) => [
                    e.preventDefault(),
                    createSession(gender, otherParent, user),
                    window.location.reload()
                ]}
            >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Partner Parent's E-mail</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={otherParent}
                        onChange={(e) => setOtherParent(e.target.value)}
                        className='authentication-textbox'
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else... or will we?
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
                </Form.Group>
                <div className='login-buttons'>
                    <Button variant='primary' type="submit">Invite</Button>
                </div>

            </Form>
        </div>
    )

}


export const Invite = () => {
    

    const {user} = useContext(UserContext)



    return(

        <div className='profile-row-display-container'>

                <h3>You have been invited to a naming session by {user.session_invite}</h3>

                <div className='login-buttons'>
                    <Button variant='primary' onClick={() => acceptInvite(user.username, user.session_invite)}>Accept</Button>
                    <Button variant='primary' onClick={() => rejectInvite(user.username, user.session_invite)}>Reject</Button>
                </div>

        </div>

    )

}