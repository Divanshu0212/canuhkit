import React, { useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import './StarRatings.css'

const AddReview = ({gameid}) => {
    const [data, setData] = useState({
        gameId: "",
        userId: "",
        comment: "",
        rating: ""
    })

    const [rating, setRating] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })

    }
    

    const handleRatingChange = (index) => {
        setRating(index)
        data.rating = index
        data.gameId=gameid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(SummaryApi.addReview.url, {
            method: SummaryApi.addReview.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()

        console.log(responseData);


        if (responseData.success) {
            toast.success(responseData?.message)
        }

        if (responseData.error) {
            toast.error(responseData?.message)
        }

    }
    return (
        <form className='grid gap-2 overflow-y-scroll h-full scrollbar-none' onSubmit={handleSubmit}>

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
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (rating) ? "on" : "off"}
                            onClick={()=>handleRatingChange(index)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>

            <button className='px-3 py-2 mt-4 bg-green-500 text-white hover:bg-green-700'>Post Comment</button>
        </form>
    )
}

export default AddReview