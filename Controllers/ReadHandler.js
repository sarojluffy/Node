const mongoose = require("mongoose");

const ReadHandler = async (req, res) => {
  const MoviesModel = mongoose.model("YourModelname");

  const movies = await MoviesModel.find({
    // name: req.body.name, // searching via specific attribute
  });

  res.status(200).json({
    data: movies,
  });
};
module.exports = ReadHandler;
