const express = require('express');
const router = express.Router();
const {registerUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");
const {logoutUser} = require("../controllers/userController");
const authUser = require("../middleware/authMiddleware");



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

/**
 * @route GET /auth/logout
 * @description  logout user clear token form user cookies
 */

router.get("/logout" , logoutUser);

router.get("/getme" ,  authUser , getMe);
module.exports = router;
