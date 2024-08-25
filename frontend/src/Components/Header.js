import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <div>
        <div>
          <img src='/LogoMakerCa-1724589494272.png' className='w-18'/>
          <BiSearch/>
          <input type='text' placeholder='Search Here'/>
        </div>
    </div>
  )
}

export default Header