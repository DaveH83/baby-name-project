import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"
import handshake from "../assets/handshake.png"

export default function AgreedNames(){

const {user} = useContext(UserContext)
const {session} = useContext(NameContext)
const [agreeNames, setAgreeNames] = useState([])

useEffect(() => {
    let nameHold = []
    

    if(user && (session.length > 0)){

       //grabs agreed names
        for(let i = 0; i < session.length; i++){
            if(session[i].agreed === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    })
            }
        }
        setAgreeNames(nameHold)
        nameHold = []
    }
}, [session])


    return(
    // This is all terribly ugly and needs to be formatted later
 

        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={handshake}/>
            <Card.Body>
                <Card.Title>Agreed Names</Card.Title>
                <ListGroup variant="flush">
                    {agreeNames && agreeNames.map((agreeNames) => (
                    <ListGroup.Item>{agreeNames.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    
       
)


}