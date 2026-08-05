const QuesModel = require("../models/Questions");
const AssessModel = require("../models/Assessment");
const UserModel = require("../models/User");
// //

// Business Logic Meaning

// Business Logic = The actual work the API performs to solve a business requirement.

// For your API, the requirement is:

// "When a student opens the assessment page, show the first 10 active questions without revealing the answers."

// Everything inside your controller is written to achieve that goal.//

const getQuestions = async (req , res) =>{
  try{
  const questions = await QuesModel.find({
    isActive : true,
  }) .select("-correctAnswer")
  .limit(10);

  return res.status(200).json({
    success: true,
    count: questions.length,
    questions
});
  }catch(err){
    console.log(err);
  }

}

const submitAssessment = async (req, res) =>{
   const {answers} = req.body;
// 1. validate answer check exits 
   if(!answers || answers.length === 0){
          return res.status(400).json({
        success: false,
        message: "Answers are required."
    });
   }

    // 2. check whose user score marks means Login user
   //Now we know which user submitted the assessment.
const userId = req.user.id;

//. 3. // Fetch all questions submitted by the user from the database
const questions = await QuesModel.find({
    _id: {
        // Extract all question IDs from the submitted answers
        $in: answers.map(answer => answer.questionId)
    }
});

let score = 0;

// Compare each database question with the user's submitted answer
for (const question of questions) {

    // Find the user's answer for the current question
    const userAnswer = answers.find(
        answer => answer.questionId === question._id.toString()
    );

    // If the answer exists and is correct, add its marks to the total score
    if (
        userAnswer &&
        question.correctAnswer === userAnswer.selectedOption
    ) {
        score += question.marks;
    }
}

// Decide the user's skill level based on the final score
let skillLevel;

if (score <= 4) {
    skillLevel = "Beginner";
} else if (score <= 7) {
    skillLevel = "Intermediate";
} else {
    skillLevel = "Expert";
}


// save the assessment result int the database
const Assessment = new AssessModel({
  
  user :  userId,
  answers,
  score,
  skillLevel,
  completedAt : new Date()
               
});



await Assessment.save();

// Fetch the logged-in user from the database
const user = await UserModel.findById(userId);

// Update only if the new score is better
if (score > user.bestAssessmentScore) {
   // Update the user's current skill level
    user.skillLevel = skillLevel;

    // Update the user's best assessment score
    user.bestAssessmentScore = score;

    // Save the updated user profile
    await user.save();

}


    
    res.status(200).json({
    success: true,
    message: "Assessment submitted successfully.",
    score,
    skillLevel
});

}
  

module.exports = {
    getQuestions,
    submitAssessment,
};