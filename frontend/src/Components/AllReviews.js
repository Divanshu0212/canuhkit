import React, { useEffect, useState,useContext } from 'react'
import SummaryApi from '../common'
import ReviewCard from './ReviewCard'
import Context from '../context'

const AllReviews = () => {

  const {fetchUserDetails}=useContext(Context)

  const [allReviews,setAllReviews] = useState([])

  const fetchAllReviews = async() => {
    const response = await fetch(SummaryApi.allReviews.url,{
      method: SummaryApi.allReviews.method
    })
    const dataResponse = await response.json()

    setAllReviews(dataResponse?.data || [] )

    console.log("aryan",dataResponse);
    
  }

  useEffect(()=>{
    fetchAllReviews()
    fetchUserDetails()
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