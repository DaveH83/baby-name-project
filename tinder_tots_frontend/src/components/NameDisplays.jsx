import Table from 'react-bootstrap/Table'
import { useContext, useState, useEffect } from "react"
import { UserContext, NameContext } from "../App"

export default function NameDisplays(){

const {user} = useContext(UserContext)
const {session} = useContext(NameContext)
const [yesNames, setYesNames] = useState([])
const [noNames, setNoNames] = useState([])
const [agreeNames, setAgreeNames] = useState([])

useEffect(() => {
    let nameHold = []
    
    //Sorts session names into yes/no/agreed
    if(user && (session.length > 0)){

        //grabs yes names
        for(let i = 0; i < session.length; i++){
            if(session[i].parent1_id === user.pk && session[i].parent_1_choice === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    'popularity': session[i].baby_name_id.popularity,
                    })
            }
            else if(session[i].parent2_id === user.pk && session[i].parent_2_choice === 'y'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    'popularity': session[i].baby_name_id.popularity,
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
                    'popularity': session[i].baby_name_id.popularity,
                    })
            }
            else if(session[i].parent2_id === user.pk && session[i].parent_2_choice === 'n'){
                nameHold.push({
                    'name': session[i].baby_name_id.name,
                    'popularity': session[i].baby_name_id.popularity,
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
                    'popularity': session[i].baby_name_id.popularity,
                    })
            }
        }
        setAgreeNames(nameHold)
        nameHold = []
    }
}, [session])


return(
    // This is all terribly ugly and needs to be formatted later
    <div className='row-container'>
    
        <div className='name-table'>
            <h3>Liked Names:</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {yesNames && yesNames.map((yesNames) => (
                        <tr>
                            <th>{yesNames.name}</th>
                            <th>{yesNames.popularity}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <div className='name-table'>
            <h3>Disliked Names:</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {noNames && noNames.map((noNames) => (
                        <tr>
                            <th>{noNames.name}</th>
                            <th>{noNames.popularity}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <div className='name-table'>
            <h3>Agreed Names:</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {agreeNames && agreeNames.map((agreeNames) => (
                        <tr>
                            <th>{agreeNames.name}</th>
                            <th>{agreeNames.popularity}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
)


}