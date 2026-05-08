const express = require("express");

const app = express();

const port = 3000;

app.listen(port,()=>{
  console.log(`server is listening at ${port}`);
});


app.get("/",(req,res)=>{
 res.send("Your are on main root.");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlStr);
});