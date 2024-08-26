import React, { useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { FaRegStar } from "react-icons/fa";

const AddReview = ({
    fetchData
}) => {
    const [data,setData] = useState({
        gameId : "",
        userId : "",
        comment : "",
        rating : ""
    })



    const handleChange = (e) => {
        const {name, value} = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const response = await fetch(SummaryApi.addReview.url,{
            method : SummaryApi.addReview.method,
            credentials : "include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const responseData = await response.json()

        if(responseData.success){
            toast.success(responseData?.message)
            onClose()
            fetchData()
        }

        if(responseData.error){
            toast.error(responseData?.message)
        }

    }
  return (
    <div className='text-white fixed w-full h-full top-0 left-0 flex justify-center items-center backdrop-blur-sm'>
        <div className='bg-black p-4 rounded-3xl w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

            <div className='flex justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Add Comment</h2>
            </div>


            <form className='grid p-4 gap-2 overflow-y-scroll h-full scrollbar-none' onSubmit={handleSubmit}>

                <label htmlFor='comment' className='mt-3'>Comment :</label>
                <textarea 
                    className='h-28 bg-slate-900 border resize-none px-3 py-2 rounded-xl' 
                    placeholder='enter comment' 
                    rows={3} cols={5} 
                    value={data.comment}
                    name='comment'
                    onChange={handleChange}
                >
                </textarea>

                <label htmlFor='rating' className='mt-3'>Rating :</label>
                <FaRegStar/>
                <FaRegStar/>
                <FaRegStar/>
                <FaRegStar/>
                <FaRegStar/>

                <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Post Comment</button>
            </form>
            
        </div>

    </div>
  )
}

export default AddReview