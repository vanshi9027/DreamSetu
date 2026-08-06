const express = require('express');
const authUser = require('../middleware/authMiddleware');
const router = express.Router();


/**
 * /**
 * @route Post /pod/find
 * @description  find my pod
 * @access Public 
 */
 router.post("/find", authUser, findPod);


 module.exports = router;