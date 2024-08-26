import React from 'react'
import { BiSearch } from 'react-icons/bi'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const navigate = useNavigate()

  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include"
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate('/')
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <div class="flex top-0 z-40 w-full justify-between items-center py-4 px-8 absolute bg-gradient-to-b from-gray-900 to-black">
      <img class="w-24 h-24 rounded-full top-left-circle" src='/LogoMakerCa-1724589494272.png' onClick={navigate("/home")}/>

      <div class="flex justify-center items-center w-full">
        <input type="text" placeholder="Discover and explore your favorite games right here......." class="w-3/4 p-2 rounded-lg text-black placeholder-green-500"/>
          <button class="ml-2 bg-green-500 text-black p-2 rounded-lg font-semibold font-mono">Search</button>
      </div>
      {
        user?._id && (<button onClick={handleLogout} class="bg-green-500 text-black p-2 rounded-lg font-semibold font-mono">Logout</button>)}
    </div>
  )
}

export default Header