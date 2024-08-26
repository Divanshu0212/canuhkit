const express = require('express')
const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const addReview = require('../controller/reviews/addReview')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user/userDetails.js')
const userLogout = require('../controller/user/userLogout')

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/login",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

router.post("/add-review",authToken,addReview)

module.exports = router