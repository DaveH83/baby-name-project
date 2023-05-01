import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, NameContext } from "../App"
import { updateSession, getNicknames } from "../NameUtilities"

export const Namepage = () => {

    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    const {nameList, setNameList} = useContext(NameContext)
    const [updatedNames, setUpdatedNames] = useState([])
    const [index, setIndex] = useState(null)
    const [displayName, setDisplayName] = useState(null)
    const [nicknames, setNicknames] = useState(null)

    
    const updateSessionNames = []
    const theEnd = 'You have reached the end of the name database.  Impressive!'
    
   // Set index to 0 to trigger displayName useEffect
    useEffect(() => {
        if(nameList.length > 0){
            setIndex(0)
        }
    }, [nameList])

    // set displayName variable to display single name from DB at a time, based on index
    useEffect(() => {
        if(nameList.length > 0 && index < nameList.length){
            setDisplayName(nameList[index].name)
            // console.log(index, nameList.length)
        }else if(index >= nameList.length - 1){
            setDisplayName(theEnd)
        }
    }, [index])
    
    // send API call to retrieve list of common nicknames for name being displayed
    useEffect(() => {
        if (displayName && displayName != theEnd){
            const retrieveNicknames = async (displayName, user) => {
                setNicknames(await getNicknames(displayName, user))
            }
            retrieveNicknames(displayName, user)
        }

    }, [displayName])
    


    const likeName = (displayName) => {
        // console.log('liked the name ', displayName)
        
        if(nameList.length > 0){
            
            setIndex(index + 1)
            updateSessionNames.push({
                'name': displayName,
                'session': user.session_id,
                'parent': user.parent_num,
                'user': user,
                'choice': 'y',
            })
            updateSession(updateSessionNames)
        }
    }

    const dislikeName = (displayName) => {
        // console.log('disliked the name ', displayName)

        if(nameList.length > 0){
            
            setIndex(index + 1)
            updateSessionNames.push({
                'name': displayName,
                'session': user.session_id,
                'parent': user.parent_num,
                'user': user,
                'choice': 'n',
            })
            updateSession(updateSessionNames)
        }
    }

    return(
        <div className='top-container'>
           
           <div className='name-nickname'>
                <div className='display-name'><h1>{displayName}</h1><hr/></div>
                {displayName != theEnd && <div>
                    <h4>NICKNAMES:</h4>
                    <br/>
                    <ul className='nicknames'>
                    {nicknames && nicknames.names.map((names) => (
                    <li><span>{names}</span></li>
                    ))}
                    </ul>
                </div>}
           </div>
                { displayName != theEnd &&
                    <div className='like-dislike'>
                        <Button variant='success' onClick={() => likeName(displayName)}>Like</Button>
                        <Button variant='danger' onClick={() => dislikeName(displayName)}>Dislike</Button>
                    </div>
                   
                }
           
        </div>


    )
}