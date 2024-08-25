import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-black h-full'>
      <div className='flex gap-5 justify-end'>
        <div className='bg-[#2ECC71] right-0 rounded-md px-3 text-2xl py-2 mt-3' onClick={()=>navigate('/login')}>
          Login
        </div>
        <div className='bg-[#2ECC71] right-0 rounded-md px-3 text-2xl py-2 mt-3 mr-3' onClick={()=>navigate('/signup')}>
          Sign Up
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src="/LogoMakerCa-1724589494272.png" alt=""/>
      </div>

    </div>
  )
}

export default Welcome

    