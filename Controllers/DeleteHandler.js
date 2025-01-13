const mongoose = require("mongoose");

const DeleteHandler = async (req, res) => {
  const MovieModel = mongoose.model("YourModelname");
  // http://localhost:8000/data?id=67853a091af9932096dda0e8

  const { id } = req.query; //the delete cannot be perforemed by sending data via body like we did for create and update instead we send the data via query  in url like above

  try {
    if (!id) throw "need an id to delete";
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }

  await MovieModel.deleteOne({ _id: id }); //deleteone deletes one only data specified
  // await MovieModel.deleteMany({ }); //deleteMany deletes all data at once
  res.status(200).json({
    message: "deletesuccess",
  });
};
module.exports = DeleteHandler;
