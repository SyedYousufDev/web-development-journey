
const express = require('express');
const app = express();
port = 8080;

const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));
app.set(express.urlencoded({extended: true}));

let posts = [

    {
        username : "imran khan",
        content : "Break idols of fear",
    },
    {
        username : "Quaid Azam",
        content : "Work Hard",
    },
    {
        username : "Alama Iqbal",
        content : "THink like Shaheen",
    },

];
    



app.listen(port, ()=>{
    console.log(`listening on port localhost:${port}`)
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})