import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { getDadJoke } from "../Utilities"
import { Login, Register } from "../components/Authentication"

export const Authenticate = () => {

    const [dadJoke, setDadJoke] = useState("")
    const [registered, setRegistered] = useState(true)
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    // A little dad joke action to brighten the user's day
    useEffect(() => {
        const awaitDadJoke = async () => {
            setDadJoke(await getDadJoke())
        }
        awaitDadJoke()
        
      }, []);

    useEffect(() => {
        if (user){
            console.log(user)
        }
    }, [user])



    return(
    <div className='top-container'>
            {registered && <div className='authenticate-container'>
                <Login registered = {registered} setRegistered = {setRegistered}/>
            </div>}

            {!registered && <div className='authenticate-container'>

                <Register registered = {registered} setRegistered = {setRegistered} />
            </div>}

        <div className="dadjoke"><h3>{dadJoke}</h3></div>
    </div>
    )
}