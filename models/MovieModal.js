// modal without validation

// const mongoose = require("mongoose");

// const Dataschema = new mongoose.Schema({
//   //create schema
//   name: { type: String },
//   info: { type: String },
//   image: { type: String },
//   rating: { type: Number },
// });

// const DataModel = mongoose.model("YourModelname", Dataschema); //create a Model/collection

// module.exports = Dataschema;
// ----------------------------------------------------------------------------------------------------------------------
// @ model with validation
const mongoose = require("mongoose");

const Dataschema = new mongoose.Schema({
  //create schema
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [3, "name must be at least 3 chars"], //minlength is inbuilt validator provided by mongoose
  },
  // true defines that this validation is required , the text at the right displays if the validation is not satisfied (the text is also the error message )
  info: { type: String, required: [true, "info is required"] },
  image: { type: String, required: [true, "image is required"] },
  rating: {
    type: Number,
    required: [true, "rating is required"],
    // min: [0, "must be between 1-10"], //min is inbuilt validator provided by mongoose
    // max: [10, "must be between 1-10"],
    validate: {
      //custom validator which taes two parameters , one is call back function (validator) another is error message
      validator: (value) => {
        // call back function (first parameter )
        if (value < 0 || value > 10) return false;
      },
      message: "must be between 1-10", //error message , second parameter
      // second parameter triggers when the first paramter returns false
    },
  },
});

const DataModel = mongoose.model("YourModelname", Dataschema); //create a Model/collection

module.exports = Dataschema;// export YourModelname here , dataschema is wrong
