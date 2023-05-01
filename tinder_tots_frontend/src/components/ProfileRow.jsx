import { useContext } from "react";
import { UserContext, NameContext } from "../App"
import ManualAddName from "./AddName";
import { Setup, Invite } from "./SetupSession";
import UserCard from "./UserCard";

export default function ProfileRow(){


    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    
    console.log(user)
    return(
        
        <div className='profile-row-display-container'>
            <div className='margins'><UserCard /></div>
            {user.session_id && <div className='margins'><ManualAddName /></div>}

            {!user.session_id && user.session_invite && <div className="margins"><Invite /></div> }

            {!user.session_id && !user.session_invite && <div className="margins"><Setup /></div>}
    
    
        </div>
        
    )
    
    
    }