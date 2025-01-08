const mongoose = require("mongoose");

const Createhandler = async (req, res) => {
  const MoviesModel = mongoose.model("YourModelname"); //importing the model/collection
  await MoviesModel.create({
    name: "anymovie",
    info: "random inf0",
    image: "random image",
    rating: 4,
  });
  res.status(200).json({
    message: "successcreate",
  });
};
module.exports = Createhandler;
