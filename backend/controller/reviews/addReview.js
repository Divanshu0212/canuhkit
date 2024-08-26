const reviewModel = require("../../models/reviewModel")

async function addReview(req,res){
    try{

        const uploadReview = new reviewModel(req.body)
        const saveReview = await uploadReview.save()

        res.json({
            message : "Review Uploaded Successfully",
            data : saveReview,
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

module.exports = addReview