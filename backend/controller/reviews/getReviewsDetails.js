const reviewModel = require("../../models/reviewModel")

const getReviewsDetails = async(req,res) => {
    try{
        const { reviewsId } = req?.body

        const reviews = await reviewModel.findById(reviewsId)

        res.json({
            message : "All the Reviews",
            data : reviews,
            success : true,
            error : false
        })

    }catch(err){
        res.status(400).json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getReviewsDetails