const Chat = require("./models/chat.js");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

const mongoose = require("mongoose");  

main()
 .then(()=> {
        console.log("Connection Successful");
 })
.catch(err =>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "kom",
    to : "jom",
    message : "how are they?",
    created_at : new Date()
})

  
// chat1.save().then((res)=>
//     console.log(res)

// );



//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});

//new route
app.get("/chats/new", async (req, res) => {
    
    res.render("new.ejs");
}); 


//create route
app.post("/chats",(req,res)=>{
  let {from,to, message}= req.body; 
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date()
  })
  newChat.save().then(()=>{console.log("Saved in DB"); });
  
  res.redirect("/chats");
});


app.get("/",(req,res)=>{  
    res.send("Root is Working") 
})

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

 