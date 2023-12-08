const mongoose=require("mongoose")

require("dotenv").config()

exports.dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{

        useUnifiedTopology:true,
        useNewUrlParser:true

    })

    .then(()=>{
        console.log("db connection successfully")
    })

    .catch(()=>{
        console.log("something error occure")
    })
}