const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



Chat.insertMany([
 {
    from: "rohit",
    to: "mohit",
    message: "Are we still playing football tonight?",
    created_at: new Date()
  },
  {
    from: "sneha",
    to: "priya",
    message: "Don't forget to send me the notes for the assignment.",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "rahul",
    message: "Happy Birthday! Have a great day ahead!",
    created_at: new Date()
  },
  {
    from: "alice",
    to: "bob",
    message: "The meeting has been rescheduled to 3 PM.",
    created_at: new Date()
  },
  {
    from: "vikram",
    to: "ananya",
    message: "I just reached the cafe, where are you?",
    created_at: new Date()
  }
    
])