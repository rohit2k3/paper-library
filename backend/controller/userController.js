const errorHandler = require('../utils/errorHandler');
const asyncError = require("../middleware/asyncError");
const userModel = require('../models/userModel');
const bcryptjs = require("bcryptjs");
const { json } = require('body-parser');

exports.createUser = asyncError(async (req,res,next) => {
    const {name, email, password} = req.body;
    if (!email || !password || !name) {
        return next(new errorHandler("Please fill name, email and password", 400))
    }
    const registerData = await userModel.create({
        name,
        email,
        password
    })
    res.status(201).json({
        status:true,
        message:"User Registered Successfully"
    })
});

exports.loginUser = asyncError(async (req,res,next) => {
    const {email , password} = req.body;
    if (!email || !password) {
        return next(new errorHandler("Please fill email and password", 400))
    }

    const loginData = await userModel.findOne({email});
    if (!loginData) {
        return next(new errorHandler("Invalid Details", 401))
    }

    const passCheck = await bcryptjs.compare(password, loginData.password);
    if (!passCheck) {
        return next(new errorHandler("Invalid Details", 401))
    }
    const jwttoken = loginData.generateJWT();

    res.status(200).cookie("token",jwttoken,{
        expiresIn: new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
    httpOnly: true,
    secure: true,
    sameSite: "none",
    }).json({
        status:true,
        message:"Login Successfully",
        token:jwttoken
    })
});

//logout

exports.logoutUser = asyncError( async (req,res,next) => {
    res.cookie("token", null , {
        expires: new Date(Date.now()),
        HttpOnly:true
    }).status(200).json({
        status:true,
        message:"Logout Successfully"
    })
});

//get User detail
exports.userDetail = asyncError( async (req,res,next) => {
    const userDetail = await userModel.findById(req.user._id);
    if (!userDetail) {
        next( new errorHandler("User not login",403));
    }
    res.status(200).json({
        status:true,
        data:userDetail,
        message:`Welcome, ${userDetail.name}`

    })
})
