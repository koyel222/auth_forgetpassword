const express=require("express")
const app=express();

app.use(express.json())

require("dotenv").config()

const port=process.env.port||4000

app.listen(port,()=>{
    console.log("app created successfully")
})
app.get("/",(req,res)=>{
    console.log("hellow this is home page")
})

const router=require("./routes/auth")
app.use("/api/v1",router)

require("./config/database").dbconnect();

