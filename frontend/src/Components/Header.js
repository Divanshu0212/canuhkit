import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between bg-[#0a8a3f]'>
        <img src='/LogoMakerCa-1724589494272.png' className='w-20' />
        <div className='flex items-center justify-center gap-3  border-1 border-black'>
          <BiSearch color='white'/>
          <input type='text' placeholder='Search Here' className='bg-[#0a8a3f] outline-[1px] text-white' />
          <button className='bg-red-600 text-white rounded-md p-1'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header