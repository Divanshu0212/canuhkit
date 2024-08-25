import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import image1 from '../ss images/image1.png'
import image2 from '../ss images/image2.png'
import image3 from '../ss images/image3.png'
import image4 from '../ss images/image4.png'
import { FaAngleRight } from 'react-icons/fa6'
import { FaAngleLeft } from 'react-icons/fa6'
import { useEffect, useState } from "react";
import { category_list } from '../assets/assets.js'

const Home = () => {

  const [currentImage, setCurrentImage] = useState(0)

  const desktopImages = [
    image1,
    image2,
    image3,
    image4,
  ]
  const nextImage = () => {
    if (desktopImages.length > (currentImage + 1)) {
      setCurrentImage(preve => preve + 1)
    }
  }

  const previousImage = () => {
    setCurrentImage(preve => preve - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length > (currentImage + 1)) {
        nextImage()
      } else {
        setCurrentImage(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <div>
      <Header />
      <div className='container min-w-full mx-auto px-4 group bg-[#1c1c1c] h-[100%] '>
        <div className='h-64 md:h-72 relative'>
          <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
            <div className='w-full ml-[-100px] pt-12 mt-10 flex justify-between text-2xl md:text-5xl'>
              <button onClick={previousImage} className='text-slate-400 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'><FaAngleLeft /></button>
              <button onClick={nextImage} className='text-slate-400 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'><FaAngleRight /></button>
            </div>
          </div>
          <div className='hidden md:flex h-[400px] w-[105rem] overflow-hidden'>
            {
              desktopImages.map((imageURL, index) => {
                return (
                  <div className='h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    <img src={imageURL} className='w-[60%] h-full' />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="flex gap-6 bg-[#1c1c1c]">
        {category_list.map((item, index) => {
          return (
            <div className='mt-36 size-32'>
              <img className='rounded-full' src={item.category_image} />
              <p className='bg-transparent text-white text-center'>{item.category_name}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home

