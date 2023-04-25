import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { loginUser, getDadJoke, registerUser } from "../Utilities"

export const Authenticate = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [dadJoke, setDadJoke] = useState("")
    const [name, setName] = useState("")
    const [registered, setRegistered] = useState(true)
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

// A little dad joke action to brighten the user's day
    useEffect(() => {
        const awaitDadJoke = async () => {
            setDadJoke(await getDadJoke())
        }
        awaitDadJoke()
        
      }, []);

    return(
    <>
        {registered && <div>       
            
            <form
            onSubmit={(e) => [
                e.preventDefault(),
                loginUser(email, password, setUser),
                setEmail(""),
                setPassword(""),
                navigate('/home/')
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
            <h4>Don't have an account?  Click <a onClick={(e) => setRegistered(false)}>HERE</a> to Register!</h4>
            <h3>{dadJoke}</h3>
        
        </div>}

        {!registered && <div>

            <form
                onSubmit={(e) => [
                    e.preventDefault(),
                    registerUser(name, email, password),
                    setEmail(""),
                    setPassword(""),
                    setName(""),
                    setRegistered(true)
                ]}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <h3>Sign Up</h3>
                <input
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <input type="submit" value="Register" />
            </form>
        </div>
        }
    </>
    )
}