

const userModel = require("../models/User.js");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const updateProfile = async (req, res) =>{
    const user = await userModel.findById(req.user.id);
    if(!user){
        return res.status(404).json({
            success: false,
            message : 'User not found'

        });
    }

        const {
        fullName,
        profileImage,
        college,
        branch,
        year,
        bio,
        preferredDomain,
        preferredLanguage,
        weeklyAvailability,
        skillLevel
    } = req.body;

    if (fullName) user.fullName = fullName;
    if (profileImage) user.profileImage = profileImage;
    if (college) user.college = college;
    if (branch) user.branch = branch;
    if (year) user.year = year;
    if (bio) user.bio = bio;
    if (preferredDomain) user.preferredDomain = preferredDomain;
    if (preferredLanguage) user.preferredLanguage = preferredLanguage;
    if (weeklyAvailability) user.weeklyAvailability = weeklyAvailability;
    if (skillLevel) user.skillLevel = skillLevel;

    await user.save();
    

      res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user
    });
}

module.exports = {
  updateProfile,
}
