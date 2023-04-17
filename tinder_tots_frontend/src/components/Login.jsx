import { useContext, useState } from "react"
import { UserContext } from "../App"
import { loginUser } from "../Utilities"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)

    
    return(
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
    )
}