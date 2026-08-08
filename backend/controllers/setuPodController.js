const podModel = require("../models/podSchema");

const memberModel= require("../models/Members");

const userModel = require("../models/User");


const findPod = async (req, res) =>{
 try{ // Get the logged-in user's ID from Auth Middleware
const userId = req.user.id;


// Fetch the logged-in user's profile
const user = await userModel.findById(userId);


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
const existingPod = await podModel.findOne({
    "members.user": userId,
    status: {
        $in: ["Waiting", "Active"]
    }
});
console.log("No existing pod found");

if (existingPod) {
    return res.status(400).json({
        success: false,
        message: "You are already a member of an active Setu Pod."
    });
}
console.log("No existing pod found");

return res.status(200).json({
    success: true,
    message: "No existing pod found. Ready to find a pod."
});
 }catch(err){
    console.log(err);
//   res.status(400).json({
//     success : false,
//     message : err.message,
//   });
 }


}



const getMyPod = async (req, res) =>{
try{
    const userId = req.user.id;


     const user = await userModel.findById(userId);

    if(!user){
      return   res.status(404).json({
           success: false,
            message :" User not Found",
        });

    }

    
   const pod = await podModel.findOne({
       "members.user" : userId,
       status : {$in : ["Waiting" , "Active"]

       }
   

});

  if(!pod){
   return  res.status(404).json({
       success: false,
        message: "Not a member of any active pod"
    });
  }

res.status(200).json({   success: true,
    message : "welcome to your pod",
    pod :{
        PodName : pod.podName,
        domain : pod.domain,
        members : pod.members,
        status : pod.status,
        maxMembers : pod.maxMembers,
    }






})
}catch(err){
    console.log(err);
//    res.status(500).json({
//     success : false,
//     message : err.message,
//    });
}



}

module.exports = {
    findPod,
    getMyPod,
}
