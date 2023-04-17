import { useEffect, useState } from "react"
import { registerUser } from "../Utilities"



export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        
        <form
                onSubmit={(e) => [
                    e.preventDefault(),
                    registerUser(name, email, password),
                    setEmail(""),
                    setPassword(""),
                    setName(""),
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
        
    )
}