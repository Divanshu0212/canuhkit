import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Welcome from '../pages/welcome'
import Login from '../pages/Login'
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
                path :"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            }
        ]
    }
])

export default router