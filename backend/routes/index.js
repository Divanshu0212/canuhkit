const express = require('express')
const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')

const router = express.Router()


router.post("/signup",userSignUpController)
router.post("/login",userSignInController)


module.exports = router