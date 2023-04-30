import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"
import manual from "../assets/manual_add.png"

export default function ManualNames(){

    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    const [manualAdds, setManualAdds] = useState([])

    useEffect(() => {
        let nameHold = []
        
        //Sorts session names into yes/no/agreed
        if(user && (session.length > 0)){

            //grabs manually added names
            for(let i = 0; i < session.length; i++){
                if(session[i].manual_add === 'y'){
                    nameHold.push({
                        'name': session[i].baby_name_id.name,
                        })
                }
            }
            setManualAdds(nameHold)
            nameHold = []
        }
    }, [session])


    return(
        // This is all terribly ugly and needs to be formatted later
       
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={manual}/>
            <Card.Body>
                <Card.Title>Manually Added Names</Card.Title>
                <ListGroup variant="flush">
                    {manualAdds && manualAdds.map((manualAdds) => (
                    <ListGroup.Item>{manualAdds.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>        
            // <div className='name-table'>
            //     <h3>Manually Added Names:</h3>
            //     <Table striped bordered hover size="sm">
            //         <tbody>
            //             {manualAdds && manualAdds.map((manualAdds) => (
            //                 <tr>
            //                     <th>{manualAdds.name}</th>
            //                 </tr>
            //             ))}
            //         </tbody>
            //     </Table>
            // </div>
      
    )


}