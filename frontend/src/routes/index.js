import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Welcome from '../pages/welcome'
import SignUp from '../pages/SignUp'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Welcome/>
            },
            {
                path : "/home",
                element : <Home/>
            },
            {
                path : "/signup",
                element : <SignUp/>
            }
        ]
    }
])

export default router