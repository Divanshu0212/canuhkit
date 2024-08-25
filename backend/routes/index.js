const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSigIn")


router.post("/signup",userSignUpController)
router.post("/login",userSignInController)


module.exports = router