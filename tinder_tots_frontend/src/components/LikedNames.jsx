import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"
import thumbs_up from "../assets/thumbs_up.jpg"

export default function LikedNames(){

const {user} = useContext(UserContext)
const {session} = useContext(NameContext)
const [yesNames, setYesNames] = useState([])


useEffect(() => {
   
    let nameHold = []
     
    if(user && (session.length > 0)){

        //grabs yes names
        for(let i = 0; i < session.length; i++){
            if(session[i].parent1_id === user.pk && session[i].parent_1_choice === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    })
            }
            else if(session[i].parent2_id === user.pk && session[i].parent_2_choice === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    })
            }            
        }
        setYesNames(nameHold)
        nameHold = []
    }
}, [session])


return(
    // This is all terribly ugly and needs to be formatted later
    
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={thumbs_up} width={{width:'50px'}}/>
      <Card.Body>
        <Card.Title>Liked Names</Card.Title>
        <ListGroup variant="flush">
            {yesNames && yesNames.map((yesNames) => (
            <ListGroup.Item>{yesNames.name}</ListGroup.Item>
            ))}
        </ListGroup>
        </Card.Body>
    </Card>



        // <div className='name-table'>
        //     <h3>Liked Names:</h3>
        //     <Table striped bordered hover size="sm">
        //         <tbody>
        //             {yesNames && yesNames.map((yesNames) => (
        //                 <tr>
        //                     <th>{yesNames.name}</th>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </Table>
        // </div>
)


}