import Card from 'react-bootstrap/Card';
import { useContext } from "react"
import { UserContext } from "../App"
import { acceptInvite, rejectInvite } from "../Utilities"

export default function UserCard(){

    const {user} = useContext(UserContext)

    return(
            
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.name}'s Profile</Card.Title>
                <Card.Text>
                E-mail: {user.email}
                </Card.Text>
                <Card.Text>
                Session ID: {user.session_id === 'sent' ? "awaiting invite response" : user.session_id}
                </Card.Text>
                <Card.Text>
                Partner Parent: {user.other_parent}
                </Card.Text>    
                <Card.Text>
                Baby's Gender: {user.baby_gender === "M" ? "Boy" : " Girl"}
                </Card.Text>                             
            </Card.Body>
        </Card>       
        
        
        
        // <div className="user-card">
        //     {user && !user.session_invite && <div className="horizontal-container">

        //         <h2>{user.name}'s Profile</h2>
        //         <h3>E-mail address: {user.email}</h3>
        //         <h3>Session ID: {user.session_id === 'sent' ? "awaiting invite response" : user.session_id}</h3>
        //         <h3>Partner Parent: {user.other_parent}</h3>
        //         {user.baby_gender && <h3>Baby's Gender: {user.baby_gender === "M" ? "Boy" : " Girl"}</h3>}

      //     </div>}

        //     {user && user.session_invite && <div className="horizontal-container">
                
        //         <h2>You have been invited to join a naming session by {user.session_invite}</h2>    
        //         <button onClick={() => acceptInvite(user.username, user.session_invite)}> Accept </button>
        //         <button onClick={() => rejectInvite(user.username, user.session_invite)}> Reject </button>
            
        //     </div>}
        
        // </div>
    )
}