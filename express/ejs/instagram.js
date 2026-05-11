

 const express = require("express");
 
 const app = express();
 const path = require("path");
 app.set("views",path.join(__dirname,"views"));
 app.set("view engine", "ejs");

 port = 8080;
 


app.listen(port, ()=>{
     console.log("server is listening.");
 });

 
 app.get("/ig/:username",(req,res)=>

{
    
    const instadata = require("./data.json");
    console.log(instadata);
    const  { username }= req.params;
    const data = instadata[username];
    if(data){
            res.render("instagram",{data:instadata[username]});
    }
    else{
        res.render("error");
    }
    
     
 });
 
 //<%- include("path/to/file") %>

 // include is used for adding another html file in the rendering file by only adding the link