const express = require('express');
const fs = require("fs");
const app = express();

const PORT=5000;
app.get("/",(req, res)=>{
    fs.readFile("./ishciler.json", "utf-8", (error,data)=>{
        if(!error){
            res.send(data)
        }
    })

} )

app.get("/about",(req, res)=>{
    res.send("THIS MY ABOUT PAGE")
} )
app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server is running on the port ${PORT}`)
    }
    else{
        console.log("ERROR HAPPENED")
    }
})