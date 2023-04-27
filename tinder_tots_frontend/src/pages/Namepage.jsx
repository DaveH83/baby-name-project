import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext, NameContext } from "../App"
import { updateSession } from "../NameUtilities"

export const Namepage = () => {

    const {user} = useContext(UserContext)
    const {session} = useContext(NameContext)
    const {nameList, setNameList} = useContext(NameContext)
    const [updatedNames, setUpdatedNames] = useState([])
    const [index, setIndex] = useState(null)
    const [displayName, setDisplayName] = useState('')

    
    const updateSessionNames = []
    const theEnd = 'You have reached the end of the name database.  Impressive!'
    
   
    useEffect(() => {
        if(nameList.length > 0){
            setIndex(0)
        }
    }, [nameList])


    useEffect(() => {
        if(nameList.length > 0 && index < nameList.length){

            setDisplayName(nameList[index].name)
        }else if(index >= nameList.length - 1){
            setDisplayName(theEnd)
        }
    }, [index])

    const likeName = (displayName) => {
        console.log('liked the name ', displayName)
        
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
        console.log('disliked the name ', displayName)

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
        <>
            <h3>{displayName}</h3>
            { displayName != theEnd &&
            <>    
                <button onClick={() => likeName(displayName)}>Like</button>
                <button onClick={() => dislikeName(displayName)}>Dislike</button>
            </>
            }
            
        
        
        
        </>


    )
}