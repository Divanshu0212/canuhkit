
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }
  return (
    <>
      <ToastContainer
        position='top-center'
      />
      <Outlet/>
    </>
  );
}

export default App;
