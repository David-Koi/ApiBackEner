const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verify = require('../middleware/verify');
const resController = require('../controllers/resController');

router.get("/verify", verify, resController.resBack);

module.exports = router;