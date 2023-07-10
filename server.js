const express = require('express')
const router = require("./routes/routes")


const app=express()
const Port  = process.env.Port || 1000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));



app.use("/authentication",router)

app.listen(Port, ()=>{
    console.log("Running ...");
})