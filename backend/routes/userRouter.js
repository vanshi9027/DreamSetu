const express = require('express');
const router = express.Router();
const {registerUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");


/**
 * @route POST /auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerUser);
/**
 * @route POST /auth/login
 * @description login user with email and password
 */
router.post("/login", loginUser);

module.exports = router;
