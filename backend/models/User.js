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

weeklyAvailability: [
  {
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      required: true
    },

    startTime: {
      type: String,
      required: true
    },

    endTime: {
      type: String,
      required: true
    }
  }
],

    skillLevel: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        default: "Beginner"
    },
    profileCompleted : {
        type : Boolean,
        default : false
    },
    bestAssessmentScore: {
    type: Number,
    default: 0
}
},
{ timestamps: true }
);


module.exports = mongoose.model("User" , userSchema);




