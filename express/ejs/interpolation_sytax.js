
//passing data to ejs


 const express = require("express");
 
 const app = express();
 
 const path = require("path");
 
 port = 8080;
 


app.listen(port, ()=>{
     console.log("server is listening.");
 });

 
 app.get("/rolldice",(req,res)=>
{
    dice2=Math.floor(Math.random() * 6) + 1
     res.render("rolldice.ejs",{dice2});
 });
 
 