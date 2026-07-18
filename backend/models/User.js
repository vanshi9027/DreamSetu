const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName : {
        type: String,
        required : true,
        unqiue :[true, " username  already taken"],

    },
    password :{
        type: String,
        required : true,
        

    },

    email : {
        type: String, 
        required : true,
         unqiue :[true, "Account already exists with this email address"],


    },

    college : {
        type: String,
        default: "",

    },
    degree :{
        type: String,

    },
    branch : {
        type: String,
    },
    year: {
        type: Number,
    },
    skills: {
        type : [String],
        default : [],

    },
    interests : {
        type: [String],
        default : [],
    },
    careerGoal : {
        type: String,

    },
    experienceLevel : {
        type: String,
        default : "Beginner"

    },
    availability :{
        type: [String],
        default : [],

    },
    preferredLanguage : {
        type: String,
        default : "English"

    },
    github : {
        type: String,

    },
    linkedin : {
        type: String,
         default: "",

    },
    profileCompleted :{
        type: Boolean,
        default : false,
    },
    
    // timestamps: true;
    




    // profile_image:{
    //     type: String,
    //     default : "",

    // }



});

module.exports = mongoose.model("User" , userSchema);




