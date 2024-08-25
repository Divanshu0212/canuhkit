import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Welcome from '../pages/welcome'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

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
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
])

export default router