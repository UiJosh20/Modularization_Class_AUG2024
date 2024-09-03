const express = require("express");
const router = express.Router();
const {register, signup} = require("../Controller/user.controller");


router.get("/register",register)
router.post("/signup",signup)


module.exports = router;