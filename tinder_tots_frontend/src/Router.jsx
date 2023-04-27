import App from "./App";
import { createHashRouter } from "react-router-dom"
import { Authenticate } from "./pages/Authenticate";
// import { Login } from "./pages/Login"
// import { Register } from "./pages/Register"
import { Homepage} from "./pages/Homepage"
import { Setup } from "./components/Setup"
import { Namepage } from "./pages/Namepage";

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    
    children: [
        
        //changed things up to have a single authentication page that handles both logging in an registering.  Leaving this commented out in case I decide I don't like it.
        // {
        //     index: true,
        //     element: <Login />
        // },
        // {
        //     path: '/register/',
        //     element: <Register />
        // },
        {
            index: true,
            element: <Authenticate />
        },
        {
            path: '/home/',
            element: <Homepage />,
            
        },
        {
            path: '/setup/',
            element: <Setup />
        },
        {
            path: '/names/',
            element: <Namepage />
        }
    ]
}])

export default Router