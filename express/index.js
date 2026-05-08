
express = require("express");

app = express();

port = 8080;

app.listen(port, ()=>{
    console.log(`port # ${port} is listening`);
});

app.use((req,res)=>{
    console.log(`Request recieved.`);
});

