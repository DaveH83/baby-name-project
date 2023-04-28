import Table from 'react-bootstrap/Table'
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"

export default function NameDisplays(){

const {user} = useContext(UserContext)
const {session} = useContext(NameContext)
const [yesNames, setYesNames] = useState([])
const [noNames, setNoNames] = useState([])
const [agreeNames, setAgreeNames] = useState([])
const [manualNames, setManualNames] = useState([])

useEffect(() => {
    let nameHold = []
    
    //Sorts session names into yes/no/agreed
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

        //grabs no names
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
        nameHold = []
        
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

        //grabs manually added names
        for(let i = 0; i < session.length; i++){
            if(session[i].manual_add === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    })
            }
        }
        setManualNames(nameHold)
        nameHold = []
    }
}, [session])


return(
    // This is all terribly ugly and needs to be formatted later
    <div className='row-container'>
    
        <div className='name-table'>
            <h3>Liked Names:</h3>
            <Table striped bordered hover size="sm">
                <tbody>
                    {yesNames && yesNames.map((yesNames) => (
                        <tr>
                            <th>{yesNames.name}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <div className='name-table'>
            <h3>Disliked Names:</h3>
            <Table striped bordered hover size="sm">
                <tbody>
                    {noNames && noNames.map((noNames) => (
                        <tr>
                            <th>{noNames.name}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <div className='name-table'>
            <h3>Agreed Names:</h3>
            <Table striped bordered hover size="sm">
                <tbody>
                    {agreeNames && agreeNames.map((agreeNames) => (
                        <tr>
                            <th>{agreeNames.name}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <div className='name-table'>
            <h3>Manually Added Names:</h3>
            <Table striped bordered hover size="sm">
                <tbody>
                    {manualNames && manualNames.map((manualNames) => (
                        <tr>
                            <th>{manualNames.name}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
)


}