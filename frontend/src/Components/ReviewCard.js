import React, { useState } from 'react'

const ReviewCard = ({
    data
}) => {
    
    return (
        <div>
            <div class="mb-4">
                <p class="text-green-400 font-semibold"></p>
                <p class="text-gray-300">This game looks amazing! Can't wait to try it out.</p>
            </div>

            <div class="mb-4">
                <p class="text-green-400 font-semibold">GamerGirl:</p>
                <p class="text-gray-300">I love the graphics! The details are stunning.</p>
            </div>
        </div>
    )
}

export default ReviewCard