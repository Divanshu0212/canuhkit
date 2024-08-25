import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Welcome from '../pages/welcome'

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
            }
        ]
    }
])

export default router