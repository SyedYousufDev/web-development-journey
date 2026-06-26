 const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Connection Successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User",userSchema);
// const User1 = new User({
//     name : "Khan",
//     email : "k@gmail.com",
//     age : 15,

// });

// const User2 = new User({
//     name : "jan",
//     email : "j@gmail.com",
//     age : 20,

// });

// User1.save();
// User2.save();

//inserint many
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ]).then((res) => {
//   console.log(res);
// });


//find()
// User.find({ age: { $gte: 47 } }).then((data) => {
//   console.log(data[0].name);
//   console.log(data);

// });


// updating
// User.updateOne({ name: "Bruce" }, { age: 49 }).then((res) => {
//     console.log(res);
//   });



//first find and then update but new:true shows updated version
// User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });



//deleteone and can also be many
    // User.deleteOne({name: "Adam"}).then((res)=>{
    //     console.log(res);
    // });





    //deleting by id many

    // Put both IDs you want to delete into an array
//   const idsToDelete = [
//     "6a3eb8a440f2f994542bb2ad", // First ID
//     "6a3eb8a440f2f994542bb2ac"  // Second ID
//   ];

//   User.deleteMany({ _id: { $in: idsToDelete } })
//     .then((res) => {
//       console.log(res); 
//       // Logs stats like: { acknowledged: true, deletedCount: 2 }
//     })
//     .catch((err) => {
//       console.log(err);
//     });


    User.find().then((data)=>{
        console.log(data);
    });



  //contraints on schema
//   const bookSchema = mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//   },
//   price: {
//     type: Number,
//   },
// });  