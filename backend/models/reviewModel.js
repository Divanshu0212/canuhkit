const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    gameId : String,
    userId : String,
    comment : String,
    rating : Number
},{
    timestamps : true
})

const reviewModel = mongoose.model("reviews",reviewSchema)

module.exports = reviewModel