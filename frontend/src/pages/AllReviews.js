import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import ReviewCard from '../Components/ReviewCard'

const AllReviews = () => {

  const [allReviews,setAllReviews] = useState([])

  const fetchAllReviews = async() => {
    const response = await fetch(SummaryApi.allReviews.url)
    const dataResponse = await response.json()

    setAllReviews(dataResponse?.data || [] )

    console.log(dataResponse);
    
  }

  useEffect(()=>{
    fetchAllReviews()
  },[])

  return (
    <div>
        <div className='flex items-center flex-wrap gap-5 py-5 overflow-y-scroll scrollbar-none'>
          {
            allReviews.map((reviews,index)=>{
              return(
                  <ReviewCard data={reviews} key={index+'allReviews'} fetchData={fetchAllReviews}/>
              )
            })
          }
        </div>
        
    </div>
  )
}

export default AllReviews