import React, { useState,useContext,useEffect } from 'react'
import Context from '../context'
import { useSelector } from 'react-redux'

const ReviewCard = ({
    data,
    fetchData
}) => {
    const {fetchUserDetails} = useContext(Context)
    const user=useSelector(state=>state?.user?.user)
    useEffect(()=>{
        fetchUserDetails()
    },[])
    
    return (
        <div>
            <div class="mb-4">
                <p class="text-green-400 font-semibold">{data.name}</p>
                <p class="text-gray-300">{data.comment}</p>
            </div>

            <div class="mb-4">
                <p class="text-green-400 font-semibold">GamerGirl:</p>
                <p class="text-gray-300">I love the graphics! The details are stunning.</p>
            </div>
        </div>
    )
}

export default ReviewCard