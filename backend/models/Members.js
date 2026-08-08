const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MemberSchema = new Schema(
  {
    user : { 
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true,

  },
  SkillLevel : {
    type: String,
    enum : ["Beginner" , "Intermediate" , "Expert"],
    required : true,

  },

  joinedAt : {
    type: Date,
    default : Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected", "Left"],
    default: "Pending",
},

}
)