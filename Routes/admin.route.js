const {adminlogin} = require("../Controller/admin.controller")
const express = require("express")
const adminRouter = express.Router()


adminRouter.get("/adlogin", adminlogin)


module.exports = adminRouter