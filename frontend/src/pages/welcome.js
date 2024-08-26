import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-black h-[100vh]'>
      <div className='flex gap-5 justify-end'>
        <div className='bg-[#2ADC35] right-0 rounded-md px-3 text-2xl py-2 mt-3 font-mono transition-all font-semibold cursor-pointer hover:bg-[#138d1b]' onClick={()=>navigate('/login')}>
          Login
        </div>
        <div className='bg-[#2ADC35] right-0 rounded-md px-3 text-2xl py-2 mt-3 font-mono transition-all font-semibold cursor-pointer hover:bg-[#138d1b]' onClick={()=>navigate('/signup')}>
          SignUp
        </div>
      </div>
      <div className='flex justify-center items-center size-100'>
        <img src="/LogoMakerCa-1724589494272.png" alt=""
          className='size-[700px] animate-pulse' />
      </div>
      <p className='text-[#2ADC35] text-center relative bottom-12 text-3xl font-bold font-mono'>Squad Up And Chill With Your Fellow Dawgs!</p>

    </div>
  )
}

export default Welcome

    