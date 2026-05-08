
const express = require("express");

const app = express();

const port = 3000;

app.listen(port,()=>{
  console.log(`server is listening at ${port}`);
});


app.get("/",(req,res)=>{
 res.send("Your are on main root.");
});

app.get("/search",(req,res)=>{
 res.send("Your are on searching.");
});

app.get("/help",(req,res)=>{
 res.send("You want any help?.");
});

app.get("/home",(req,res)=>{
 res.send("This is home page");
});

// app.get("(.*)",(req,res)=>{
//  res.send("You typed invalid path.");
// });

app.post("/",(req,res)=>{
 res.send("Your command is post. Thank You.");
});

