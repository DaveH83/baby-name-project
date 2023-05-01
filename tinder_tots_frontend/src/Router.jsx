import App from "./App";
import { createHashRouter } from "react-router-dom"
import { Authenticate } from "./pages/Authenticate";
import { Homepage} from "./pages/Homepage"
import { Setup } from "./components/Setup"
import { Namepage } from "./pages/Namepage";
import Rankpage from "./pages/Rankpage";

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    
    children: [
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
        },
        {
            path: '/rank/',
            element: <Rankpage />
        }
    ]
}])

export default Router