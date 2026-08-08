const express = require('express');
const authUser = require('../middleware/authMiddleware');
const { findPod , getMyPod} = require("../controllers/setuPodController");
const router = express.Router();


/**
 * /**
 * @route get /pod/find
 * @description  find my pod
 * @access Public 
 */
 router.get("/find", authUser, findPod);
 
 /**
 * @route Post /pod/getPod
 * @description get my pod
 * @access Public 
 */
 router.get("/getPod" , authUser , getMyPod);



 module.exports = router;