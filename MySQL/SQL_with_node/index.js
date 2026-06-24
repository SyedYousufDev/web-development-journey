// const { faker } = require("@faker-js/faker");
const connection = require("mysql2");

const express = require("express");
const app = express();
path = require("path");

app.use(express.json());
// 1. Setup the parsing middleware first
app.use(express.urlencoded({ extended: true }));
// 2. Setup method-override second
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"..","views"));


const connect = connection.createConnection({
    host : "localhost",
    user: "root",
    database: "edueval_db",
    password: "" // Ensure this matches your actual local MySQL root password
});

// // Inserting New Data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let createRandomUser = () => {
//     return [
//          faker.string.uuid(),
//          faker.internet.username(), // Fixed: username with a lowercase 'n'
//          faker.internet.email(),
//          faker.internet.password(),
         
         
//        ];
    
//     };
// // Tip: If you already ran this once, change "123" to something else (e.g., "124") to avoid duplicate errors!
// let data = [];

// for (let i = 1; i<=100; i++){
//     data.push(createRandomUser());
// }

// conn.query(q, [data], (err, result) => {
//     if (err) {
//         console.error("❌ An error occurred while inserting data:");
//         console.error(err); // This will now cleanly print the exact MySQL error
//         return;
//     }
    
//     console.log("✅ 100 Data inserted successfully!");
//     console.log(result);
// });

 app.listen("8080",(req,res)=>{
    console.log("listening on port 8080");
 });

 app.get("/", (req, res) => {
    
    let q = "SELECT count(*) AS total FROM `user`";
    
    connect.query(q, (err, result) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).send("some error occurred"); 
        }
        let count = result[0].total;
        res.render("home", { count });
    });
});

app.get("/user", (req, res) => {
    
    let q = "SELECT id,username,email FROM `user`";
    
    connect.query(q, (err, result) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).send("some error occurred"); 
        }
        
        let data = result;
        res.render("users", { data });
    });
});


app.get("/user/:id/edit",(req,res)=>
    {
    let {id} = req.params;
    q = `select * from user where id='${id}'`;

    connect.query(q, (err, result) =>
        {
        if (err) 
            {
            console.error("❌ Database Error:", err);
            return res.status(500).send("some error occurred"); 
            }
         let user = result[0];   
        res.render("edit",{user});
        }
    
        )});

//UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connect.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass !== user.password) {
                res.send("WRONG password");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connect.query(q2, (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            }
        });
    } catch (err) {
        console.log(err);
    }
});        

 //connection.end();
