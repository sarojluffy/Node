const mongoose = require("mongoose");

const Createhandler = async (req, res) => {
  const MoviesModel = mongoose.model("YourModelname"); //importing the model/collection , CALLED INSIDE THE FUNCTION
  // cause importing the model only after it has been initialized in app.js and only if we enter this route , else if we had initalized this outside of create handler than it would try top import model which has never been initialized in App.js

  console.log(req.body);

  const createddata = await MoviesModel.create({
    // date created in database
    name: req.body.name,
    info: req.body.info,
    image: req.body.image,
    rating: req.body.rating,
  });
  // await MoviesModel.create({
  //   name: "anymovie",
  //   info: "random inf0",
  //   image: "random image",
  //   rating: 4,
  // });
  res.status(200).json({
    // response
    message: "successcreate",
    createddata: createddata,
  });
};
module.exports = Createhandler;
