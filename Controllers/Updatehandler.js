const mongoose = require("mongoose");
const Updatehandler = async (req, res) => {
  const MovieModel = mongoose.model("YourModelname");

  const { id, rating, info } = req.body;
  console.log(id, rating);

  try {
    if (!id) {
      throw "id not found ";
    }
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }

  try {
    await MovieModel.updateOne(
      //accept two parameters generally , one is a object that identifies which one, another object represents the data to be modified
      { _id: id },
      { rating: rating, info: info }, //datas to be updated
      { runValidators: true } // this runs he validator from the model file , in update (patch) we need this
    ); //updatee one updates one data, takes two objects as params , the first object is the identifier while the other one is the updating value
    res.status(200).json({
      message: "successupdate",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
    return;
  }
};
module.exports = Updatehandler;
