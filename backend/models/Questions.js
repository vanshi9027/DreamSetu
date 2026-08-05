const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  { question: {
    type : String,
    required: true,


   },
   options : {
    type: [String],
    required : true,

   },
   correctAnswer :{
    type: Number,
    required: true,
   },

   domain : {
    type: String,
    enum : ["Frontend" , "Backend" , "Java" , "Python" , "Ai" , "DSA" , ],
    required : true,
   },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true
},
   marks : {
    type: Number,
    required : true,


   },
   isActive:{
    type : Boolean,
    default : true,
   },



  },
  {
    timestamps : true,
  }
)

module.exports = mongoose.model("Question" , QuestionSchema);