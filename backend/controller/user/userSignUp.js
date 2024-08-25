const userModel = require("../../models/userModel")

const bcrypt = require('bcryptjs');

async function userSignUpController(req,res){
    try{
        const { email, password, name } = req.body

        const user = await userModel.findOne({email})

        if (user){
            throw new Error("Already user exists")
        }
        if (!email){
            throw new Error("Please Provide email")
        }
        if (!password){
            throw new Error("Please Provide password")
        }
        if (!name){
            throw new Error("Please Provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload ={
            ...req.body,
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Succesfully!!"
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userSignUpController