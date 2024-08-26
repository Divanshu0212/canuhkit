const reviewModel = require("../../models/reviewModel")

const getReviewsController =async (req,res)=>{
    try{
        const allReviews = await reviewModel.find().sort({ createdAt : -1 })
        
        res.json({
            message : "All Reviews",
            data : allReviews,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getReviewsController