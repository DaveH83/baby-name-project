import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { loginUser, getDadJoke } from "../Utilities"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)
    const [dadJoke, setDadJoke] = useState("")

    const navigate = useNavigate()

// A little dad joke action to brighten the user's day
    useEffect(() => {
        const awaitDadJoke = async () => {
            setDadJoke(await getDadJoke())
        }
        awaitDadJoke()
        console.log(dadJoke)
      }, []);

      
      

    return(
    <>
        <form
        onSubmit={(e) => [
            e.preventDefault(),
            loginUser(email, password, setUser),
            setEmail(""),
            setPassword(""),
        ]}
        >
        <h3>Log In</h3>
        <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Log In" />
        </form>
        <h3>{dadJoke}</h3>
    </>
    )
}