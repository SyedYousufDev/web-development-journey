const express = require("express");

const app = express();

const path = require("path");

port = 8080;

app.set("views",path.join(__dirname,"/views"));

app.listen(port, ()=>{
    console.log("server is listening.");
});

app.set("view engine","ejs");


app.get("/",(req,res)=>{
 res.render("home.ejs");
});

app.get("/help",(req,res)=>{
 res.send("This is help page.");
});