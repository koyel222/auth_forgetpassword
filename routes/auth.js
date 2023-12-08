const express=require("express");
const router=express.Router();

const{usersign}=require("../controller/signupcontrol")
const{userlogin}=require("../controller/logincontrol")
const{forgetPassword,resetPassword}=require("../controller/forgetPassword")


router.post("/usersign",usersign)
router.post("/userlogin",userlogin)
router.post("/forgetPassword",forgetPassword)
router.post("/resetPassword",resetPassword)

module.exports=router
