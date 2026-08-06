const podSchema = require("../models/podSchema");

const memberSchema = require("../models/Members");


const findPod = async (req, res) =>{
 try{ // Get the logged-in user's ID from Auth Middleware
const userId = req.user.id;


// Fetch the logged-in user's profile
const user = await UserModel.findById(userId);


// Check whether the user exists
if (!user) {
    return res.status(404).json({
        success: false,
        message: "User not found."
    });
}

// Check whether the user completed their profile
if (!user.profileCompleted) {
    return res.status(400).json({
        success: false,
        message: "Please complete your profile first."
    });
}

// Check whether the user completed the skill assessment
if (!user.skillLevel) {
    return res.status(400).json({
        success: false,
        message: "Please complete the skill assessment first."
    });
}

// Check if the user is already part of an active pod
const existingPod = await PodModel.findOne({
    "members.user": userId,
    status: {
        $in: ["Waiting", "Active"]
    }
});

if (existingPod) {
    return res.status(400).json({
        success: false,
        message: "You are already a member of an active Setu Pod."
    });
}
 }catch(err){
  res.status(400).json({
    success : false,
    message : err.message,
  });
 }


}