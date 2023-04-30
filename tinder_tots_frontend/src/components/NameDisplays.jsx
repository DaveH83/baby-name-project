import CardGroup from 'react-bootstrap/CardGroup';
import DislikedNames from "../components/DislikedNames"
import LikedNames from "../components/LikedNames"
import AgreedNames from "../components/AgreedNames"
import ManualNames from "../components/ManualNames"

export default function NameDisplays(){


// const {user} = useContext(UserContext)
// const {session} = useContext(NameContext)


return(
    
    <div className='name-display-container'>
        
            <div className='name-item'><DislikedNames /></div>
            <div className='name-item'><LikedNames /></div>
            <div className='name-item'><AgreedNames /></div>
            <div className='name-item'><ManualNames /></div>
        


    </div>
    
)


}