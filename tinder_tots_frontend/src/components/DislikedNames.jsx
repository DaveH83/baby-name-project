import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"
import thumbs_down from "../assets/thumbs_down.jpg"

export default function DislikedNames(){

    
    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    const [noNames, setNoNames] = useState([])


    useEffect(() => {
        let nameHold = []
        
        if(user && (session.length > 0)){

            for(let i = 0; i < session.length; i++){
                if(session[i].parent1_id === user.pk && session[i].parent_1_choice === 'n'){
                    nameHold.push({
                        'name': session[i].baby_name_id.name,
                        })
                    }
                    else if(session[i].parent2_id === user.pk && session[i].parent_2_choice === 'n'){
                        nameHold.push({
                            'name': session[i].baby_name_id.name,
                        })
                    }            
                }
                setNoNames(nameHold)
            }
        }, [session])

        return(
            // This is all terribly ugly and needs to be formatted later
            
        
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={thumbs_down}/>
                <Card.Body>
                    <Card.Title>Disliked Names</Card.Title>
                    <ListGroup variant="flush">
                        {noNames && noNames.map((noNames) => (
                        <ListGroup.Item>{noNames.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

           
        )


}