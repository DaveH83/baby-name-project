import { useContext, useState, useEffect } from "react"
import { UserContext } from "../App"
import { acceptInvite, rejectInvite, currUser } from "../Utilities"


export default function UserCard(){

    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)
    const {setUpdate} = useContext(UserContext)
    const {update} = useContext(UserContext)

    console.log('update:', update)


    return(
        <>
            {!user.session_invite && <div className="horizontal-container">

                <h2>{user.name}'s Profile</h2>
                <h3>E-mail address: {user.email}</h3>
                <h3>Session ID: {user.session_id === 'sent' ? "awaiting invite response" : user.session_id}</h3>
                <h3>Partner Parent: {user.other_parent}</h3>
                <h3>Baby's Gender: {user.baby_gender === "M" ? "Boy" : " Girl"}</h3>

            </div>}

            {user.session_invite && <div className="horizontal-container">
                
                <h2>You have been invited to join a naming session by {user.session_invite}</h2>    
                <button onClick={() => acceptInvite(user.username, user.session_invite)}> Accept </button>
                <button onClick={() => rejectInvite(user.username, user.session_invite, setUpdate, update)}> Reject </button>
            
            </div>}
        
        </>

    )
}