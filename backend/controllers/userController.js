
const userModel = require("../models/User.js");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");






/**
 * @name registerUser
 * @description register a new user expects username email and password in the request
 *@access Public
 */
 async function  registerUser(req, res){
    const { username , password , email} = req.body;
    // 1. check missing fields
    if(! username || !password || !email ){
        return res.status(400).json({
            message: " please provide username email and password"
        });

    }

    // 2. check if user already exits
    // using find method to access user in db 
    const existinguser = await userModel.findOne({
        $or : [{email} ,{password}]  // check based on email and password exit condtion

    });

    if(existinguser){
        return res.status(400).json({
            message : "Account already exists with this email address"
        })
    }

    const hash = await bcrypt.hash(password, 10)
    //  3. create new user
    const user = await userModel.create({
        username ,
        password : hash,
        email,
        // profile_image,
    });


        // Generate JWT

    const token = generateToken(user._id);

         // Send cookie
    res.cookie("token" , token);
    

        // 4. Success response
    res.status(201).json({
        message : "User registered successfully",
        user : {
            id : user._id,
            username : user.username,
            email: user.email,

        }
    });


 }

/**
 * @name loginUser
 * @description login a  user expects username email and password in the request body
 *@access Public
 * 
 */

 async function loginUser(req, res){
    const {email , password} = req.body;

    const user = await userModel.findOne({email});
// check user exits 
    if(!user){
        return res.status(400).json({
            message : "Invalid email or password"
        })
    }

    // password validate

    const passwordvalid = await bcrypt.compare(password , user.password);

    if(!passwordvalid){
         return res.status(400).json({
            message : "Invalid  password"
        })

    }

    const token = generateToken(user._id);
    res.cookie("token" , token);
    res.status(200).json({
        message : " User loggedIn successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email,
        

        }

    })
 }  
/** 
 * @name logoutUser
 * @description clear token from user cookies and add 
 *@access Public
 */ 
 
 async function logoutUser(req, res){
    

    
    res.clearCookie("token");
    return res.status(200).json({
    success: true,
    message: "Logged out successfully"
});
 }


 /**
  * @name Getme 
  * @description get the current logged in user delails
  * @access private
  */
  


 async function getMe(req, res){

    const user = await userModel.findById(req.user.id);
    res.status(200).json({
        message:"User details fetched successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }

    })

 }
 module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe,
 }