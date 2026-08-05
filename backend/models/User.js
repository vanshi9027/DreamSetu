const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(

{
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    profileImage: {
        type: String,
        default: ""
    },

    college: {
        type: String,
        default: ""
    },

    branch: {
        type: String,
        default: ""
    },

    year: {
        type: Number
    },

    bio: {
        type: String,
        default: ""
    },

    preferredDomain: {
        type: String,
        default: ""
    },

    preferredLanguage: {
        type: String,
        default: ""
    },

    weeklyAvailability: {
        type: Number
    },

    skillLevel: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        default: "Beginner"
    },
    bestAssessmentScore: {
    type: Number,
    default: 0
}
},
{ timestamps: true }
);


module.exports = mongoose.model("User" , userSchema);




