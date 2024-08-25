import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-black'>
      <div className='flex gap-5 justify-end'>
        <div className='bg-[#2ECC71] right-0 rounded-md px-3 text-2xl py-2'>
          Login
        </div>
        <div className='bg-[#2ECC71] right-0 rounded-md px-3 text-2xl py-2'>
          Sign Up
        </div>
      </div>
      <div className='flex justify-center items-center size-100'>
        <img src="../../../public/assets/LogoMakerCa-1724567992878.png" alt=""
          className='size-[1000px]' />
      </div>

    </div>
  )
}

export default Welcome

    