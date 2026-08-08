const mongoose = require("mongoose");
const MemberSchema = require("../models/Members");

const Schema = mongoose.Schema;

const PodSchema = new Schema({
  podName : {
    type: String,
    required : true,
    trim : true,
  },

 
  domain: {
    type: String,
    enum: ["Frontend", "Backend", "Java", "Python", "AI", "DSA"],
    required: true,
},
members: [MemberSchema],
status: {
    type: String,
    enum: ["Waiting", "Active", "Completed", "Expired"],
    default: "Waiting",
},
maxMembers: {
    type: Number,
    default: 3,
    min: 2
},
createdBy: {
    type: String,
    enum: ["AI", "Admin"],
    default: "AI",
},
},
{
    timestamps: true
}
)

module.exports = mongoose.model("pod" , PodSchema);