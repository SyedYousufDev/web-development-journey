
const express = require('express');
const app = express();
port = 8080;

const {v4: uuidv4} = require("uuid");

const methodOverride = require("method-override");

const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

let posts = [

    {
        id : '1a',
        username : "imran khan",
        content : "Break idols of fear",
    },
    {
        id : uuidv4(),
        username : "Quaid Azam",
        content : "Work Hard",
    },
    {
        id : uuidv4(),
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

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{

   let id = uuidv4(); 
   let {username,content} =req.body;
   posts.push({id, username,content});
   res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    
    res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    
    res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
    
});

app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});