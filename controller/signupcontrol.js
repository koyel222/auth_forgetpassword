const bcrypt=require("bcrypt")
const userdetails=require("../model/usermodel")

exports.usersign=async(req,res)=>{
    try{

        const{username,email,password}=req.body
        //validation check
        if(!username||!email||!password){
            return res.status(400).json({
                success:false,
                message:"enter the details carefully"
            })
        }
        //check the user email already exist or not

        const existuser=await userdetails.findOne({email})

        if(existuser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }

        let hashpassword;
        try{

            hashpassword=await bcrypt.hash(password,8)

        }catch(err){
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }

        //create new user

        const newuser=await userdetails.create({username,email,password:hashpassword})
        return res.status(200).json({
            success:true,
            message:"successfully completed"
        })

    }catch(err){
        return res.status(500).json({
           success:false,
           message:"error occure" 
        })
    }
}