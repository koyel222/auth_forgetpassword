const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")
//import model
const userdetails=require("../model/usermodel")


exports.userlogin=async(req,res)=>{
    try{
        //data fetch=>username,password
        const{username,password}=req.body
        //validation check
        if(!username||!password){
            return res.status(400).json({
                success:false,
                message:"enter  the details properly"
            })
        }
        //looking for user
        const existloguser=await userdetails.findOne({username})

        if(!existloguser){
            return res.status(400).json({
                success:false,
                message:"user is not present"
            }) 
        }

        //compare password
        if(await bcrypt.compare(password,existloguser.password)){
            const payload={
                email:existloguser.email,
                username:existloguser.username,
                userid:existloguser._id
            }
            const token=jwt.sign(payload,"koyel",{expiresIn:"1h"})

            const options={
                expiresIn:"1h",
                httpOnly:true
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                message:"loguser successfully log in"
            })
        }else{
            res.status(400).json({
                sucess:false,
                message:"incorrect password "
            })
        }

    }catch(err){
        res.status(500).json({
            success:false,
            message:"loging is not successfully something  internal error occurs"
        })
    }
}



//create token 
//add token into the user 
//add token into cookie and sent successfull msg