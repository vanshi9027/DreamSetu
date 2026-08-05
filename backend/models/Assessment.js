const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AssessmentSchema = new Schema(
  {
    user : {
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true,
    },
    answers: [
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true
    },
    selectedOption: {
      type: Number,
      required: true
    }
  }
],
    score : { 
      type: Number,
      required : true,
    },
    skillLevel : {
      type : String,
      enum : ["Beginner" , "Intermediate" , "Expert"], 
      required : true,
    },
    completedAt :{
      type : Date,
      default : Date.now,
    },
}
)

module.exports = mongoose.model("Assessment" , AssessmentSchema);