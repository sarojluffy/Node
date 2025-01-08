// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const Dataschema = new mongoose.Schema({
  //create schema
  name: { type: String },
  info: { type: String },
  image: { type: String },
  rating: { type: Number },
});

const DataModel = mongoose.model("YourModelname", Dataschema); //create a Model/collection

module.exports = Dataschema;
