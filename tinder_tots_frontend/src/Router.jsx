import App from "./App";
import { createHashRouter } from "react-router-dom";
import { Login } from "./components/Login"
import { Register } from "./components/Register"

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
    ]
}])

export default Router