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
import { category_list, games_list } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import SummaryApi from '../common/index.js'

const Home = async() => {

  const [currentImage, setCurrentImage] = useState(0)

  const items = games_list

  const dataResponse = await fetch(SummaryApi.current_user.url, {
    method: SummaryApi.current_user.method,
    credentials : "include",
    headers: {
        "content-type": "application/json"
    }
})

const dataApi = await dataResponse.json()
console.log(dataApi);


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
    <div className='scrollbar-none'>
      <Header />
      <div className='container min-w-full mx-auto px-4 group bg-[#1c1c1c] h-[100%] '>
        <div className='h-64 md:h-72 relative'>
          <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
            <div className='w-full ml-[-100px] pt-12 mt-10 flex justify-between text-2xl md:text-5xl'>
              <button onClick={previousImage} className='text-slate-400 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'><FaAngleLeft /></button>
              <button onClick={nextImage} className='text-slate-400 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'><FaAngleRight /></button>
            </div>
          </div>
          <div className='flex h-[400px] w-full overflow-hidden'>
            {
              desktopImages.map((imageURL, index) => {
                return (
                  <div className='h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    <img src={imageURL} className='w-[100%] h-full' />
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
      <div>
        <ul>
          {items.map(item => (
            <li key={item.gameId}>
              <Link to={`/game/${item.gameId}`}>{item.game_name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home

