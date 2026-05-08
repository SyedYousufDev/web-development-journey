const express = require("express");

const app = express();

port = 8080;

app.listen(port, ()=>{
    console.log("server is listening.");
});

app.get("/search",(req,res)=>{
   let {q} = req.query;

   res.send(`Your results are : ${q}`);
});