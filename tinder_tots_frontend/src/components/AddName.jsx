import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from 'react'
import { UserContext, NameContext } from '../App'
import { submitName } from '../NameUtilities';


export default function ManualAddName(){

    const {user} = useContext(UserContext)

    const [name, setName] = useState(null)
    const [gender, setGender] = useState(null)



    return(

        <>
        
        <Form onSubmit={(e) => [
            e.preventDefault(),
            submitName(name, gender, user),
            setName(''),
            setGender(null),
        ]}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Manually Submit Baby Name</Form.Label>
                <Form.Control type="baby_name" placeholder="Enter Baby Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <Form.Text className="text-muted">
                    If you're not seeing the name you want, entering it manually will make it visible to your partner parent, even if they don't add it themselves
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        </>
    )


}