const express = require('express');
const router = express.Router()
const { getQuestions } = require("../controllers/assessmentController");
const {submitAssessment} = require("../controllers/assessmentController");
const authUser = require("../middleware/authMiddleware");






/**
 * @route GET /assessment/question
 * @description  Get the questions 
 * @access Public 
 */

router.get("/question" , getQuestions);

/**
 * @route Post /assessment/submit
 * @description  submit answer 
 * @access Public 
 */

router.post("/submit" , authUser, submitAssessment);
module.exports = router;

