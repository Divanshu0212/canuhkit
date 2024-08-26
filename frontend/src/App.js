
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from './context';
import SummaryApi from './common';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import {useEffect} from 'react';

function App() {
  const dispatch=useDispatch()

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi)
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails
      }}>
      <ToastContainer
        position='top-center'
      />
      <Outlet/>
      </Context.Provider>
    </>
  );
}

export default App;
