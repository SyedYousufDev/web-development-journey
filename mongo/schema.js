
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "please enter a valid price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre: [String],
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  }
  })

  //all the above schema contraints are important



  //Rules of schema only work at insertion not updation

  //if want to run validators at updatation also, so use 3rd key value pair {runValidators: true}

  //Can create custom messages--->  console.log(err.errors.price.properties.message);
