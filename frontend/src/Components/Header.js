import React from 'react'
import { BiSearch } from 'react-icons/bi'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const navigate=useNavigate()

  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : "include"
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
    <div>
      <div className='flex justify-between bg-[#0a8a3f]'>
        <img src='/LogoMakerCa-1724589494272.png' className='w-20' />
        <div className='flex items-center justify-center gap-3  border-1 border-black'>
          <BiSearch color='white' />
          <input type='text' placeholder='Search Here' className='bg-[#0a8a3f] outline-[1px] text-white' />
          <button className='bg-red-600 text-white rounded-md p-1'>Search</button>
        </div>
      </div>
      <div>
        {
          user?._id && (
            <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
          )
        }
      </div>
    </div>
  )
}

export default Header