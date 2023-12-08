const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    resetPasswordExpires:{
        type:Date
    },

    token:{
        type:String
    }
})

module.exports=mongoose.model("userdetails",userschema);