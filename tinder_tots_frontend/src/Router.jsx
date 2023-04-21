import App from "./App";
import { createHashRouter } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Homepage } from "./pages/Homepage"
import { Setup } from "./components/Setup"

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <Login />
        },
        {
            path: '/register/',
            element: <Register />
        },
        {
            path: '/home/',
            element: <Homepage />
        },
        {
            path: '/setup/',
            element: <Setup />
        },
    ]
}])

export default Router