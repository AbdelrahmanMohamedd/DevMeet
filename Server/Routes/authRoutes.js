var express = require("express")
var router = express.Router();

 
var authController= require('../Controllers/authController')
var authMW = require('../MiddleWares/authMW')

//register user
router.post("/register", authController.RegisterNewUser),
//login user
router.post("/login", authController.LoginUser)
//logout user
router.get("/logout", authController.LogoutUser)

module.exports=router;